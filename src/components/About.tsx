import React from 'react';
import { 
  Terminal, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const journeySteps = [
    { label: 'LEARN', description: 'Grasp computer science fundamentals, language mechanics, and system design.' },
    { label: 'BUILD', description: 'Translate architecture diagrams into clean frontend and backend services.' },
    { label: 'EXPERIMENT', description: 'Test different database schemas, API abstractions, and developer tooling.' },
    { label: 'SOLVE', description: 'Debug concurrency, state management, and real-world edge cases.' },
    { label: 'SHIP', description: 'Deploy live on cloud platforms and gather actual user feedback.' },
  ];

  const highlights = [
    {
      title: 'Building from Scratch',
      desc: 'I enjoy taking an idea from an empty repository to a working, deployed application with functional databases and live APIs.',
    },
    {
      title: 'Full-Stack & Backend Focus',
      desc: 'Comfortable connecting reactive client interfaces with secure Node.js/Express controllers and relational PostgreSQL schemas.',
    },
    {
      title: 'Practical Problem Solving',
      desc: 'Focused on software that serves immediate utility—whether managing restaurant orders or simplifying campus operations.',
    },
    {
      title: 'Continuous Learning',
      desc: 'Always expanding into AI tooling, mobile frameworks like React Native, and robust typing with TypeScript.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <Terminal className="w-3.5 h-3.5 text-brand-600" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering Background &amp; Philosophy
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            A developer mindset centered around shipping practical software, strong fundamentals, and engineering curiosity.
          </p>
        </div>

        {/* Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base">
            {/* Candidate Dossier Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-5 rounded-3xl bg-white/90 border border-slate-200/90 shadow-xs">
              <img 
                src="/portfolio_pfp.jpeg" 
                alt="Aditya Verma" 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-200/90 shadow-sm shrink-0" 
              />
              <div className="text-center sm:text-left space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[11px] font-mono font-semibold">
                  <span>CANDIDATE DOSSIER</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Aditya Verma</h3>
                <p className="text-xs font-mono text-slate-700 font-medium">
                  B.Tech CSE (2025–2029) • Chandigarh University
                </p>
                <p className="text-xs text-slate-500">
                  Available for software developer placements, internships, and technical evaluations.
                </p>
              </div>
            </div>

            <p>
              I am a software developer and computer science student with a passion for building software products from scratch. Rather than just following tutorials, I focus on understanding what happens under the hood—from relational table design and transactional API routing to state hydration in modern frontend frameworks.
            </p>
            <p>
              My primary focus is <strong className="text-slate-900 font-semibold">full-stack and backend development</strong>, working extensively with TypeScript, React, Node.js, Express, and PostgreSQL. I enjoy architecting systems that solve real-life bottlenecks: multi-vendor restaurant ordering with synchronized inventory (MealBites), enterprise service platforms (Ultimate E Solution), and exploratory AI intake systems (Derma.AI).
            </p>
            <p>
              I write clean, typed code, value software engineering principles like separation of concerns and defense-in-depth API validation, and enjoy the satisfaction of seeing code solve tangible problems in production.
            </p>

            <div className="pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                <span>Review my technical projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Journey Pipeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs relative overflow-hidden">
          <div className="mb-6">
            <span className="text-xs font-mono text-brand-600 uppercase tracking-wider block mb-1 font-semibold">
              Engineering Mindset
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              My Development Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
            {journeySteps.map((step, idx) => (
              <div 
                key={step.label}
                className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between relative group hover:border-brand-300 hover:bg-white hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-600">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      STEP
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 tracking-wider mb-2 font-mono">
                    {step.label}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
