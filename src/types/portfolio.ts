export type ProjectCategory = 'all' | 'reels' | 'web' | 'motion' | 'ai';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  specs: string;
  format: string;
  badge: string;
  imageUrl: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface DisciplinePillar {
  id: string;
  pillarNumber: string;
  tagline: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  icon: string;
  colSpan: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export interface ProtocolStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}
