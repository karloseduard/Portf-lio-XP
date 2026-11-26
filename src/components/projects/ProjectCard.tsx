import { ExternalLink, Folder, Gamepad2, Trophy, Users } from 'lucide-react';
import type { Project } from '../../types/portfolio';

function ProjectIcon({ slug }: { slug: string }) {
  if (slug === 'gamestore') return <Gamepad2 aria-hidden="true" />;
  if (slug === 'producer') return <Users aria-hidden="true" />;
  if (slug === 'siara-tech-summit') return <Trophy aria-hidden="true" />;
  return <Folder aria-hidden="true" />;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <span className="project-icon"><ProjectIcon slug={project.slug} /></span>
        <h3>{project.title}</h3>
        <span className={`project-status status-${project.status}`}>{project.statusLabel}</span>
      </header>
      <p>{project.summary}</p>
      <ul className="tech-tags" aria-label="Tecnologias">
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <footer className="project-card-footer">
        {project.repositoryUrl ? (
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
            Ver repositório <ExternalLink aria-hidden="true" />
          </a>
        ) : (
          <span className="project-link-placeholder">Repositório a confirmar</span>
        )}
      </footer>
    </article>
  );
}
