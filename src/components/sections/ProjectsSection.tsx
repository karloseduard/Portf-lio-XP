import { useState } from 'react';
import { desktopCopy } from '../../data/desktop';
import { projects } from '../../data/projects';
import type { Project } from '../../types/portfolio';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WindowFrame } from '../layout/WindowFrame';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDialog } from '../projects/ProjectDialog';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpener, setDialogOpener] = useState<HTMLButtonElement | null>(null);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    setDialogOpener(trigger);
    setSelectedProject(project);
  };

  return (
    <>
      <WindowFrame
        id="projetos"
        title="projetos/ - Explorador de Arquivos"
        accessibleTitle="Projetos"
        icon="folder_open"
        menu={desktopCopy.menuItems}
        className="projects-window"
        status={
          <>
            <span className="flex items-center gap-space-xs">
              <MaterialIcon name="folder_zip" className="text-primary" />
              {desktopCopy.projectCount}
            </span>
            <span className="flex items-center gap-space-sm">
              <span>{desktopCopy.localDisk}</span>
              <span aria-hidden="true" className="text-pixel-bevel-shadow">|</span>
              <span className="font-mono font-semibold text-secondary">{desktopCopy.freeSpace}</span>
            </span>
          </>
        }
      >
        <h2 className="sr-only">Projetos</h2>
        <div className="file-toolbar -mx-space-sm -mt-space-sm mb-space-md flex flex-wrap items-center gap-space-sm bg-window-surface p-space-sm pixel-border-sunken">
          <div className="flex items-center gap-space-xs" aria-hidden="true">
            <span className="toolbar-icon"><MaterialIcon name="arrow_back" /></span>
            <span className="toolbar-icon"><MaterialIcon name="arrow_forward" /></span>
            <span className="toolbar-icon"><MaterialIcon name="drive_folder_upload" /></span>
          </div>
          <span className="hidden h-4 w-px bg-pixel-bevel-shadow sm:block" aria-hidden="true" />
          <div className="address-field flex flex-1 items-center gap-space-xs bg-surface-container-lowest px-space-sm py-space-xs font-label-md text-label-md pixel-border-sunken">
            <span className="font-bold text-outline">Endereço:</span>
            <MaterialIcon name="folder" className="text-tertiary-container" />
            <span className="truncate font-mono">{desktopCopy.projectsAddress}</span>
          </div>
          <span className="mode-label bg-window-surface px-space-sm py-space-xs font-label-sm text-label-sm font-mono text-on-surface-variant pixel-border-sunken">
            {desktopCopy.viewMode}
          </span>
        </div>
        <div className="projects-grid grid grid-cols-1 gap-space-md md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={openProject} />
          ))}
        </div>
      </WindowFrame>
      <ProjectDialog
        project={selectedProject}
        opener={dialogOpener}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
