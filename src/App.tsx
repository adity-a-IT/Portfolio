import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Projects } from './components/Projects';
import { EngineeringMindset } from './components/EngineeringMindset';
import { Fundamentals } from './components/Fundamentals';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { FluidCanvas } from './components/FluidCanvas';
import { CaseStudy, Project } from './types';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    if (project.caseStudy) {
      setSelectedCaseStudy(project.caseStudy);
    }
  };

  const handleOpenArchitecture = () => {
    const el = document.getElementById('architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-brand-500/20 selection:text-brand-900 overflow-x-hidden">
      {/* Background Interactive WebGL Fluid Canvas (Ref: aaabadcode.com) */}
      <div className="print:hidden">
        <FluidCanvas />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen print:hidden">
        {/* Fixed Sticky Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. Recruiter Snapshot (Immediate 20-30s briefing) */}
          <RecruiterSnapshot onOpenResume={() => setIsResumeOpen(true)} />

          {/* 3. About Section with Development Lifecycle */}
          <About />

          {/* 4. Technical Skills */}
          <Skills />

          {/* 5. Flagship Architecture Deep Dive (MealBites) */}
          <ArchitectureDiagram />

          {/* 6. Featured Projects & Filter */}
          <Projects
            onOpenCaseStudy={handleOpenCaseStudy}
            onOpenArchitecture={handleOpenArchitecture}
          />

          {/* 7. Engineering Mindset (How I Build) */}
          <EngineeringMindset />

          {/* 8. Computer Science Fundamentals */}
          <Fundamentals />

          {/* 9. Education & Coursework */}
          <Education />

          {/* 10. Official Resume Download & Preview */}
          <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* 11. Contact & Socials */}
          <Contact />

          {/* 12. Final Call to Action */}
          <FinalCTA onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <ResumePreviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
