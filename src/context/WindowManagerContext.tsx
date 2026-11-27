import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import type {
  WindowId,
  WindowManagerState,
  WindowOffset,
} from '../types/windowManager';
import { managedWindowIds, windowIds } from '../types/windowManager';
import { clampOffset, createInitialWindowManagerState, windowManagerReducer } from '../utils/windowManager';

const windowNames: Record<WindowId, string> = {
  'boas-vindas': 'boas-vindas.exe',
  sobre: 'sobre',
  projetos: 'projetos',
  experiencia: 'experiência',
  skills: 'skills',
  formacao: 'formação',
  contato: 'contato',
};

type WindowManagerValue = {
  windows: WindowManagerState;
  hasOpenedWindow: boolean;
  closeWindow: (id: WindowId) => void;
  openWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, x: number, y: number) => void;
  bringToFront: (id: WindowId) => void;
  resetLayout: () => void;
  openAndGo: (id: WindowId) => void;
};

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

function isWindowId(value: string): value is WindowId {
  return (windowIds as readonly string[]).includes(value);
}

function getReducedMotionPreference(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type WindowManagerProviderProps = {
  children: ReactNode;
};

export function WindowManagerProvider({ children }: WindowManagerProviderProps) {
  const [windows, dispatch] = useReducer(windowManagerReducer, undefined, createInitialWindowManagerState);
  const [hasOpenedWindow, setHasOpenedWindow] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const windowsRef = useRef(windows);
  windowsRef.current = windows;

  const closeWindow = useCallback((id: WindowId) => {
    const current = windowsRef.current[id];
    if (id === 'boas-vindas' || !current.aberta) return;
    dispatch({ type: 'close', id });
    setAnnouncement(`Janela ${windowNames[id]} fechada. Reabra pela barra de tarefas.`);
    document.getElementById(`taskbar-${id}`)?.focus();
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    if (windowsRef.current[id].aberta) return;
    dispatch({ type: 'open', id });
    setHasOpenedWindow(true);
    setAnnouncement(`Janela ${windowNames[id]} aberta.`);
  }, []);

  const moveWindow = useCallback((id: WindowId, x: number, y: number) => {
    dispatch({ type: 'move', id, offset: { x, y } });
  }, []);

  const bringToFront = useCallback((id: WindowId) => {
    dispatch({ type: 'bring-to-front', id });
  }, []);

  const resetLayout = useCallback(() => {
    dispatch({ type: 'reset-layout' });
    setHasOpenedWindow(true);
  }, []);

  const navigateToWindow = useCallback((id: WindowId, updateHash: boolean) => {
    const current = windowsRef.current[id];
    if (!current.aberta && id !== 'boas-vindas') {
      dispatch({ type: 'open', id });
      setHasOpenedWindow(true);
      setAnnouncement(`Janela ${windowNames[id]} aberta.`);
    } else if (id !== 'boas-vindas') {
      dispatch({ type: 'bring-to-front', id });
    }

    if (updateHash && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`);
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({
        behavior: getReducedMotionPreference() ? 'instant' : 'smooth',
        block: 'start',
      });
      if (id !== 'boas-vindas') target.focus({ preventScroll: true });
    });
  }, []);

  const openAndGo = useCallback((id: WindowId) => {
    navigateToWindow(id, true);
  }, [navigateToWindow]);

  const clampOpenWindows = useCallback(() => {
    const desktopMode = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    if (!desktopMode) {
      const zeroOffsets: Partial<Record<WindowId, WindowOffset>> = {};
      managedWindowIds.forEach((id) => {
        zeroOffsets[id] = { x: 0, y: 0 };
      });
      dispatch({ type: 'set-offsets', offsets: zeroOffsets });
      return;
    }

    const viewport = {
      width: document.documentElement.clientWidth,
      scrollY: window.scrollY,
      documentHeight: Math.max(
        window.scrollY,
        document.documentElement.clientHeight - (document.querySelector('.taskbar')?.getBoundingClientRect().height ?? 0),
      ),
      topbarBottom: document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0,
    };
    const offsets: Partial<Record<WindowId, WindowOffset>> = {};

    managedWindowIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element || element.classList.contains('is-dragging') || !windowsRef.current[id].aberta) return;

      const current = windowsRef.current[id].deslocamento;
      const rect = element.getBoundingClientRect();
      const documentRect = {
        left: rect.left + window.scrollX - current.x,
        top: rect.top + window.scrollY - current.y,
        width: rect.width,
        height: rect.height,
      };
      offsets[id] = clampOffset(current, documentRect, viewport);
    });

    dispatch({ type: 'set-offsets', offsets });
  }, []);

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(clampOpenWindows);
    return () => window.cancelAnimationFrame(frame);
  }, [windows, clampOpenWindows]);

  useEffect(() => {
    let frame = 0;
    const desktopQuery = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const handleResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(clampOpenWindows);
    };
    window.addEventListener('resize', handleResize);
    desktopQuery.addEventListener('change', handleResize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      desktopQuery.removeEventListener('change', handleResize);
    };
  }, [clampOpenWindows]);

  useEffect(() => {
    const navigateFromHash = () => {
      const id = window.location.hash.slice(1);
      if (isWindowId(id)) navigateToWindow(id, false);
    };
    navigateFromHash();
    window.addEventListener('hashchange', navigateFromHash);
    return () => window.removeEventListener('hashchange', navigateFromHash);
  }, [navigateToWindow]);

  const value = useMemo(
    () => ({
      windows,
      hasOpenedWindow,
      closeWindow,
      openWindow,
      moveWindow,
      bringToFront,
      resetLayout,
      openAndGo,
    }),
    [windows, hasOpenedWindow, closeWindow, openWindow, moveWindow, bringToFront, resetLayout, openAndGo],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
      <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager(): WindowManagerValue {
  const context = useContext(WindowManagerContext);
  if (!context) throw new Error('useWindowManager deve ser usado dentro de WindowManagerProvider.');
  return context;
}
