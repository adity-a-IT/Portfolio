import React, { useEffect, useState } from 'react';
import { CaseStudy } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Database, 
  AlertCircle, 
  Sparkles, 
  TrendingUp, 
  FileText
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const sections = [
    { id: 'overview', num: '01', title: 'Overview' },
    { id: 'problem', num: '02', title: 'Problem' },
    { id: 'solution', num: '03', title: 'Solution' },
    { id: 'architecture', num: '04', title: 'Architecture' },
    { id: 'features', num: '05', title: 'Features' },
    { id: 'database', num: '06', title: 'Database Design' },
    { id: 'api', num: '07', title: 'API Design' },
    { id: 'auth', num: '08', title: 'Authentication' },
    { id: 'payment', num: '09', title: 'Payment Workflow' },
    { id: 'challenges', num: '10', title: 'Challenges' },
    { id: 'learned', num: '11', title: 'What I Learned' },
    { id: 'improvements', num: '12', title: 'Future Improvements' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`case-sec-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm overflow-hidden animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        className="w-full max-w-5xl h-[92vh] bg-white border border-slate-200 rounded-3xl flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50/90 flex items-center justify-between gap-4 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-700 font-medium mb-1">
              <FileText className="w-3.5 h-3.5" />
              <span>TECHNICAL CASE STUDY</span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-slate-900 truncate">
              {caseStudy.title}
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-xs transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation Index (Desktop) */}
          <nav className="w-56 border-r border-slate-200 p-4 overflow-y-auto hidden md:block shrink-0 bg-slate-50/60">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 block">
              12 Sections
            </span>
            <div className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-2 ${
                    activeTab === s.id
                      ? 'bg-brand-50 text-brand-700 font-bold border-l-2 border-brand-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-slate-400 text-[10px]">{s.num}</span>
                  <span className="truncate">{s.title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Right Scrollable Content Area */}
          <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-12 bg-white">
            {/* Top Live Demo Banner */}
            {caseStudy.liveUrl && (
              <div className="p-4 rounded-2xl bg-brand-50/80 border border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-brand-100 text-brand-700">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Live Application Deployed</div>
                    <div className="text-xs text-slate-600 font-mono truncate">{caseStudy.liveUrl}</div>
                  </div>
                </div>

                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-xs"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* 01 — Overview */}
            <div id="case-sec-overview" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">01</span>
                <span>PROJECT OVERVIEW</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Overview</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* 02 — Problem */}
            <div id="case-sec-problem" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">02</span>
                <span>CORE BOTTLENECK</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* 03 — Solution */}
            <div id="case-sec-solution" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">03</span>
                <span>ENGINEERING RESOLUTION</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* 04 — Architecture */}
            <div id="case-sec-architecture" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">04</span>
                <span>SYSTEM BLUEPRINT</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Architecture &amp; Decoupling</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {caseStudy.architectureDescription}
              </p>
            </div>

            {/* 05 — Features */}
            <div id="case-sec-features" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">05</span>
                <span>IMPLEMENTED CAPABILITIES</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Core Functional Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.features.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 06 — Database Design */}
            <div id="case-sec-database" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">06</span>
                <span>RELATIONAL SCHEMA &amp; INTEGRITY</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Database Design &amp; Schema</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {caseStudy.databaseDesign.description}
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-1.5">
                <div className="text-brand-700 font-semibold pb-1 border-b border-slate-200 mb-2 flex items-center gap-2">
                  <Database className="w-3.5 h-3.5" />
                  <span>Key Entities &amp; Relations:</span>
                </div>
                {caseStudy.databaseDesign.entities.map((e, idx) => (
                  <div key={idx} className="text-slate-700 pl-2 border-l border-slate-300">
                    {e}
                  </div>
                ))}
              </div>
            </div>

            {/* 07 — API Design */}
            <div id="case-sec-api" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">07</span>
                <span>RESTFUL ENDPOINTS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">API Design &amp; Contracts</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {caseStudy.apiDesign.description}
              </p>
              <div className="space-y-2">
                {caseStudy.apiDesign.endpoints.map((ep, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md font-bold ${
                        ep.method === 'GET' ? 'bg-sky-100 text-sky-700' :
                        ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700' :
                        ep.method === 'PATCH' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="text-slate-800 font-semibold">{ep.path}</span>
                    </div>
                    <span className="text-slate-600 font-sans text-xs">{ep.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 08 — Authentication */}
            <div id="case-sec-auth" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">08</span>
                <span>SECURITY &amp; AUTHORIZATION</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Authentication &amp; RBAC</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {caseStudy.authentication}
              </p>
            </div>

            {/* 09 — Payment Workflow */}
            {caseStudy.paymentWorkflow && (
              <div id="case-sec-payment" className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-700 font-medium">
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">09</span>
                  <span>FINANCIAL HANDSHAKE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Payment Workflow &amp; Verification</h3>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {caseStudy.paymentWorkflow}
                </div>
              </div>
            )}

            {/* 10 — Challenges */}
            <div id="case-sec-challenges" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">10</span>
                <span>TECHNICAL CONSTRAINTS &amp; OVERCOMING THEM</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Engineering Challenges</h3>
              <div className="space-y-2">
                {caseStudy.challenges.map((c, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 11 — What I Learned */}
            <div id="case-sec-learned" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">11</span>
                <span>GROWTH &amp; TAKEAWAYS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">What I Learned</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.whatILearned.map((l, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 12 — Future Improvements */}
            <div id="case-sec-improvements" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-700 font-medium">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">12</span>
                <span>ROADMAP</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Future Improvements</h3>
              <div className="space-y-2">
                {caseStudy.futureImprovements.map((f, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-center gap-2 font-mono">
                    <TrendingUp className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Live Demo & Action Banner */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900">Interested in evaluating this project live?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Explore the responsive web interface or review the case study again.</p>
              </div>

              <div className="flex items-center gap-3">
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
