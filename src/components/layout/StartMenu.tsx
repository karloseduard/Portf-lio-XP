import { useEffect, useRef } from 'react';
import { Download, Folder, Mail, UserRound } from 'lucide-react';
import { links } from '../../data/profile';

type StartMenuProps = {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export function StartMenu({ open, onClose, onNavigate }: StartMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="start-menu" ref={menuRef} role="menu" aria-label="Menu Iniciar">
      <div className="start-menu-brand">Karlos Eduardo OS</div>
      <button type="button" role="menuitem" onClick={() => onNavigate('sobre')}>
        <UserRound aria-hidden="true" /> sobre.txt
      </button>
      <button type="button" role="menuitem" onClick={() => onNavigate('projetos')}>
        <Folder aria-hidden="true" /> projetos/
      </button>
      <button type="button" role="menuitem" onClick={() => onNavigate('skills')}>
        <Folder aria-hidden="true" /> skills/
      </button>
      <button type="button" role="menuitem" onClick={() => onNavigate('contato')}>
        <Mail aria-hidden="true" /> contato.exe
      </button>
      <a role="menuitem" href={links.resumeUrl} download>
        <Download aria-hidden="true" /> Baixar currículo
      </a>
    </div>
  );
}
