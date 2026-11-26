import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'acomfinance',
    title: 'AcomFinance',
    // TODO: confirmar status atual
    status: 'prototype',
    badgeLabel: 'Aplicação web',
    // TODO: confirmar escopo e funcionalidades descritas
    summary: 'Aplicação completa de finanças pessoais com processamento, extração de dados inteligente e conciliação de extratos bancários em PDF.',
    // TODO: confirmar tamanho antes de apresentar como métrica
    // TODO: confirmar stack usada no projeto
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    slug: 'gamestore',
    title: 'GameStore',
    // TODO: confirmar status atual
    status: 'study',
    badgeLabel: 'Estudo',
    // TODO: confirmar funcionalidades e detalhes técnicos
    summary: 'Plataforma de catálogo de jogos explorando backend robusto, API RESTful padronizada e persistência performática com EF Core.',
    // TODO: confirmar tamanho antes de apresentar como métrica
    // TODO: confirmar stack usada no projeto
    technologies: ['C#', '.NET', 'EF Core', 'SQLite', 'React'],
  },
  {
    slug: 'producer',
    title: 'Producer / Include Jr.',
    // TODO: confirmar status atual e contribuição individual
    status: 'in-progress',
    badgeLabel: 'Projeto em Equipe',
    // TODO: confirmar contexto, escopo e regras de negócio
    summary: 'Sistema com regras de negócio customizadas para gestão ágil, controle de demandas e organização de entregas na empresa júnior da UFC.',
    // TODO: confirmar função e responsabilidade individual antes de exibir
    // TODO: confirmar tecnologias usadas
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    slug: 'siara-tech-summit',
    title: 'Hackathon Siará Tech Summit 2024',
    // TODO: confirmar status, contribuição individual e premiação
    status: 'prototype',
    badgeLabel: 'Hackathon',
    // TODO: confirmar descrição do desafio e da solução
    summary: 'Solução validada e desenvolvida sob intensa pressão em equipe multidisciplinar, com prototipação relâmpago e foco em resolução de impacto real.',
    // TODO: confirmar duração, premiação e reconhecimento antes de exibir
    // TODO: confirmar tecnologias e métodos usados
    technologies: ['Prototipação Rápida', 'React', 'Inovação'],
  },
];
