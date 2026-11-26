import type { ReactNode } from 'react';
import { MaterialIcon, type MaterialIconName } from '../ui/MaterialIcon';

type WindowFrameProps = {
  id: string;
  title: string;
  accessibleTitle: string;
  icon: MaterialIconName;
  menu?: string[];
  status?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function WindowFrame({
  id,
  title,
  accessibleTitle,
  icon,
  menu = [],
  status,
  children,
  className = '',
}: WindowFrameProps) {
  return (
    <section id={id} className={`window-frame ${className}`} aria-label={accessibleTitle}>
      <header className="titlebar">
        <div className="titlebar-name" aria-hidden="true">
          <MaterialIcon name={icon} />
          <span>{title}</span>
        </div>
        <div className="window-controls" aria-hidden="true">
          <span>_</span><span>□</span><span className="close-control">X</span>
        </div>
      </header>
      {menu.length > 0 && (
        <div className="window-menu" aria-hidden="true">
          {menu.map((item) => <span key={item}>{item}</span>)}
        </div>
      )}
      <div className="window-content">{children}</div>
      {status && <div className="window-status">{status}</div>}
    </section>
  );
}
