import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white/70 backdrop-blur-md border-t border-slate-200/80 text-slate-600 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <div className="font-bold text-slate-900 text-base font-sans tracking-tight mb-1">
              Aditya Verma
            </div>
            <p className="text-slate-500">
              Software Developer • Full-Stack Developer • Product Builder
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/adity-a-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-verma-52565936b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=2adityaverma2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
              aria-label="Email Aditya Verma on Gmail"
              title="Email via Gmail"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors ml-2 shadow-xs"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {currentYear} Aditya Verma. Crafted with React, TypeScript &amp; Tailwind CSS.
          </div>
          <div>
            Honest &amp; Recruiter-Focused Engineering Portfolio.
          </div>
        </div>
      </div>
    </footer>
  );
};
