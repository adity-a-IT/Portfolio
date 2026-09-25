import React from 'react';
import { fundamentalsData } from '../data/fundamentals';
import { 
  Binary, 
  CheckCircle2
} from 'lucide-react';

export const Fundamentals: React.FC = () => {
  return (
    <section id="fundamentals" className="py-20 border-b border-slate-200/80 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <Binary className="w-3.5 h-3.5 text-brand-600" />
            <span>06 // CS CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Computer Science Fundamentals
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            A solid grounding in academic and algorithmic computer science principles, emphasizing clean problem-solving and foundational software engineering rigor.
          </p>
        </div>

        {/* Topic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundamentalsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-brand-700 font-medium px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* Concepts Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200/70"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Engineering Application */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-semibold">
                  Practical Relevance:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.importance}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Preparation Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/90 flex items-center justify-between gap-3 text-xs font-mono text-slate-600 shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Honest representation: Focused on continuous algorithmic practice and conceptual depth rather than inflated mastery claims.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
