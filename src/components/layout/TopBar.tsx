import avatarUrl from '../../assets/avatar/avatar.png';
import { desktopCopy } from '../../data/desktop';
import { MaterialIcon } from '../ui/MaterialIcon';

export function TopBar() {
  return (
    <header className="topbar fixed inset-x-0 top-0 z-40 bg-desktop-deep text-on-primary shadow-topbar">
      <div className="flex items-center justify-between gap-space-sm px-space-md">
        <div className="flex min-w-0 items-center gap-space-sm">
          <MaterialIcon name="desktop_windows" className="text-titlebar-gradient-light text-2xl" />
          <span className="truncate font-headline-sm text-headline-sm tracking-tight">
            {desktopCopy.systemName}
          </span>
          <span className="shrink-0 border border-pixel-outer-border bg-primary-container px-space-xs py-0.5 font-label-sm text-label-sm text-on-primary-container">
            {desktopCopy.portfolioLabel}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-space-md">
          <div className="hidden items-center gap-space-sm font-label-md text-label-md text-outline-variant md:flex">
            <span>{desktopCopy.terminalPrompt}</span>
            <span
              className="inline-block h-terminal-cursor w-terminal-cursor bg-pixel-cloud-cream motion-safe:animate-pulse"
              aria-hidden="true"
            />
          </div>
          <img
            src={avatarUrl}
            width="32"
            height="32"
            className="topbar-avatar object-cover pixel-border-raised"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}
