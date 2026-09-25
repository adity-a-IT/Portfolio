import React from 'react';
import { Project } from '../types';
import { 
  ExternalLink, 
  Github, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  ShieldAlert
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  onOpenArchitecture?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onOpenCaseStudy,
  onOpenArchitecture 
}) => {
  // 1. PRIMARY FLAGSHIP CARD (MealBites)
  if (project.isFlagship) {
    return (
      <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border-2 border-brand-500/30 p-6 sm:p-10 shadow-sm hover:shadow-md hover:border-brand-500/60 transition-all mb-12 group">
        {/* Subtle Ambient Background Highlight */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Top Label & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Engineering Project</span>
              </span>

              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Demo Available</span>
              </span>
            </div>

            <span className="text-xs font-mono text-slate-500">
              {project.categoryLabel}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <div className="mb-6">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Highlights Section */}
          <div className="my-8 p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-mono font-bold text-brand-700 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Technical Highlights &amp; Architecture</span>
              </h4>
              {onOpenArchitecture && (
                <button
                  onClick={onOpenArchitecture}
                  className="text-xs text-brand-600 hover:text-brand-700 underline underline-offset-4 font-mono hidden sm:inline font-medium"
                >
                  View Architecture Diagram ↓
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.highlights?.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="mb-8">
            <span className="text-xs font-mono text-slate-500 uppercase block mb-3 font-semibold">
              Technology Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-xs font-mono font-medium shadow-xs hover:border-brand-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-xs transition-all hover:-translate-y-0.5"
                id="mealbites-live-demo-btn"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all hover:-translate-y-0.5"
              id="mealbites-case-study-btn"
            >
              <BookOpen className="w-4 h-4 text-brand-300" />
              <span>Full Case Study</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm border border-slate-200 shadow-xs transition-colors"
                id="mealbites-github-btn"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (Repo)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 2. SECONDARY / MODULAR PROJECT CARDS
  return (
    <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all p-6 flex flex-col justify-between group shadow-xs">
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
            {project.categoryLabel}
          </span>

          {project.liveUrl && (
            <span className="text-[11px] font-mono text-emerald-700 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Live Website</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs font-mono text-slate-500 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Ethical / Medical disclaimer for Derma.AI if applicable */}
        {project.id === 'derma-ai' && (
          <div className="mb-4 p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-800 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Engineering Boundary:</strong> Strictly an exploratory technical intake &amp; triage system. Does not replace clinical physicians or make autonomous diagnoses.
            </span>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && (
          <div className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-xs font-mono border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons Footer */}
      <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold border border-brand-200 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.caseStudyAvailable && (
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-brand-300" />
            <span>Case Study</span>
          </button>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-mono border border-slate-200 transition-colors ml-auto shadow-xs"
            title="GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repo</span>
          </a>
        )}
      </div>
    </div>
  );
};
