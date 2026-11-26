import type { ReactNode } from 'react';

type WindowFrameProps = {
  id: string;
  title: string;
  icon?: ReactNode;
  menu?: string[];
  status?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function WindowFrame({ id, title, icon, menu = [], status, children, className = '' }: WindowFrameProps) {
  return (
    <section id={id} className={`window-frame ${className}`}>
      <header className="titlebar">
        <div className="titlebar-name">
          {icon && <span className="titlebar-icon" aria-hidden="true">{icon}</span>}
          <h2>{title}</h2>
        </div>
        <div className="window-controls" aria-hidden="true">
          <span>_</span><span>□</span><span className="close-control">×</span>
        </div>
      </header>
      {menu.length > 0 && (
        <div className="window-menu" aria-label="Menu da janela">
          {menu.map((item) => <span key={item}>{item}</span>)}
        </div>
      )}
      <div className="window-content">{children}</div>
      {status && <footer className="window-status">{status}</footer>}
    </section>
  );
}
