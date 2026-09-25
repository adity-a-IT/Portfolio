import React from 'react';
import { educationData } from '../data/fundamentals';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-200/80 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
            <span>07 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-xl">
            Undergraduate curriculum and foundational computer science studies.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono mb-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{educationData.status}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {educationData.degree}
              </h3>
              <p className="text-base text-slate-600 font-medium">
                {educationData.university}
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-slate-500 md:text-right shrink-0">
              <div className="flex items-center md:justify-end gap-1.5 text-brand-700 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Graduation: {educationData.expectedGraduation}</span>
              </div>
              {educationData.location && (
                <div className="flex items-center md:justify-end gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              <span>Key Relevant Coursework</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {educationData.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span className="truncate">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
