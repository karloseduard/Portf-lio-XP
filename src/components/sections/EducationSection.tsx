import { education } from '../../data/education';
import { desktopCopy } from '../../data/desktop';
import { ManagedWindow } from '../layout/ManagedWindow';

export function EducationSection() {
  return (
    <ManagedWindow
      id="formacao"
      title="formacao/"
      accessibleTitle="Formação"
      icon="description"
      menu={desktopCopy.menuItems}
    >
      <h2 className="mb-space-md font-headline-lg text-headline-lg font-bold text-primary">Formação</h2>
      <div className="grid gap-space-sm">
        {education.map((item) => (
          <article key={item.id} className="education-item bg-window-surface-light p-space-md pixel-border-sunken">
            <h3 className="font-headline-md text-headline-md font-semibold text-primary">{item.course}</h3>
            <p className="mt-space-xs font-body-md text-body-md">{item.institution}</p>
            {item.period && <p className="mt-space-xs font-label-sm text-label-sm text-on-surface-variant">{item.period}</p>}
            {item.status && <p className="mt-space-xs font-label-sm text-label-sm text-on-surface-variant">{item.status}</p>}
            {item.details && <p className="mt-space-sm font-body-md text-body-md">{item.details}</p>}
          </article>
        ))}
      </div>
    </ManagedWindow>
  );
}
