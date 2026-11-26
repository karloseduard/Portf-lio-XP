import { links } from '../../data/profile';
import { desktopCopy } from '../../data/desktop';
import { MaterialIcon } from '../ui/MaterialIcon';
import { WindowFrame } from '../layout/WindowFrame';

export function ContactSection() {
  return (
    <WindowFrame
      id="contato"
      title="contato.exe"
      accessibleTitle="Contato"
      icon="mail"
      menu={desktopCopy.menuItems}
    >
      <h2 className="mb-space-md font-headline-lg text-headline-lg font-bold text-primary">Contato</h2>
      <ul className="contact-links flex flex-wrap gap-space-sm">
        <li>
          <a className="contact-link" href={`mailto:${links.email}`}>
            <MaterialIcon name="mail" className="text-primary" />
            <span>{links.email}</span>
          </a>
        </li>
        <li>
          <a className="contact-link" href={links.github} target="_blank" rel="noopener noreferrer">
            <MaterialIcon name="code" className="text-desktop-deep" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a className="contact-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <MaterialIcon name="link" className="text-primary" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </WindowFrame>
  );
}
