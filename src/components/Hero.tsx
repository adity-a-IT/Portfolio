import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Layers, 
  Terminal,
  CheckCircle2,
  Briefcase,
  Cpu,
  Send,
  UserCheck
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-200/70"
    >
      {/* Large subtle watermark typography inspired by aaabadcode.com */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-8 flex justify-center overflow-hidden select-none opacity-40">
        <span className="text-[7rem] sm:text-[11rem] md:text-[13rem] font-black leading-none bg-gradient-to-b from-slate-300/40 via-slate-200/10 to-transparent bg-clip-text text-transparent tracking-tighter whitespace-nowrap">
          ADITYA VERMA
        </span>
      </div>

      {/* Subtle radial ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-gradient-to-tr from-sky-200/30 to-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-xs font-mono text-slate-700 mb-6 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Actively Seeking Software Developer Placements</span>
          </div>

          {/* Profile Avatar with subtle glow and verified badge */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-indigo-500 to-sky-500 rounded-full blur-md opacity-35 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-xl">
              <img 
                src="/portfolio_pfp.jpeg" 
                alt="Aditya Verma" 
                className="w-full h-full object-cover rounded-full ring-2 ring-slate-100" 
              />
              <span 
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center" 
                title="Available for immediate placements"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </span>
            </div>
          </div>

          {/* Main Greeting & Name Heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 mb-2">
            Hey, I'm <span className="text-slate-900 font-bold">Aditya Verma</span> 👋
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Software Developer &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-600">
              Product Builder
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8 font-normal">
            I build practical web, backend, and mobile applications with modern technologies, scalable databases, and clean system architectures.
          </p>

          {/* Key Value Metric Badges for Recruiters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-9 text-xs sm:text-sm font-mono text-slate-700">
            <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/80 shadow-xs flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-600" />
              <span>Full-Stack Architecture</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/80 shadow-xs flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>PostgreSQL &amp; REST APIs</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/80 shadow-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Production Deployed Products</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {/* Primary CTA: View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              id="hero-view-projects-btn"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary CTA: Download / View Resume */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200/90 shadow-xs hover:shadow-sm transition-all hover:-translate-y-0.5"
              id="hero-resume-btn"
            >
              <Download className="w-4 h-4 text-brand-600" />
              <span>Download Resume</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/adity-a-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-xs transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-verma-52565936b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-xs transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=2adityaverma2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-xs transition-colors"
                aria-label="Email Aditya Verma on Gmail"
                title="Email via Gmail: 2adityaverma2@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick-Access Interactive Dock Cards (Inspired by aaabadcode landing dock) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-2xl">
            <a
              href="#recruiter-snapshot"
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Snapshot</span>
            </a>

            <a
              href="#projects"
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Projects</span>
            </a>

            <a
              href="#skills"
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Skills</span>
            </a>

            <a
              href="#architecture"
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Architecture</span>
            </a>

            <a
              href="#contact"
              className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-2 group backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
