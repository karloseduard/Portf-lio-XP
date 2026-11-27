import { skillCategories } from '../../data/skills';
import { desktopCopy } from '../../data/desktop';
import { ManagedWindow } from '../layout/ManagedWindow';

export function SkillsSection() {
  return (
    <ManagedWindow
      id="skills"
      title="skills/"
      accessibleTitle="Habilidades"
      icon="code"
      menu={desktopCopy.menuItems}
    >
      <h2 className="mb-space-md font-headline-lg text-headline-lg font-bold text-primary">Habilidades</h2>
      <div className="skills-grid grid gap-space-sm sm:grid-cols-2">
        {skillCategories.map((category) => (
          <article key={category.title} className="skill-category bg-window-surface-light p-space-sm pixel-border-sunken">
            <h3 className="mb-space-xs font-headline-sm text-headline-sm font-semibold text-primary">{category.title}</h3>
            <ul className="flex flex-wrap gap-space-xs">
              {category.skills.map((skill) => (
                <li key={skill} className="bg-surface-container-lowest px-space-sm py-space-xs font-label-sm text-label-sm text-desktop-deep pixel-border-sunken">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </ManagedWindow>
  );
}
