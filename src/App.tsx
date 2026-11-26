import { BriefcaseBusiness, Download, ExternalLink, FolderOpen, Mail, Monitor, UserRound } from 'lucide-react';
import avatarUrl from './assets/avatar/avatar.png';
import { DesktopShell } from './components/layout/DesktopShell';
import { Taskbar } from './components/layout/Taskbar';
import { WindowFrame } from './components/layout/WindowFrame';
import { ProjectCard } from './components/projects/ProjectCard';
import { links, profile } from './data/profile';
import { projects } from './data/projects';
import { experience } from './data/experience';
import { skillCategories } from './data/skills';
import './styles/tokens.css';
import './index.css';
import './App.css';

function App() {
  const navigateToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <DesktopShell>
      <nav className="desktop-icons" aria-label="Atalhos do desktop">
        <button type="button" onClick={() => navigateToProjects()}>
          <span className="desktop-icon"><FolderOpen aria-hidden="true" /></span>
          <span>Projetos/</span>
        </button>
        <button type="button" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="desktop-icon"><UserRound aria-hidden="true" /></span>
          <span>sobre.txt</span>
        </button>
        <button type="button" onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="desktop-icon"><BriefcaseBusiness aria-hidden="true" /></span>
          <span>experiencia/</span>
        </button>
        <button type="button" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="desktop-icon"><Mail aria-hidden="true" /></span>
          <span>contato.exe</span>
        </button>
      </nav>

      <main className="desktop-workspace">
        <WindowFrame
          id="boas-vindas"
          title="C:\\Karlos\\bin\\boas-vindas.exe"
          icon={<Monitor aria-hidden="true" />}
          menu={['Arquivo', 'Editar', 'Exibir', 'Ajuda']}
          status={
            <>
              <span>4 itens selecionados</span><span>Status: Pronto</span><span>UTF-8</span>
            </>
          }
          className="hero-window"
        >
          <div className="hero-layout">
            <aside className="avatar-panel">
              <img src={avatarUrl} width="420" height="420" alt="Retrato em pixel art de Karlos Eduardo" />
              <span>Contato profissional</span>
            </aside>
            <div className="hero-copy">
              <span className="system-label">DESENVOLVEDOR DE SOFTWARE</span>
              <h1>{profile.name}</h1>
              <ul className="focus-tags" aria-label="Área de atuação">
                {profile.focus.split(' · ').map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>{profile.summary}</p>
              <div className="hero-actions">
                <button type="button" className="button-primary" onClick={navigateToProjects}>
                  Ver projetos <ExternalLink aria-hidden="true" />
                </button>
                <a className="button-secondary" href={profile ? links.resumeUrl : '#'} download>
                  <Download aria-hidden="true" /> Baixar currículo <span>[PDF]</span>
                </a>
              </div>
              <div className="hero-social">
                {links.github ? (
                  <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                ) : (
                  <span>GitHub — TODO</span>
                )}
                {links.linkedin ? (
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                ) : (
                  <span>LinkedIn — TODO</span>
                )}
              </div>
            </div>
          </div>
        </WindowFrame>

        <WindowFrame
          id="sobre"
          title="sobre.txt"
          icon={<UserRound aria-hidden="true" />}
          menu={['Arquivo', 'Editar', 'Exibir', 'Ajuda']}
          status={<>Em construção</>}
        >
          <h3>Sobre</h3>
          <p>Em construção</p>
        </WindowFrame>

        <WindowFrame
          id="projetos"
          title="projetos/ — Explorador de Arquivos"
          icon={<FolderOpen aria-hidden="true" />}
          menu={['Arquivo', 'Editar', 'Exibir', 'Favoritos', 'Ajuda']}
          status={<>4 objetos encontrados</>}
          className="projects-window"
        >
          <div className="file-toolbar" aria-label="Ferramentas do explorador">
            <span>←</span><span>→</span><span>⌂</span>
            <code>C:\Karlos\Projetos</code>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </WindowFrame>

        <WindowFrame id="experiencia" title="experiencia/" icon={<BriefcaseBusiness aria-hidden="true" />} status={<>Em construção</>}>
          <h3>Experiência</h3>
          {experience.map((item) => (
            <article key={item.id} className="construction-item">
              <h4>{item.organization}</h4>
              <p>{item.role} · {item.period}</p>
            </article>
          ))}
        </WindowFrame>

        <WindowFrame id="skills" title="skills/" icon={<Monitor aria-hidden="true" />} status={<>Em construção</>}>
          <h3>Habilidades</h3>
          {skillCategories.map((category) => (
            <section key={category.title}>
              <h4>{category.title}</h4>
              <p>{category.skills.join(' · ')}</p>
            </section>
          ))}
        </WindowFrame>

        <WindowFrame id="contato" title="contato.exe" icon={<Mail aria-hidden="true" />} status={<>Em construção</>}>
          <h3>Contato</h3>
          <p>Em construção</p>
          {links.email && <a href={`mailto:${links.email}`}>{links.email}</a>}
        </WindowFrame>
      </main>

      <footer className="site-footer">Karlos Eduardo OS</footer>
      <Taskbar />
    </DesktopShell>
  );
}

export default App;
