import { describe, expect, it } from 'vitest';
import type { WindowOffset } from '../types/windowManager';
import {
  clampOffset,
  createInitialWindowManagerState,
  windowManagerReducer,
} from './windowManager';

const rect = { left: 80, top: 200, width: 400, height: 300 };
const viewport = { width: 800, scrollY: 0, documentHeight: 1400, topbarBottom: 48 };

describe('windowManagerReducer', () => {
  it('inicia com apenas a janela de boas-vindas aberta', () => {
    const initial = createInitialWindowManagerState();

    expect(initial['boas-vindas'].aberta).toBe(true);
    expect(initial.sobre.aberta).toBe(false);
    expect(initial.projetos.aberta).toBe(false);
    expect(initial.experiencia.aberta).toBe(false);
    expect(initial.skills.aberta).toBe(false);
    expect(initial.formacao.aberta).toBe(false);
    expect(initial.contato.aberta).toBe(false);
  });

  it('fecha e reabre uma janela na posição original', () => {
    const initial = createInitialWindowManagerState();
    const opened = windowManagerReducer(initial, { type: 'open', id: 'sobre' });
    const moved = windowManagerReducer(opened, {
      type: 'move',
      id: 'sobre',
      offset: { x: 32, y: 64 },
    });
    const closed = windowManagerReducer(moved, { type: 'close', id: 'sobre' });
    const reopened = windowManagerReducer(closed, { type: 'open', id: 'sobre' });

    expect(closed.sobre.aberta).toBe(false);
    expect(reopened.sobre).toMatchObject({ aberta: true, deslocamento: { x: 0, y: 0 } });
  });

  it('restaura todas as janelas abertas e nas posições originais', () => {
    const initial = createInitialWindowManagerState();
    const opened = windowManagerReducer(initial, { type: 'open', id: 'projetos' });
    const moved = windowManagerReducer(opened, {
      type: 'move',
      id: 'projetos',
      offset: { x: 12, y: 20 },
    });
    const reset = windowManagerReducer(moved, { type: 'reset-layout' });

    expect(reset.sobre.aberta).toBe(true);
    expect(reset.projetos).toMatchObject({ aberta: true, deslocamento: { x: 0, y: 0 } });
    expect(reset.contato.aberta).toBe(true);
  });

  it('mantém a janela hero fixa', () => {
    const initial = createInitialWindowManagerState();
    const actions = [
      { type: 'close', id: 'boas-vindas' },
      { type: 'open', id: 'boas-vindas' },
      { type: 'move', id: 'boas-vindas', offset: { x: 10, y: 10 } },
      { type: 'bring-to-front', id: 'boas-vindas' },
    ] as const;

    const result = actions.reduce(
      (state, action) => windowManagerReducer(state, action),
      initial,
    );

    expect(result).toBe(initial);
    expect(result['boas-vindas']).toMatchObject({
      aberta: true,
      deslocamento: { x: 0, y: 0 },
      z: 0,
    });
  });
});

describe('clampOffset', () => {
  it('mantém a janela dentro de uma viewport estreita', () => {
    const offset: WindowOffset = { x: 500, y: 0 };
    const narrowWindow = { ...rect, width: 320 };

    expect(clampOffset(offset, narrowWindow, { ...viewport, width: 390 })).toEqual({ x: -10, y: 0 });
  });

  it('impede que a janela ultrapasse o fim do documento', () => {
    const offset: WindowOffset = { x: 0, y: 1000 };

    expect(clampOffset(offset, rect, { ...viewport, documentHeight: 700 })).toEqual({ x: 0, y: 200 });
  });

  it('mantém a janela abaixo da barra superior fixa ao rolar', () => {
    const offset: WindowOffset = { x: 0, y: -300 };

    expect(clampOffset(offset, rect, { ...viewport, scrollY: 100, topbarBottom: 48 })).toEqual({ x: 0, y: -52 });
  });

  it('arredonda limites fracionários para dentro da viewport e do documento', () => {
    const fractionalRect = { left: 80.25, top: 200.4, width: 400.5, height: 300.6 };
    const offset: WindowOffset = { x: 10000, y: 10000 };

    expect(clampOffset(offset, fractionalRect, viewport)).toEqual({ x: 319, y: 899 });
  });
});
