import type { Project } from '../../types/portfolio';
import { MaterialIcon, type MaterialIconName } from '../ui/MaterialIcon';

const projectIcons: Record<string, MaterialIconName> = {
  acomfinance: 'account_balance_wallet',
  gamestore: 'sports_esports',
  producer: 'groups',
  'siara-tech-summit': 'trophy',
};

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const icon = projectIcons[project.slug] ?? 'folder';

  const openDialog = (trigger: HTMLButtonElement) => onOpen(project, trigger);

  return (
    <article className={`project-card project-card-${project.slug} relative flex flex-col justify-between bg-surface-container-lowest p-space-md pixel-border-raised`}>
      <div>
        <div className="mb-space-sm flex items-start justify-between gap-space-sm">
          <div className="flex min-w-0 items-center gap-space-sm">
            <MaterialIcon name={icon} className="text-secondary text-2xl" />
            <div className="min-w-0">
              <button
                type="button"
                className="project-title-button block max-w-full text-left font-headline-md text-headline-md font-bold tracking-tight text-primary"
                onClick={(event) => openDialog(event.currentTarget)}
                aria-label={`Abrir detalhes de ${project.title}`}
                aria-haspopup="dialog"
              >
                {project.title}
              </button>
              {project.versionLabel && (
                <span className="block font-label-sm text-label-sm text-on-surface-variant">
                  {project.versionLabel}
                </span>
              )}
            </div>
          </div>
          {project.badgeLabel && (
            <span className="project-status relative z-10 shrink-0 px-space-sm py-space-xs font-label-sm text-label-sm font-bold uppercase text-on-primary pixel-border-raised">
              {project.badgeLabel}
            </span>
          )}
        </div>

        {project.summary && (
          <p className="mb-space-sm font-body-md text-body-md leading-snug text-on-surface">
            {project.summary}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <ul className="mb-space-md flex flex-wrap gap-space-xs font-label-sm text-label-sm" aria-label="Tecnologias">
            {project.technologies.map((technology) => (
              <li key={technology} className="bg-surface-container-lowest px-space-xs py-space-2xs font-semibold text-desktop-deep pixel-border-sunken">
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-card-footer relative z-10 flex items-center justify-between gap-space-sm pt-space-sm">
        <div className="min-w-0">
          {project.sizeLabel && <span className="font-label-sm text-label-sm text-on-surface-variant">{project.sizeLabel}</span>}
          {project.footerLabel && <span className="font-label-sm text-label-sm text-on-surface-variant">{project.footerLabel}</span>}
          {project.footerStatus && (
            <span className="flex items-center gap-space-xs font-label-sm text-label-sm font-bold text-secondary">
              <MaterialIcon name={project.slug === 'siara-tech-summit' ? 'military_tech' : 'verified'} />
              {project.footerStatus}
            </span>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap justify-end gap-space-xs">
          <button
            type="button"
            className="project-details-button relative z-10 inline-flex min-h-touch-target items-center gap-space-xs bg-gradient-to-b from-taskbar-gradient-light to-primary-container px-space-sm py-space-xs font-label-md text-label-md text-on-primary pixel-border-raised transition-colors duration-150 hover:brightness-110 active:pixel-border-sunken"
            onClick={(event) => openDialog(event.currentTarget)}
          >
            <span>Ver detalhes do projeto</span>
            <MaterialIcon name="arrow_forward" />
          </button>
          {project.repositoryUrl && (
            <a
              className="relative z-10 inline-flex min-h-touch-target items-center gap-space-xs bg-window-surface-light px-space-sm py-space-xs font-label-md text-label-md text-on-surface pixel-border-raised transition-colors duration-150 hover:bg-window-surface"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver Repositório</span>
              <MaterialIcon name="open_in_new" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
