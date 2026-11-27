import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import type { ManagedWindowId } from '../../types/windowManager';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useWindowDrag } from '../../hooks/useWindowDrag';
import { MaterialIcon, type MaterialIconName } from '../ui/MaterialIcon';
import { WindowFrame } from './WindowFrame';

const controlTextStyle: CSSProperties = {
  fontFamily: 'var(--font-label-md)',
  fontSize: 'var(--text-label-md)',
  fontWeight: 700,
  lineHeight: 1,
};

type WindowSize = {
  width: number;
  height: number;
};

type ResizePointerState = WindowSize & {
  pointerId: number;
  startX: number;
  startY: number;
};

function getAvailableWindowSize(element: HTMLElement): WindowSize {
  const rect = element.getBoundingClientRect();
  const taskbarHeight = document.querySelector('.taskbar')?.getBoundingClientRect().height ?? 0;
  return {
    width: Math.max(0, document.documentElement.clientWidth - rect.left),
    height: Math.max(0, document.documentElement.clientHeight - taskbarHeight - rect.top),
  };
}

type ManagedWindowProps = {
  id: ManagedWindowId;
  title: string;
  accessibleTitle: string;
  icon: MaterialIconName;
  menu?: string[];
  status?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ManagedWindow({
  id,
  title,
  accessibleTitle,
  icon,
  menu,
  status,
  children,
  className,
}: ManagedWindowProps) {
  const frameRef = useRef<HTMLElement>(null);
  const { windows, closeWindow, bringToFront } = useWindowManager();
  const windowState = windows[id];
  const drag = useWindowDrag(id, frameRef, windowState.deslocamento);
  const [size, setSize] = useState<WindowSize | null>(null);
  const resizeRef = useRef<ResizePointerState | null>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.style.setProperty('--tx', `${windowState.deslocamento.x}px`);
    frame.style.setProperty('--ty', `${windowState.deslocamento.y}px`);
  }, [windowState.deslocamento]);

  const bringWindowToFront = useCallback(() => bringToFront(id), [bringToFront, id]);

  const handleResizePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const frame = frameRef.current;
    if (!frame || !drag.desktopMode || event.button !== 0) return;

    const rect = frame.getBoundingClientRect();
    resizeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      width: rect.width,
      height: rect.height,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleResizePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const resize = resizeRef.current;
    const frame = frameRef.current;
    if (!drag.desktopMode || !resize || !frame || resize.pointerId !== event.pointerId) return;

    const availableSize = getAvailableWindowSize(frame);
    setSize({
      width: Math.min(availableSize.width, Math.max(0, resize.width + event.clientX - resize.startX)),
      height: Math.min(availableSize.height, Math.max(0, resize.height + event.clientY - resize.startY)),
    });
  };

  const handleResizePointerEnd = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (resizeRef.current?.pointerId === event.pointerId) resizeRef.current = null;
  };

  const handleResizeKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (!drag.desktopMode) return;

    if (event.key === 'Home') {
      event.preventDefault();
      setSize(null);
      return;
    }

    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();

    const availableSize = getAvailableWindowSize(frame);
    const step = event.shiftKey ? 64 : 16;
    const delta: Record<string, WindowSize> = {
      ArrowRight: { width: step, height: 0 },
      ArrowDown: { width: 0, height: step },
      ArrowLeft: { width: -step, height: 0 },
      ArrowUp: { width: 0, height: -step },
    };
    const change = delta[event.key];
    if (!change) return;

    event.preventDefault();
    setSize({
      width: Math.min(availableSize.width, Math.max(0, rect.width + change.width)),
      height: Math.min(availableSize.height, Math.max(0, rect.height + change.height)),
    });
  };

  return (
    <WindowFrame
      sectionRef={frameRef}
      id={id}
      title={title}
      accessibleTitle={accessibleTitle}
      icon={icon}
      menu={menu}
      status={status}
      className={`managed-window windowed-frame ${className ?? ''}`}
      hidden={!windowState.aberta}
      tabIndex={-1}
      ariaLabelledBy={`${id}-focus-title`}
      focusTitle
      style={{
        zIndex: windowState.z,
        width: drag.desktopMode ? size?.width : undefined,
        height: drag.desktopMode ? size?.height : undefined,
      }}
      onPointerDownCapture={bringWindowToFront}
      titlebarContent={
        <button
          type="button"
          className="titlebar-name titlebar-drag-handle"
          aria-label={`Mover janela ${accessibleTitle}`}
          aria-describedby={`${id}-drag-instructions`}
          aria-disabled={!drag.desktopMode}
          tabIndex={0}
          style={{ cursor: drag.desktopMode ? 'grab' : 'default' }}
          onFocus={bringWindowToFront}
          onPointerDown={drag.onPointerDown}
          onPointerMove={drag.onPointerMove}
          onPointerUp={drag.onPointerUp}
          onPointerCancel={drag.onPointerCancel}
          onLostPointerCapture={drag.onLostPointerCapture}
          onKeyDown={drag.onKeyDown}
        >
          <MaterialIcon name={icon} aria-hidden="true" />
          <span>{title}</span>
        </button>
      }
      controls={
        <div className="window-controls">
          <button
            type="button"
            className="window-control"
            aria-label={`Minimizar janela ${accessibleTitle} (fecha a janela; reabra pela barra de tarefas)`}
            style={controlTextStyle}
            onClick={() => closeWindow(id)}
          >
            _
          </button>
          <span aria-hidden="true">□</span>
          <button
            type="button"
            className="window-control close-control"
            aria-label={`Fechar janela ${accessibleTitle}`}
            style={controlTextStyle}
            onClick={() => closeWindow(id)}
          >
            X
          </button>
        </div>
      }
      resizeHandle={
        <button
          type="button"
          className="window-resize-handle"
          aria-label={`Redimensionar janela ${accessibleTitle}`}
          aria-describedby={`${id}-resize-instructions`}
          aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight Home"
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerEnd}
          onPointerCancel={handleResizePointerEnd}
          onLostPointerCapture={handleResizePointerEnd}
          onKeyDown={handleResizeKeyDown}
        />
      }
    >
      <span className="sr-only" id={`${id}-drag-instructions`}>
        Use as setas para mover, Home para voltar à posição original.
      </span>
      <span className="sr-only" id={`${id}-resize-instructions`}>
        Use as setas para redimensionar. Shift com as setas altera o tamanho em passos maiores. Home restaura o tamanho inicial.
      </span>
      {children}
    </WindowFrame>
  );
}
