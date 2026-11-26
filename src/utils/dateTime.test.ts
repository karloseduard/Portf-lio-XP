import { describe, expect, it } from 'vitest';
import { formatClockTime, toLocalDateTimeValue } from './dateTime';

describe('formatação do relógio da bandeja', () => {
  it('exibe apenas hora e minuto em formato de 24 horas', () => {
    expect(formatClockTime(new Date(2026, 10, 25, 9, 7))).toMatch(/^\d{2}:\d{2}$/);
  });

  it('representa o valor datetime-local no fuso local', () => {
    const date = new Date(2026, 10, 25, 9, 7);
    expect(toLocalDateTimeValue(date)).toBe('2026-11-25T09:07');
  });
});
