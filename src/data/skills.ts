import { SkillItem, SkillCategory } from '../types';

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Foundational programming languages used for systems, backend, and full-stack development',
    items: ['C', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    description: 'Modern component-driven web frameworks, build tools, and responsive styling',
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    description: 'Server runtime environments, routing frameworks, and contract-driven API development',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    description: 'Relational data stores, document databases, and type-safe ORM abstraction layers',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'SQL'],
  },
  {
    category: 'Mobile',
    description: 'Cross-platform native mobile application development for iOS and Android',
    items: ['React Native', 'Expo'],
  },
  {
    category: 'DevOps & Tools',
    description: 'Version control, developer workflows, stateless authentication, and third-party integrations',
    items: ['Git', 'GitHub', 'JWT', 'Razorpay'],
  },
];
