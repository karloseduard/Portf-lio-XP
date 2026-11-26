import { useCallback, useEffect, useRef, useState } from 'react';
import { taskbarSections } from '../../data/navigation';
import { formatClockTime, toLocalDateTimeValue } from '../../utils/dateTime';
import { MaterialIcon } from '../ui/MaterialIcon';
import { StartMenu } from './StartMenu';

export function Taskbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('boas-vindas');
  const [now, setNow] = useState(() => new Date());
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    taskbarSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="taskbar fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-space-sm border-t-2 border-titlebar-gradient-light bg-gradient-to-r from-primary-container via-taskbar-gradient-light to-primary-container px-space-sm shadow-taskbar">
      <div className="start-menu-anchor relative flex h-full shrink-0 items-center">
        <button
          ref={startButtonRef}
          id="start-menu-trigger"
          className="start-button flex shrink-0 items-center gap-space-xs border border-pixel-outer-border bg-gradient-to-b from-secondary-container to-secondary px-space-md font-headline-sm text-headline-sm font-bold text-on-secondary shadow-taskbar-button transition-colors duration-150 hover:brightness-105 active:brightness-95"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="start-menu"
          aria-haspopup="dialog"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MaterialIcon name="cloud" className="text-tertiary-container" />
          <span>Iniciar</span>
        </button>
        <StartMenu open={menuOpen} onClose={closeMenu} triggerRef={startButtonRef} />
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-space-sm">
        <nav className="taskbar-navigation flex min-w-0 items-center gap-space-xs overflow-x-auto" aria-label="Seções">
          {taskbarSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`task-button flex shrink-0 items-center gap-space-xs whitespace-nowrap border border-pixel-bevel-shadow px-space-sm font-label-md text-label-md transition-colors duration-150 ${
                activeSection === section.id
                  ? 'bg-window-surface text-on-surface font-bold pixel-border-sunken'
                  : 'bg-window-surface-light text-on-surface-variant hover:bg-window-surface hover:text-on-surface'
              }`}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              <MaterialIcon name={section.icon} className={section.id === 'projetos' ? 'text-pixel-cloud-cream' : 'text-primary'} />
              <span>{section.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="system-tray flex shrink-0 items-center gap-space-sm border border-pixel-bevel-dark bg-desktop-deep px-space-sm text-on-primary shadow-tray">
        <span className="flex items-center gap-space-xs" aria-hidden="true">
          <MaterialIcon name="wifi" className="text-secondary-fixed" />
          <MaterialIcon name="volume_up" className="text-pixel-cloud-cream" />
        </span>
        <span className="h-4 w-px bg-outline" aria-hidden="true" />
        <time className="font-label-md text-label-md font-mono tracking-wider text-pixel-cloud-cream" dateTime={toLocalDateTimeValue(now)}>
          {formatClockTime(now)}
        </time>
      </div>
    </div>
  );
}
