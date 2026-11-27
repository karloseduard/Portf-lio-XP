export const windowIds = [
  'boas-vindas',
  'sobre',
  'projetos',
  'experiencia',
  'skills',
  'formacao',
  'contato',
] as const;

export type WindowId = (typeof windowIds)[number];
export type ManagedWindowId = Exclude<WindowId, 'boas-vindas'>;
export const managedWindowIds = [
  'sobre',
  'projetos',
  'experiencia',
  'skills',
  'formacao',
  'contato',
] as const satisfies readonly ManagedWindowId[];

export type WindowOffset = {
  x: number;
  y: number;
};

export type WindowState = {
  aberta: boolean;
  deslocamento: WindowOffset;
  z: number;
};

export type WindowManagerState = Record<WindowId, WindowState>;

export type WindowAction =
  | { type: 'close'; id: WindowId }
  | { type: 'open'; id: WindowId }
  | { type: 'move'; id: WindowId; offset: WindowOffset }
  | { type: 'bring-to-front'; id: WindowId }
  | { type: 'reset-layout' }
  | { type: 'set-offsets'; offsets: Partial<Record<WindowId, WindowOffset>> };
