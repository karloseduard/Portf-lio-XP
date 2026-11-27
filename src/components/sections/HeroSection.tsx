import avatarUrl from '../../assets/avatar/avatar_sem_fundo.png';
import { desktopCopy } from '../../data/desktop';
import { links, profile } from '../../data/profile';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WindowFrame } from '../layout/WindowFrame';
import { useWindowManager } from '../../context/WindowManagerContext';

export function HeroSection() {
  const { openAndGo } = useWindowManager();

  return (
    <WindowFrame
      id="boas-vindas"
      title="C:\karlos\bin\boas-vindas.exe"
      accessibleTitle="Apresentação"
      icon="terminal"
      menu={desktopCopy.menuItems}
      className="hero-window windowed-frame"
      status={
        <>
          <div className="flex items-center gap-space-sm">
            <span className="flex items-center gap-space-xs">
              <MaterialIcon name="radio_button_checked" className="text-secondary" />
              <span>{desktopCopy.selectedItems}</span>
            </span>
            <span className="hidden text-pixel-bevel-shadow sm:inline" aria-hidden="true">|</span>
            <span className="hidden sm:inline">{desktopCopy.readyStatus}</span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span>{desktopCopy.encoding}</span>
            <span className="text-pixel-bevel-shadow" aria-hidden="true">|</span>
            <span className="font-mono font-bold text-primary">{desktopCopy.okStatus}</span>
          </div>
        </>
      }
    >
      <div className="hero-layout grid items-center gap-space-lg md:grid-cols-12">
        <aside className="avatar-column flex flex-col items-center md:col-span-4">
          <div className="avatar-card w-full bg-window-surface p-space-sm pixel-border-raised">
            <div className="avatar-frame relative overflow-hidden bg-desktop-deep pixel-border-sunken">
              <img
                src={avatarUrl}
                width="420"
                height="420"
                alt="Retrato em pixel art de Karlos Eduardo"
                className="h-full w-full object-contain [image-rendering:pixelated]"
              />
              {profile.showLiveBadge && (
                <span className="avatar-live-badge absolute right-space-sm top-space-sm flex items-center gap-space-xs bg-desktop-deep/90 px-space-sm py-space-xs text-secondary-fixed pixel-border-sunken">
                  <span className="h-status-indicator w-status-indicator rounded-full bg-secondary-fixed motion-safe:animate-ping" aria-hidden="true" />
                  <span className="font-label-sm text-label-sm">{desktopCopy.hero.liveBadge}</span>
                </span>
              )}
            </div>
            {profile.availableForHire && (
              <div className="availability-badge mt-space-sm flex items-start gap-space-xs bg-window-surface-light p-space-sm text-on-surface pixel-border-sunken">
                <MaterialIcon name="check_circle" className="shrink-0 text-secondary" />
                <span className="font-label-sm text-label-sm font-semibold">{desktopCopy.hero.availability}</span>
              </div>
            )}
          </div>
        </aside>

        <div className="hero-copy flex flex-col justify-center md:col-span-8">
          <div className="mb-space-xs flex flex-wrap items-center gap-space-sm">
            <span className="bg-titlebar-gradient-dark px-space-sm py-space-xs font-label-md text-label-md text-on-primary pixel-border-raised">
              {desktopCopy.hero.systemUser}
            </span>
            <span className="bg-pixel-cloud-cream px-space-sm py-space-xs font-label-md text-label-md text-on-surface pixel-border-raised">
              {profile.role}
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl font-bold uppercase tracking-tight text-primary">
            {profile.name}
          </h1>
          <ul className="mb-space-sm flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm font-semibold text-desktop-deep" aria-label="Áreas de atuação">
            {profile.focus.split(' · ').map((item, index) => (
              <li key={item} className="flex items-center gap-space-xs">
                {index > 0 && <span className="text-outline" aria-hidden="true">•</span>}
                <span className="bg-window-surface px-space-sm py-space-xs pixel-border-sunken">{item}</span>
              </li>
            ))}
          </ul>
          <div className="hero-bio bg-window-surface p-space-md text-on-surface pixel-border-sunken">
            <p className="font-body-md text-body-md leading-relaxed">{profile.summary}</p>
          </div>
          <div className="hero-actions mt-space-md flex flex-wrap items-center gap-space-sm">
            <a
              className="inline-flex min-h-touch-target items-center gap-space-sm bg-gradient-to-b from-secondary to-on-secondary-fixed-variant px-space-md py-space-sm font-headline-sm text-headline-sm text-on-secondary pixel-button-raised transition-colors duration-150 hover:brightness-110 active:pixel-border-sunken"
              href="#projetos"
              onClick={(event) => {
                event.preventDefault();
                openAndGo('projetos');
              }}
            >
              <MaterialIcon name="cloud_download" />
              <span>Ver projetos [↓]</span>
            </a>
            <a
              className="inline-flex min-h-touch-target items-center gap-space-xs bg-window-surface px-space-md py-space-sm font-label-lg text-label-lg text-on-surface pixel-button-raised transition-colors duration-150 hover:bg-window-surface-light active:pixel-border-sunken"
              href={links.resumeUrl}
              download
            >
              <MaterialIcon name="picture_as_pdf" className="text-tertiary" />
              <span>Baixar Currículo [PDF]</span>
            </a>
            <div className="hero-social-links ml-auto flex flex-wrap items-center gap-space-sm">
              <a className="inline-flex min-h-touch-target items-center gap-space-xs bg-window-surface px-space-sm py-space-sm font-label-md text-label-md text-on-surface pixel-button-small-raised transition-colors duration-150 hover:bg-window-surface-light active:pixel-border-sunken" href={links.github} target="_blank" rel="noopener noreferrer">
                <MaterialIcon name="code" />
                <span>GitHub [↗]</span>
              </a>
              <a className="inline-flex min-h-touch-target items-center gap-space-xs bg-window-surface px-space-sm py-space-sm font-label-md text-label-md text-on-surface pixel-button-small-raised transition-colors duration-150 hover:bg-window-surface-light active:pixel-border-sunken" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <MaterialIcon name="link" className="text-primary" />
                <span>LinkedIn [↗]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
