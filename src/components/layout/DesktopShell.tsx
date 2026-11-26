import type { ReactNode } from 'react';

export function DesktopShell({ children }: { children: ReactNode }) {
  return (
    <div className="desktop-shell">
      <header className="desktop-header" aria-label="Cabeçalho do sistema">
        <span>Karlos Eduardo OS</span>
      </header>
      {children}
    </div>
  );
}
