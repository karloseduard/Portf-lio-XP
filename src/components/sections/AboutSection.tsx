import { profile } from '../../data/profile';
import { desktopCopy } from '../../data/desktop';
import { ManagedWindow } from '../layout/ManagedWindow';

export function AboutSection() {
  const areas = profile.focus.split(' · ');

  return (
    <ManagedWindow
      id="sobre"
      title="sobre.txt"
      accessibleTitle="Sobre"
      icon="description"
      menu={desktopCopy.menuItems}
    >
      <h2 className="mb-space-sm font-headline-lg text-headline-lg font-bold text-primary">Sobre</h2>
      <p className="max-w-prose font-body-md text-body-md leading-relaxed">{profile.summary}</p>
      <div className="mt-space-md flex flex-wrap gap-space-sm" aria-label="Áreas de atuação">
        {areas.map((area) => (
          <span key={area} className="bg-window-surface-light px-space-sm py-space-xs font-label-sm text-label-sm text-desktop-deep pixel-border-sunken">
            {area}
          </span>
        ))}
      </div>
    </ManagedWindow>
  );
}
