import React from 'react';
import { ProjectCategory } from '../types';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  projectCounts: Record<ProjectCategory, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  projectCounts,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/80" role="tablist">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = projectCounts[category] || 0;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all flex items-center gap-2 ${
              isActive
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
            }`}
          >
            <span>{category}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600 border border-slate-200/60'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
