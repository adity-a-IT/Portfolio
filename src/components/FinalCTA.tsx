import React from 'react';
import { Download, Mail, FolderGit2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenResume: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 border-b border-slate-200/80 bg-slate-50/70 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Let's build something useful.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Ready to contribute to real-world engineering teams, solve production problems, and ship resilient software.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base shadow-xs transition-all hover:-translate-y-0.5"
            id="final-cta-projects"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Projects</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200/90 shadow-xs transition-all hover:-translate-y-0.5"
            id="final-cta-resume"
          >
            <Download className="w-4 h-4 text-brand-600" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200/90 shadow-xs transition-colors"
            id="final-cta-contact"
          >
            <Mail className="w-4 h-4 text-brand-600" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};
