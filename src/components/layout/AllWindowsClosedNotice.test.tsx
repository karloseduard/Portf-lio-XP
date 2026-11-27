import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WindowManagerProvider, useWindowManager } from '../../context/WindowManagerContext';
import { AllWindowsClosedNotice } from './AllWindowsClosedNotice';

function mockViewport() {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (media: string) => ({
      matches: false,
      media,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  });
}

function WindowControls() {
  const { openWindow, closeWindow } = useWindowManager();

  return (
    <>
      <button type="button" onClick={() => openWindow('sobre')}>Abrir janela</button>
      <button type="button" onClick={() => closeWindow('sobre')}>Fechar janela</button>
    </>
  );
}

describe('aviso de janelas fechadas', () => {
  beforeEach(mockViewport);

  it('não aparece na inicialização com as janelas de conteúdo fechadas', () => {
    render(
      <WindowManagerProvider>
        <AllWindowsClosedNotice />
      </WindowManagerProvider>,
    );

    expect(screen.queryByRole('region', { name: 'Aviso do sistema' })).toBeNull();
  });

  it('aparece depois de fechar a última janela que foi aberta', () => {
    render(
      <WindowManagerProvider>
        <AllWindowsClosedNotice />
        <WindowControls />
      </WindowManagerProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Abrir janela' }));
    fireEvent.click(screen.getByRole('button', { name: 'Fechar janela' }));

    expect(screen.queryByRole('region', { name: 'Aviso do sistema' })).not.toBeNull();
  });
});
