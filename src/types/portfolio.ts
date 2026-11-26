export type ProjectStatus = 'completed' | 'in-progress' | 'prototype' | 'study';

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  problem: string;
  role: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  results: string[];
  images: string[];
  repositoryUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};
