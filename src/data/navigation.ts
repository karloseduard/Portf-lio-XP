export const taskbarSections = [
  { id: 'boas-vindas', label: 'boas-vindas.exe', icon: 'terminal' },
  { id: 'sobre', label: 'sobre.txt', icon: 'description' },
  { id: 'projetos', label: 'projetos/', icon: 'folder_open' },
  { id: 'experiencia', label: 'experiencia/', icon: 'work_history' },
  { id: 'contato', label: 'contato.exe', icon: 'mail' },
] as const;

export const startMenuSections = [
  ...taskbarSections,
  { id: 'skills', label: 'skills/', icon: 'code' },
  { id: 'formacao', label: 'formacao/', icon: 'description' },
] as const;
