import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
  onOpenArchitecture: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ 
  onOpenCaseStudy,
  onOpenArchitecture 
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Full-Stack',
    'Frontend',
    'Backend',
    'AI / Healthcare',
    'Enterprise',
  ];

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      'All': projectsData.length,
      'Full-Stack': 0,
      'Frontend': 0,
      'Backend': 0,
      'AI / Healthcare': 0,
      'Enterprise': 0,
    };

    projectsData.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const flagshipProject = filteredProjects.find((p) => p.isFlagship);
  const secondaryProjects = filteredProjects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-600" />
            <span>04 // PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Selected projects demonstrating my approach to building real software—focusing on full-stack architecture, relational database integrity, and production deployment.
          </p>
        </div>

        {/* Filter Pills */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          projectCounts={projectCounts}
        />

        {/* 1. Flagship Project (MealBites) - If present in filter */}
        {flagshipProject && (
          <div className="mb-12">
            <ProjectCard
              project={flagshipProject}
              onOpenCaseStudy={onOpenCaseStudy}
              onOpenArchitecture={onOpenArchitecture}
            />
          </div>
        )}

        {/* 2. Secondary & Multi-Sector Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2 font-mono">
                <span>ADDITIONAL PRODUCTION &amp; PROTOTYPE WORK</span>
                <span className="text-xs font-normal text-slate-500">
                  ({secondaryProjects.length} projects)
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={onOpenCaseStudy}
                  onOpenArchitecture={onOpenArchitecture}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recruiter Note on Source Code */}
        <div className="mt-12 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 font-mono shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span>All repository links point to clean, documented source code on GitHub.</span>
          </div>
          <a
            href="https://github.com/adity-a-IT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-brand-700 font-semibold font-sans"
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
};
