export type ProjectCategory = 
  | 'All' 
  | 'Full-Stack' 
  | 'Frontend' 
  | 'Backend' 
  | 'AI / Healthcare' 
  | 'Enterprise';

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  type: 'client' | 'api' | 'service' | 'database';
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  features: string[];
  databaseDesign: {
    description: string;
    entities: string[];
  };
  apiDesign: {
    description: string;
    endpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; path: string; purpose: string }[];
  };
  authentication: string;
  paymentWorkflow?: string;
  challenges: string[];
  whatILearned: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  isFlagship?: boolean;
  isSecondary?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyAvailable?: boolean;
  technologies: string[];
  highlights?: string[];
  caseStudy?: CaseStudy;
  brandContext?: string;
}

export type SkillCategory = 
  | 'Languages' 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'Mobile' 
  | 'DevOps & Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level?: string;
  context?: string;
}

export interface FundamentalItem {
  title: string;
  category: string;
  concepts: string[];
  importance: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  status: string;
  expectedGraduation: string;
  coursework: string[];
  location?: string;
}
