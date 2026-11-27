import type { PointerEventHandler, ReactNode, Ref, CSSProperties } from 'react';
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
  titlebarContent?: ReactNode;
  controls?: ReactNode;
  resizeHandle?: ReactNode;
  sectionRef?: Ref<HTMLElement>;
  style?: CSSProperties;
  hidden?: boolean;
  tabIndex?: number;
  ariaLabelledBy?: string;
  focusTitle?: boolean;
  onPointerDownCapture?: PointerEventHandler<HTMLElement>;
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
  titlebarContent,
  controls,
  resizeHandle,
  sectionRef,
  style,
  hidden,
  tabIndex,
  ariaLabelledBy,
  focusTitle = false,
  onPointerDownCapture,
}: WindowFrameProps) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`window-frame ${className}`}
      aria-label={ariaLabelledBy ? undefined : accessibleTitle}
      aria-labelledby={ariaLabelledBy}
      style={style}
      hidden={hidden}
      tabIndex={tabIndex}
      onPointerDownCapture={onPointerDownCapture}
    >
      {focusTitle && <h2 className="sr-only" id={`${id}-focus-title`}>{accessibleTitle}</h2>}
      <header className="titlebar">
        {titlebarContent ?? (
          <div className="titlebar-name" aria-hidden="true">
            <MaterialIcon name={icon} />
            <span>{title}</span>
          </div>
        )}
        {controls ?? (
          <div className="window-controls" aria-hidden="true">
            <span>_</span><span>□</span><span className="close-control">X</span>
          </div>
        )}
      </header>
      {menu.length > 0 && (
        <div className="window-menu" aria-hidden="true">
          {menu.map((item) => <span key={item}>{item}</span>)}
        </div>
      )}
      <div className="window-content">{children}</div>
      {status && <div className="window-status">{status}</div>}
      {resizeHandle}
    </section>
  );
}
