import { useEffect, useRef } from 'react';
import type { Project } from '../../types/portfolio';
import { MaterialIcon } from '../ui/MaterialIcon';

type ProjectDialogProps = {
  project: Project | null;
  opener: HTMLButtonElement | null;
  onClose: () => void;
};

function DetailList({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <div className="project-detail">
      <dt className="font-label-md text-label-md font-semibold text-primary">{label}</dt>
      <dd>
        <ul className="mt-space-xs flex flex-wrap gap-space-xs">
          {items.map((item) => <li key={item} className="bg-window-surface-light px-space-sm py-space-xs pixel-border-sunken">{item}</li>)}
        </ul>
      </dd>
    </div>
  );
}

export function ProjectDialog({ project, opener, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    onClose();
    window.requestAnimationFrame(() => opener?.focus());
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog bg-window-surface p-0 text-on-surface pixel-border-dialog"
      aria-labelledby="project-dialog-title"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeDialog();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      {project && (
        <div className="window-frame">
          <header className="titlebar">
            <div className="titlebar-name" aria-hidden="true">
              <MaterialIcon name="folder_open" className="text-pixel-cloud-cream" />
              <span>projetos/{project.slug}</span>
            </div>
            <button type="button" className="project-dialog-close" onClick={closeDialog} aria-label={`Fechar detalhes de ${project.title}`}>
              X
            </button>
          </header>
          <div className="window-content">
            <h2 id="project-dialog-title" className="mb-space-md font-headline-lg text-headline-lg text-primary">
              {project.title}
            </h2>
            {(project.statusLabel || project.badgeLabel) && <p className="font-label-md text-label-md">{project.statusLabel ?? project.badgeLabel}</p>}
            {project.summary && <p className="font-body-md text-body-md">{project.summary}</p>}
            <dl className="mt-space-md grid gap-space-md">
              {project.problem && <div className="project-detail"><dt className="font-label-md text-label-md font-semibold text-primary">Problema</dt><dd>{project.problem}</dd></div>}
              {project.role && <div className="project-detail"><dt className="font-label-md text-label-md font-semibold text-primary">Contribuição</dt><dd>{project.role}</dd></div>}
              {project.solution && <div className="project-detail"><dt className="font-label-md text-label-md font-semibold text-primary">Solução</dt><dd>{project.solution}</dd></div>}
              <DetailList label="Tecnologias" items={project.technologies} />
              <DetailList label="Desafios" items={project.challenges} />
              <DetailList label="Resultados" items={project.results} />
            </dl>
            {project.images && project.images.length > 0 && (
              <div className="mt-space-md grid gap-space-sm sm:grid-cols-2">
                {project.images.map((image) => (
                  <img key={image} src={image} alt={`Imagem do projeto ${project.title}`} className="w-full image-pixelated" />
                ))}
              </div>
            )}
            <div className="mt-space-md flex flex-wrap gap-space-sm">
              {project.repositoryUrl && <a className="dialog-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Repositório</a>}
              {project.liveUrl && <a className="dialog-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Projeto publicado</a>}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
