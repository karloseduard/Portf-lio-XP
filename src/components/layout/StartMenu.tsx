import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import avatarUrl from '../../assets/avatar/avatar.png';
import { desktopCopy } from '../../data/desktop';
import { startMenuSections } from '../../data/navigation';
import { links } from '../../data/profile';
import { MaterialIcon } from '../ui/MaterialIcon';

type StartMenuProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const focusableSelector = 'a[href], button:not([disabled])';

export function StartMenu({ open, onClose, triggerRef }: StartMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const focusable = () => Array.from(menu?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
    focusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !isMobile) return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && (document.activeElement === first || !menu?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !menu?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menu?.contains(target) && !triggerRef.current?.contains(target)) onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      if (triggerRef.current?.isConnected) triggerRef.current.focus();
    };
  }, [open, isMobile, onClose, triggerRef]);

  return (
    <div
      className="start-menu-layer"
      hidden={!open}
      aria-hidden={!open}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={menuRef}
        id="start-menu"
        className="start-menu bg-window-surface-light pixel-border-raised"
        role="dialog"
        aria-label="Menu Iniciar"
        aria-modal={open && isMobile ? true : undefined}
      >
        <div className="start-menu-brand flex items-center gap-space-sm bg-gradient-to-r from-titlebar-gradient-dark to-taskbar-gradient-light p-space-sm text-on-primary">
          <img src={avatarUrl} width="36" height="36" alt="" aria-hidden="true" className="object-cover" />
          <span className="min-w-0 flex-1 truncate font-headline-sm text-headline-sm">{desktopCopy.systemName}</span>
          <button type="button" className="start-menu-close" onClick={onClose} aria-label="Fechar menu Iniciar">
            <MaterialIcon name="close" />
          </button>
        </div>
        <nav className="start-menu-links" aria-label="Atalhos do menu Iniciar">
          {startMenuSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={onClose}>
              <MaterialIcon name={section.icon} className="text-primary" />
              <span>{section.label}</span>
            </a>
          ))}
          <a href={links.resumeUrl} download onClick={onClose}>
            <MaterialIcon name="picture_as_pdf" className="text-tertiary" />
            <span>Baixar currículo</span>
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" onClick={onClose}>
            <MaterialIcon name="code" className="text-desktop-deep" />
            <span>GitHub</span>
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" onClick={onClose}>
            <MaterialIcon name="link" className="text-primary" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
