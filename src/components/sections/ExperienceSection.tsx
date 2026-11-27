import { experience } from '../../data/experience';
import { desktopCopy } from '../../data/desktop';
import { ManagedWindow } from '../layout/ManagedWindow';

export function ExperienceSection() {
  return (
    <ManagedWindow
      id="experiencia"
      title="experiencia/"
      accessibleTitle="Experiência profissional"
      icon="work_history"
      menu={desktopCopy.menuItems}
    >
      <h2 className="mb-space-md font-headline-lg text-headline-lg font-bold text-primary">Experiência</h2>
      <ol className="experience-list grid gap-space-sm">
        {experience.map((item) => (
          <li key={item.id} className="experience-item bg-window-surface-light p-space-md pixel-border-sunken">
            <h3 className="font-headline-md text-headline-md font-semibold text-primary">{item.organization}</h3>
            <p className="mt-space-xs font-label-md text-label-md font-semibold">{item.role}</p>
            {item.period && <p className="mt-space-xs font-label-sm text-label-sm text-on-surface-variant">{item.period}</p>}
            {item.summary && <p className="mt-space-sm font-body-md text-body-md">{item.summary}</p>}
          </li>
        ))}
      </ol>
    </ManagedWindow>
  );
}
