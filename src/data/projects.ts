import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    slug: 'acomfinance',
    title: 'AcomFinance',
    // TODO: confirmar status atual
    status: 'prototype',
    statusLabel: 'Em desenvolvimento',
    summary: 'Aplicação de finanças pessoais com processamento de dados financeiros.',
    problem: 'Organizar informações financeiras pessoais em uma interface clara.',
    role: 'Desenvolvimento da aplicação.',
    solution: 'Protótipo em React e TypeScript com integração proposta a Node.js e MongoDB.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    challenges: [],
    results: [],
    images: [],
  },
  {
    slug: 'gamestore',
    title: 'GameStore',
    // TODO: confirmar status atual
    status: 'study',
    statusLabel: 'Projeto de estudo',
    summary: 'Plataforma de catálogo de jogos com API e integração com front-end.',
    problem: 'Estudar o desenvolvimento de APIs e da integração entre back-end e interface.',
    role: 'Desenvolvimento do projeto de estudo.',
    solution: 'API construída em C#/.NET com persistência em banco de dados.',
    technologies: ['C#', '.NET', 'API REST', 'Entity Framework Core', 'SQLite'],
    challenges: [],
    results: [],
    images: [],
  },
  {
    slug: 'producer',
    title: 'Producer / Include Jr.',
    // TODO: confirmar status atual e contribuição individual
    status: 'in-progress',
    statusLabel: 'Em equipe',
    summary: 'Sistema para necessidades de negócio desenvolvido em uma equipe da Include Jr.',
    problem: 'Atender regras de negócio por meio de uma solução organizada em equipe.',
    role: 'Contribuição individual a confirmar.',
    solution: 'Implementação realizada em equipe, com responsabilidades individuais a confirmar.',
    technologies: ['TypeScript', 'React', 'REST'],
    challenges: [],
    results: [],
    images: [],
  },
  {
    slug: 'siara-tech-summit',
    title: 'Hackathon Siará Tech Summit 2024',
    // TODO: confirmar status, contribuição individual e premiação
    status: 'prototype',
    statusLabel: 'Desafio em equipe',
    summary: 'Prototipação colaborativa realizada durante o hackathon.',
    problem: 'Resolver um desafio definido pela organização do hackathon.',
    role: 'Contribuição individual a confirmar.',
    solution: 'Equipe desenvolveu uma solução de protótipo sob prazo.',
    // TODO: confirmar premiação ou reconhecimento recebido
    technologies: ['Protótipo', 'Colaboração', 'Desenvolvimento rápido'],
    challenges: [],
    results: [],
    images: [],
  },
];
