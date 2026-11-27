import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent, RefObject } from 'react';
import type { ManagedWindowId, WindowOffset } from '../types/windowManager';
import { clampOffset } from '../utils/windowManager';
import { useWindowManager } from '../context/WindowManagerContext';

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  startOffset: WindowOffset;
  lastOffset: WindowOffset;
};

const desktopQuery = '(min-width: 1024px) and (pointer: fine)';

function isDesktopPointer(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia(desktopQuery).matches;
}

function getClampedOffset(
  element: HTMLElement,
  desired: WindowOffset,
  current: WindowOffset,
): WindowOffset {
  const rect = element.getBoundingClientRect();
  const documentRect = {
    left: rect.left + window.scrollX - current.x,
    top: rect.top + window.scrollY - current.y,
    width: rect.width,
    height: rect.height,
  };
  const viewport = {
    width: document.documentElement.clientWidth,
    scrollY: window.scrollY,
    documentHeight: Math.max(
      window.scrollY,
      document.documentElement.clientHeight - (document.querySelector('.taskbar')?.getBoundingClientRect().height ?? 0),
    ),
    topbarBottom: document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0,
  };
  return clampOffset(desired, documentRect, viewport);
}

function applyOffset(element: HTMLElement, offset: WindowOffset) {
  element.style.setProperty('--tx', `${offset.x}px`);
  element.style.setProperty('--ty', `${offset.y}px`);
}

export function useWindowDrag(
  id: ManagedWindowId,
  windowRef: RefObject<HTMLElement | null>,
  offset: WindowOffset,
) {
  const { moveWindow, bringToFront } = useWindowManager();
  const dragRef = useRef<DragState | null>(null);
  const [desktopMode, setDesktopMode] = useState(isDesktopPointer);

  const finishDrag = useCallback((pointerId?: number) => {
    const drag = dragRef.current;
    const element = windowRef.current;
    if (!drag || !element || (pointerId !== undefined && drag.pointerId !== pointerId)) return;

    const finalOffset = getClampedOffset(element, drag.lastOffset, drag.lastOffset);
    applyOffset(element, finalOffset);
    element.classList.remove('is-dragging');
    document.documentElement.classList.remove('window-dragging');
    const handle = document.querySelector<HTMLButtonElement>(`#${id} .titlebar-drag-handle`);
    if (handle) {
      handle.classList.remove('is-grabbing');
      handle.style.cursor = isDesktopPointer() ? 'grab' : 'default';
    }
    dragRef.current = null;
    moveWindow(id, finalOffset.x, finalOffset.y);
  }, [id, moveWindow, windowRef]);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia(desktopQuery);
    const updateMode = () => {
      setDesktopMode(query.matches);
      if (!query.matches && dragRef.current) finishDrag(dragRef.current.pointerId);
    };
    updateMode();
    query.addEventListener('change', updateMode);
    return () => query.removeEventListener('change', updateMode);
  }, [finishDrag]);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    const element = windowRef.current;
    if (!element || !desktopMode || !isDesktopPointer() || event.button !== 0) return;

    const startOffset = offset;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset,
      lastOffset: startOffset,
    };
    bringToFront(id);
    element.classList.add('is-dragging');
    document.documentElement.classList.add('window-dragging');
    event.currentTarget.classList.add('is-grabbing');
    event.currentTarget.style.cursor = 'grabbing';
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [bringToFront, desktopMode, id, offset, windowRef]);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    const element = windowRef.current;
    if (!drag || !element || drag.pointerId !== event.pointerId) return;
    if (!isDesktopPointer()) {
      finishDrag(event.pointerId);
      return;
    }

    const desired = {
      x: drag.startOffset.x + event.clientX - drag.startX,
      y: drag.startOffset.y + event.clientY - drag.startY,
    };
    const nextOffset = getClampedOffset(element, desired, drag.lastOffset);
    drag.lastOffset = nextOffset;
    applyOffset(element, nextOffset);
  }, [finishDrag, windowRef]);

  const onPointerUp = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove('is-grabbing');
    event.currentTarget.style.cursor = desktopMode ? 'grab' : 'default';
    finishDrag(event.pointerId);
  }, [desktopMode, finishDrag]);

  const onPointerCancel = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove('is-grabbing');
    event.currentTarget.style.cursor = desktopMode ? 'grab' : 'default';
    finishDrag(event.pointerId);
  }, [desktopMode, finishDrag]);

  const onLostPointerCapture = useCallback((event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.remove('is-grabbing');
    event.currentTarget.style.cursor = desktopMode ? 'grab' : 'default';
    finishDrag(event.pointerId);
  }, [desktopMode, finishDrag]);

  const onKeyDown = useCallback((event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!desktopMode || !isDesktopPointer()) return;

    const movement = event.shiftKey ? 64 : 16;
    const direction: Record<string, WindowOffset> = {
      ArrowUp: { x: 0, y: -movement },
      ArrowDown: { x: 0, y: movement },
      ArrowLeft: { x: -movement, y: 0 },
      ArrowRight: { x: movement, y: 0 },
    };
    const element = windowRef.current;

    if (event.key === 'Home') {
      event.preventDefault();
      bringToFront(id);
      if (element) applyOffset(element, { x: 0, y: 0 });
      moveWindow(id, 0, 0);
      return;
    }

    const delta = direction[event.key];
    if (!delta || !element) return;
    event.preventDefault();
    bringToFront(id);
    const nextOffset = getClampedOffset(
      element,
      { x: offset.x + delta.x, y: offset.y + delta.y },
      offset,
    );
    applyOffset(element, nextOffset);
    moveWindow(id, nextOffset.x, nextOffset.y);
  }, [bringToFront, desktopMode, id, moveWindow, offset, windowRef]);

  return {
    desktopMode,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onLostPointerCapture,
    onKeyDown,
  };
}
