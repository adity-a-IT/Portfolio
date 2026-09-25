import React, { useState } from 'react';
import { skillGroups } from '../data/skills';
import { 
  Code2, 
  Terminal, 
  Database, 
  Smartphone, 
  Server, 
  Layers, 
  Search, 
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<SkillCategory, React.ReactNode> = {
    'Languages': <Code2 className="w-4 h-4 text-amber-600" />,
    'Frontend': <Layers className="w-4 h-4 text-sky-600" />,
    'Backend': <Server className="w-4 h-4 text-emerald-600" />,
    'Database': <Database className="w-4 h-4 text-indigo-600" />,
    'Mobile': <Smartphone className="w-4 h-4 text-pink-600" />,
    'DevOps & Tools': <Wrench className="w-4 h-4 text-purple-600" />,
  };

  const filteredGroups = skillGroups.filter((group) => {
    const matchesCategory = selectedCategory === 'All' || group.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const hasMatchingItem = group.items.some((item) => item.toLowerCase().includes(query));
    const hasMatchingCategory = group.category.toLowerCase().includes(query);

    return hasMatchingItem || hasMatchingCategory;
  });

  return (
    <section id="skills" className="py-20 border-b border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
              <Terminal className="w-3.5 h-3.5 text-brand-600" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Technical Skills &amp; Tooling
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Categorized technologies used across production projects and academic systems. Evaluated on practical implementation, not arbitrary percentages.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. SQL, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200/90 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-xs transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            All Categories
          </button>
          {skillGroups.map((g) => (
            <button
              key={g.category}
              onClick={() => setSelectedCategory(g.category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                selectedCategory === g.category
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {categoryIcons[g.category]}
              <span>{g.category}</span>
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const isMatched = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                          isMatched 
                            ? 'bg-brand-50 text-brand-700 border border-brand-300' 
                            : 'bg-slate-100/80 text-slate-800 border border-slate-200/80 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{group.items.length} Technologies</span>
                <span className="text-emerald-600 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hands-on</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/90 flex items-center gap-3 text-xs font-mono text-slate-600 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0"></span>
          <span>
            Every listed skill has been utilized in genuine project implementations, university coursework, or production deployments.
          </span>
        </div>
      </div>
    </section>
  );
};
