import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Github, 
  Linkedin, 
  FileText
} from 'lucide-react';
import { educationData } from '../data/fundamentals';
import { skillGroups } from '../data/skills';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm overflow-hidden animate-fadeIn print:static print:p-0 print:m-0 print:bg-white print:overflow-visible print:inset-auto print:block"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="w-full max-w-4xl h-[92vh] bg-white border border-slate-200 rounded-3xl flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:rounded-none print:h-auto print:max-h-none print:overflow-visible print:max-w-none print:w-full print:p-0 print:m-0">
        {/* Header toolbar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/90 flex items-center justify-between gap-4 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-brand-50 text-brand-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-lg font-bold text-slate-900">
                Aditya Verma — Software Developer Resume
              </h2>
              <span className="text-xs text-slate-500 font-mono">
                Recruiter-optimized one-page technical resume
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 p-4 sm:p-8 overflow-y-auto bg-slate-100/70 print:p-0 print:m-0 print:bg-white print:overflow-visible">
          <div 
            id="printable-resume" 
            className="max-w-3xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-md text-slate-800 text-xs sm:text-sm space-y-3.5 font-sans antialiased print:border-none print:shadow-none print:rounded-none print:p-0 print:m-0 print:max-w-none print:w-full print:space-y-2.5 print:text-[11px]"
          >
            {/* Header / Contact info */}
            <div className="border-b border-slate-200 pb-4 print:pb-2.5 flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">ADITYA VERMA</h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  SOFTWARE DEVELOPER | FULL-STACK DEVELOPER | PRODUCT BUILDER
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  Building practical software products with modern web, backend, mobile, database, and API technologies.
                </p>

                <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3.5 mt-2.5 text-[11px] sm:text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-slate-500" />
                    <span>2adityaverma2@gmail.com</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <a 
                    href="https://github.com/adity-a-IT" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-slate-700 hover:text-brand-600 font-medium transition-colors"
                  >
                    <Github className="w-3 h-3 text-slate-500" />
                    <span>github.com/adity-a-IT</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a 
                    href="https://www.linkedin.com/in/aditya-verma-52565936b" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-slate-700 hover:text-brand-600 font-medium transition-colors"
                  >
                    <Linkedin className="w-3 h-3 text-slate-500" />
                    <span>linkedin.com/in/aditya-verma-52565936b</span>
                  </a>
                </div>
              </div>

              <div className="shrink-0 self-start">
                <img 
                  src="/portfolio_pfp.jpeg" 
                  alt="Aditya Verma" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-200 shadow-sm print:w-16 print:h-16"
                />
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                EDUCATION
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{educationData.degree}</h3>
                  <p className="text-xs text-slate-600">{educationData.university} • {educationData.location}</p>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Expected Graduation: {educationData.expectedGraduation}
                </div>
              </div>
              <div className="text-xs text-slate-600 pt-0.5">
                <strong className="text-slate-800 font-semibold">Relevant Coursework:</strong> {educationData.coursework.join(', ')}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:gap-1.5">
                {skillGroups.map((group) => (
                  <div key={group.category} className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 print:p-1.5 print:bg-white print:border-slate-200">
                    <strong className="text-slate-900 font-semibold">{group.category}:</strong>{' '}
                    <span className="text-slate-700">{group.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3.5 print:space-y-2">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                TECHNICAL PROJECTS
              </h2>

              {/* MealBites */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1.5 print:p-2 print:bg-white print:border-slate-200 print:space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900 text-sm print:text-xs">MealBites — Food Delivery Platform</h3>
                    <a
                      href="https://mealbites-kappa.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-600 hover:text-brand-700 font-medium underline print:text-[10px]"
                    >
                      [Live Demo]
                    </a>
                  </div>
                  <span className="text-xs text-slate-500 font-medium print:text-[10px]">Full-Stack Web &amp; Mobile</span>
                </div>
                <p className="text-xs text-slate-700 font-medium print:text-[10px]">
                  <span className="text-slate-500 font-normal">Tech Stack:</span> React, TypeScript, Vite, React Native, Expo, Node.js, Express, Prisma, PostgreSQL, JWT, Razorpay
                </p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-relaxed print:text-[10px]">
                  <li>Engineered decoupled web &amp; mobile clients powered by a unified REST API architecture.</li>
                  <li>Implemented role-based access control (Customer, Vendor, Admin) with JWT authentication.</li>
                  <li>Integrated transactional order lifecycle with server-side price calculation and Razorpay payment verification.</li>
                  <li>Designed relational schema in PostgreSQL using Prisma ORM with connection pooling.</li>
                </ul>
              </div>

              {/* Ultimate E Solution */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1.5 print:p-2 print:bg-white print:border-slate-200 print:space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900 text-sm print:text-xs">Ultimate E Solution — Enterprise Platform</h3>
                    <a
                      href="https://ultimateesolution.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-600 hover:text-brand-700 font-medium underline print:text-[10px]"
                    >
                      [Live Demo]
                    </a>
                  </div>
                  <span className="text-xs text-slate-500 font-medium print:text-[10px]">Enterprise Web</span>
                </div>
                <p className="text-xs text-slate-700 font-medium print:text-[10px]">
                  <span className="text-slate-500 font-normal">Tech Stack:</span> React, JavaScript, CSS3, Vite, Responsive Grid Design
                </p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-relaxed print:text-[10px]">
                  <li>Developed high-conversion corporate service catalog and interactive quote inquiry flow.</li>
                  <li>Achieved sub-second initial render times with modular bundle splitting and asset optimization.</li>
                </ul>
              </div>

              {/* Derma.AI */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1.5 print:p-2 print:bg-white print:border-slate-200 print:space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-semibold text-slate-900 text-sm print:text-xs">Derma.AI — Healthcare Tech Exploration</h3>
                  <span className="text-xs text-slate-500 font-medium print:text-[10px]">AI / Healthcare</span>
                </div>
                <p className="text-xs text-slate-700 font-medium print:text-[10px]">
                  <span className="text-slate-500 font-normal">Tech Stack:</span> Python, FastAPI, React, TypeScript, PyTorch / Computer Vision
                </p>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-relaxed print:text-[10px]">
                  <li>Explored image normalization pipelines and asynchronous inference APIs for longitudinal symptom tracking.</li>
                  <li>Engineered strict non-diagnostic intake boundaries with client-side privacy validation.</li>
                </ul>
              </div>
            </div>

            {/* CS Fundamentals & Strengths */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                COMPUTER SCIENCE FOUNDATIONS
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Data Structures, Algorithms (Sorting, Searching, Complexity Analysis), Object-Oriented Programming (OOP, SOLID), Database Management Systems (ACID, Normalization, SQL), Operating Systems (Concurrency, Event Loop), Computer Networks (TCP/IP, HTTP/S, REST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
