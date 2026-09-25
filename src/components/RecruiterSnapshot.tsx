import React, { useState } from 'react';
import { 
  UserCheck, 
  Terminal, 
  Target, 
  Layers, 
  FolderGit2, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Download,
  Sparkles
} from 'lucide-react';

interface RecruiterSnapshotProps {
  onOpenResume: () => void;
}

export const RecruiterSnapshot: React.FC<RecruiterSnapshotProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('2adityaverma2@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="recruiter-snapshot" className="py-12 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-mono font-medium mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>For Hiring Managers &amp; Campus Recruiters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Recruiter Snapshot
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Key qualifications and technical profile summary in under 20 seconds.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-xs sm:text-sm font-medium text-slate-700 border border-slate-200 shadow-xs transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>

        {/* Snapshot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Role */}
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-brand-700 text-xs font-mono mb-2">
              <Terminal className="w-4 h-4" />
              <span>PRIMARY ROLE</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              Software Developer
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-Stack Developer &amp; Product Builder
            </p>
          </div>

          {/* Card 2: Focus Areas */}
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-sky-700 text-xs font-mono mb-2">
              <Layers className="w-4 h-4" />
              <span>TECHNICAL FOCUS</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              Full-Stack &amp; Systems
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Web Development • Backend Development • Mobile Development
            </p>
          </div>

          {/* Card 3: Core Tech */}
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-indigo-700 text-xs font-mono mb-2">
              <Sparkles className="w-4 h-4" />
              <span>CORE TECHNOLOGIES</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL'].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-mono border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Projects */}
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>PROJECT DOMAINS</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Full-Stack • AI • Enterprise
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Multi-vendor delivery, healthcare exploration &amp; corporate portals
            </p>
          </div>

          {/* Card 5: Current Goal */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-brand-50/50 backdrop-blur-md border border-brand-200 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono mb-2">
              <Target className="w-4 h-4" />
              <span>CURRENT GOAL</span>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              Placements &amp; Roles
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Software development opportunities / graduate campus placements
            </p>
          </div>
        </div>

        {/* Factuality Guarantee Banner */}
        <div className="mt-4 px-4 py-2.5 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 font-mono shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Fact-based portfolio: Verified architectures, working source codes, and realistic engineering metrics.</span>
          </div>
          <a href="#projects" className="text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 font-sans font-medium">
            <span>Explore Flagship Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
