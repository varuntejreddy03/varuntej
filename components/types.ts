
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  image: string;
  icon: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  category: 'ai' | 'client-work' | 'web-app';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  description: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}
