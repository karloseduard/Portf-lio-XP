import { desktopCopy } from '../../data/desktop';
import { links } from '../../data/profile';
import { MaterialIcon, type MaterialIconName } from '../ui/MaterialIcon';

type ShortcutProps = {
  href: string;
  icon: MaterialIconName;
  label: string;
  caption?: string;
  color?: string;
  external?: boolean;
  download?: boolean;
};

function DesktopShortcut({
  href,
  icon,
  label,
  caption,
  color = 'text-primary',
  external = false,
  download = false,
}: ShortcutProps) {
  return (
    <a
      className="desktop-shortcut group flex flex-col items-center text-center transition-colors duration-150"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download}
    >
      <span className="desktop-icon pixel-border-raised flex items-center justify-center bg-window-surface transition-transform duration-150 group-hover:scale-105">
        <MaterialIcon name={icon} className={`${color} text-2xl`} />
      </span>
      <span className="desktop-shortcut-label">
        {label}
      </span>
      {caption && (
        <span className="desktop-shortcut-caption">
          {caption}
        </span>
      )}
    </a>
  );
}

export function DesktopIcons() {
  return (
    <nav className="desktop-icons flex flex-wrap items-center gap-space-md px-space-xs sm:gap-space-lg" aria-label="Atalhos do desktop">
      <DesktopShortcut
        href="#sobre"
        icon="computer"
        label={desktopCopy.shortcuts.computer.label}
        caption={desktopCopy.shortcuts.computer.caption}
      />
      <DesktopShortcut
        href="#projetos"
        icon="folder_special"
        label={desktopCopy.shortcuts.projects.label}
        caption={desktopCopy.shortcuts.projects.caption}
        color="text-tertiary-container"
      />
      <DesktopShortcut
        href={links.resumeUrl}
        icon="description"
        label={desktopCopy.shortcuts.resume.label}
        caption={desktopCopy.shortcuts.resume.caption}
        color="text-tertiary"
        download
      />
      <DesktopShortcut
        href={links.github}
        icon="code"
        label={desktopCopy.shortcuts.github.label}
        caption={desktopCopy.shortcuts.github.caption}
        color="text-desktop-deep"
        external
      />
      <DesktopShortcut
        href={links.linkedin}
        icon="account_box"
        label={desktopCopy.shortcuts.linkedin.label}
        caption={desktopCopy.shortcuts.linkedin.caption}
        color="text-primary-container"
        external
      />
    </nav>
  );
}
