import { useWindowManager } from '../../context/WindowManagerContext';
import { managedWindowIds } from '../../types/windowManager';
import { WindowFrame } from './WindowFrame';

export function AllWindowsClosedNotice() {
  const { windows, hasOpenedWindow, resetLayout } = useWindowManager();
  const allClosed = managedWindowIds.every((id) => windows[id].aberta);

  if (!hasOpenedWindow || !allClosed) return null;

  return (
    <WindowFrame
      id="all-windows-closed"
      title="Aviso do sistema"
      accessibleTitle="Aviso do sistema"
      icon="desktop_windows"
      className="all-windows-closed"
    >
      <p className="font-body-md text-body-md leading-relaxed">
        Todas as janelas foram fechadas. Use a barra de tarefas ou o menu Iniciar para reabrir.
      </p>
      <button
        type="button"
        className="all-windows-restore"
        style={{ fontFamily: 'var(--font-label-md)', fontSize: 'var(--text-label-md)' }}
        onClick={resetLayout}
      >
        Restaurar janelas
      </button>
    </WindowFrame>
  );
}
