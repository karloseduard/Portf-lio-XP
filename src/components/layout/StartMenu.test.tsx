import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { StartMenu } from './StartMenu';
import { WindowManagerProvider } from '../../context/WindowManagerContext';

function mockMobileViewport(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (media: string) => ({
      matches,
      media,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  });
}

describe('menu Iniciar', () => {
  it('mantém o foco no menu e fecha com Escape', () => {
    mockMobileViewport(true);
    const onClose = vi.fn();
    const trigger = document.createElement('button');

    render(
      <WindowManagerProvider>
        <StartMenu
          open
          onClose={onClose}
          triggerRef={{ current: trigger }}
        />
      </WindowManagerProvider>,
    );

    const closeButton = screen.getByRole('button', { name: 'Fechar menu Iniciar' });
    const lastLink = screen.getByRole('link', { name: 'LinkedIn' });
    expect(document.activeElement).toBe(closeButton);

    lastLink.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(closeButton);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('expõe o menu como modal no mobile', () => {
    mockMobileViewport(true);

    render(
      <WindowManagerProvider>
        <StartMenu
          open
          onClose={vi.fn()}
          triggerRef={{ current: document.createElement('button') }}
        />
      </WindowManagerProvider>,
    );

    expect(screen.getByRole('dialog', { name: 'Menu Iniciar' }).getAttribute('aria-modal')).toBe('true');
  });
});
