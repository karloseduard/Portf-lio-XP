import type { ReactNode } from 'react';

export function DesktopShell({ children }: { children: ReactNode }) {
  return <div className="desktop-shell">{children}</div>;
}
