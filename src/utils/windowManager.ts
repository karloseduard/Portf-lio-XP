import type {
  ManagedWindowId,
  WindowAction,
  WindowManagerState,
  WindowOffset,
  WindowState,
} from '../types/windowManager';

function createWindowState(z: number): WindowState {
  return {
    aberta: true,
    deslocamento: { x: 0, y: 0 },
    z,
  };
}

export function createInitialWindowManagerState(): WindowManagerState {
  return {
    'boas-vindas': createWindowState(0),
    sobre: { ...createWindowState(1), aberta: false },
    projetos: { ...createWindowState(2), aberta: false },
    experiencia: { ...createWindowState(3), aberta: false },
    skills: { ...createWindowState(4), aberta: false },
    formacao: { ...createWindowState(5), aberta: false },
    contato: { ...createWindowState(6), aberta: false },
  };
}

function createRestoredWindowManagerState(): WindowManagerState {
  return {
    'boas-vindas': createWindowState(0),
    sobre: createWindowState(1),
    projetos: createWindowState(2),
    experiencia: createWindowState(3),
    skills: createWindowState(4),
    formacao: createWindowState(5),
    contato: createWindowState(6),
  };
}

function bringManagedWindowToFront(
  state: WindowManagerState,
  id: ManagedWindowId,
): WindowManagerState {
  const orderedIds = Object.keys(state)
    .filter((windowId): windowId is ManagedWindowId => windowId !== 'boas-vindas')
    .sort((left, right) => state[left].z - state[right].z)
    .filter((windowId) => windowId !== id);
  orderedIds.push(id);

  const nextState = { ...state };
  orderedIds.forEach((windowId, index) => {
    nextState[windowId] = { ...state[windowId], z: index + 1 };
  });
  return nextState;
}

export function windowManagerReducer(
  state: WindowManagerState,
  action: WindowAction,
): WindowManagerState {
  if (action.type === 'reset-layout') {
    return createRestoredWindowManagerState();
  }

  if (action.type === 'set-offsets') {
    let changed = false;
    const nextState = { ...state };
    for (const [id, offset] of Object.entries(action.offsets)) {
      if (!offset || id === 'boas-vindas') continue;
      const windowId = id as ManagedWindowId;
      const current = state[windowId];
      if (current.deslocamento.x === offset.x && current.deslocamento.y === offset.y) continue;
      changed = true;
      nextState[windowId] = { ...current, deslocamento: offset };
    }
    return changed ? nextState : state;
  }

  if (action.id === 'boas-vindas') return state;

  const current = state[action.id];
  if (action.type === 'close') {
    if (!current.aberta) return state;
    return { ...state, [action.id]: { ...current, aberta: false } };
  }

  if (action.type === 'open') {
    const opened = {
      ...state,
      [action.id]: { ...current, aberta: true, deslocamento: { x: 0, y: 0 } },
    };
    return bringManagedWindowToFront(opened, action.id);
  }

  if (action.type === 'move') {
    if (!current.aberta) return state;
    if (current.deslocamento.x === action.offset.x && current.deslocamento.y === action.offset.y) return state;
    return { ...state, [action.id]: { ...current, deslocamento: action.offset } };
  }

  return bringManagedWindowToFront(state, action.id);
}

type ClampRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type ClampViewport = {
  width: number;
  scrollY: number;
  documentHeight: number;
  topbarBottom: number;
};

const subpixelTolerance = 0.0000001;

function clamp(value: number, min: number, max: number): number {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

export function clampOffset(
  offset: WindowOffset,
  documentRect: ClampRect,
  viewport: ClampViewport,
): WindowOffset {
  const minX = Math.ceil(-documentRect.left - subpixelTolerance);
  const maxX = Math.floor(viewport.width - documentRect.left - documentRect.width + subpixelTolerance);
  const minY = Math.ceil(viewport.topbarBottom + viewport.scrollY - documentRect.top - subpixelTolerance);
  const maxY = Math.floor(viewport.documentHeight - documentRect.top - documentRect.height + subpixelTolerance);

  return {
    x: clamp(offset.x, minX, maxX),
    y: clamp(offset.y, minY, maxY),
  };
}
