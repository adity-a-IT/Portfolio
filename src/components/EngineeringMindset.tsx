import React from 'react';
import { 
  Compass, 
  PenTool, 
  Code2, 
  CheckCircle, 
  Terminal
} from 'lucide-react';

export const EngineeringMindset: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand the Problem',
      icon: <Compass className="w-5 h-5 text-brand-600" />,
      detail:
        'Deconstruct business requirements, user workflows, and constraints. Identify real edge cases before writing a line of code.',
      output: 'Workflow maps, user stories, requirements doc',
    },
    {
      num: '02',
      title: 'Design the Solution',
      icon: <PenTool className="w-5 h-5 text-sky-600" />,
      detail:
        'Draft schema diagrams, entity relationships (ERD), API endpoint contracts, and select appropriate data stores (SQL vs NoSQL).',
      output: 'Relational schemas, REST endpoint specs, state trees',
    },
    {
      num: '03',
      title: 'Build & Integrate',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      detail:
        'Implement typed models, transactional backend routes, responsive UI components, and integrate third-party services securely.',
      output: 'TypeScript contracts, controllers, tested views',
    },
    {
      num: '04',
      title: 'Test & Improve',
      icon: <CheckCircle className="w-5 h-5 text-indigo-600" />,
      detail:
        'Validate payload edge cases, stress database queries, enforce role guards, and optimize bundle sizes and Lighthouse performance.',
      output: 'Defensive validation, indexing, production builds',
    },
  ];

  return (
    <section className="py-20 border-b border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <Terminal className="w-3.5 h-3.5 text-brand-600" />
            <span>05 // METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How I Build Software
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            A disciplined, full-lifecycle engineering approach designed to deliver maintainable, reliable software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-100 border border-slate-200">
                    {step.icon}
                  </div>
                  <span className="text-lg font-mono font-extrabold text-slate-400">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-semibold">
                  Deliverable:
                </span>
                <span className="text-xs font-mono text-brand-700 font-semibold">
                  {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
