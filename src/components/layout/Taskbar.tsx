import { useEffect, useState } from 'react';
import { Cloud, Monitor } from 'lucide-react';
import { StartMenu } from './StartMenu';

const sections = [
  { id: 'boas-vindas', label: 'boas-vindas.exe', shortLabel: 'Início' },
  { id: 'sobre', label: 'sobre.txt', shortLabel: 'Sobre' },
  { id: 'projetos', label: 'projetos/', shortLabel: 'Projetos' },
  { id: 'experiencia', label: 'experiencia/', shortLabel: 'Experiência' },
  { id: 'skills', label: 'skills/', shortLabel: 'Skills' },
  { id: 'contato', label: 'contato.exe', shortLabel: 'Contato' },
];

export function Taskbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('boas-vindas');
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <StartMenu open={open} onClose={() => setOpen(false)} onNavigate={navigate} />
      <nav className="taskbar" aria-label="Navegação principal">
        <button
          type="button"
          className="start-button"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="cloud-mark" aria-hidden="true"><Cloud /></span>
          Iniciar
        </button>
        <div className="taskbar-programs">
          {sections.map((section) => (
            <button
              type="button"
              key={section.id}
              className={active === section.id ? 'task-button active' : 'task-button'}
              aria-current={active === section.id ? 'page' : undefined}
              onClick={() => navigate(section.id)}
            >
              <Monitor aria-hidden="true" />
              <span className="task-full-label">{section.label}</span>
              <span className="task-short-label">{section.shortLabel}</span>
            </button>
          ))}
        </div>
        <time className="tray" dateTime={new Date().toISOString()}>{time}</time>
      </nav>
    </>
  );
}
