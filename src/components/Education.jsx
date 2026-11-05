import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function Education() {
  const coreCoursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Database Management Systems (MySQL)',
    'Operating Systems & Architecture',
    'Computer Networks & Protocols',
    'Web Technologies & REST APIs'
  ];

  const highlights = [
    "Consistent 8.3 / 10 CGPA maintained across all 4 engineering years (First Class with Distinction).",
    "Comprehensive academic foundation in Data Structures, Relational DBMS, and Object-Oriented Analysis.",
    "Led collegiate engineering team as Lead Full-Stack Project Architect for the ReUseHub web platform."
  ];

  return (
    <section id="education" className="py-14 relative bg-[#0B1020] dark:bg-[#0B1020] light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Academic Background
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-lg mx-auto">
            Formal Computer Science engineering qualification emphasizing software design and algorithms.
          </p>
        </div>

        {/* Compact Executive Academic Card */}
        <div className="rounded-3xl bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Top Row: Degree & CGPA Scorecard */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-200">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Graduated • Immediate Joiner</span>
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400">
                    B.Tech Graduate (Fresher)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  {developerProfile.education.degree}
                </h3>
                <p className="text-sm sm:text-base font-bold text-cyan-400 dark:text-cyan-400 light:text-electric-600">
                  {developerProfile.education.branch}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium mt-0.5">
                  {developerProfile.education.institution}
                </p>
              </div>
            </div>

            {/* CGPA Scorecard Badge */}
            <div className="p-3.5 rounded-2xl bg-[#0B1020] dark:bg-[#0B1020] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-center min-w-[150px] flex-shrink-0 shadow-inner">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Cumulative CGPA
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-cyan-400 font-mono my-0.5">
                8.3 / 10
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                First Class Distinction
              </span>
            </div>
          </div>

          {/* Middle Row: Full Academic History (B.Tech, Intermediate, SSC) */}
          <div className="pt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-4">
              Complete Academic Track Record
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              
              {/* B.Tech */}
              <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-semibold">2022 – 2026</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CGPA: 8.3 / 10
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  B.Tech in Computer Science
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Anantha Lakshmi Institute of Tech &amp; Sciences
                </p>
                <p className="text-[11px] text-emerald-400/90 font-mono">
                  First Class with Distinction
                </p>
              </div>

              {/* Intermediate MPC */}
              <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-semibold">2020 – 2022</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    87.7%
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  Intermediate (MPC)
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Narayana Junior College
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  Maths, Physics, Chemistry
                </p>
              </div>

              {/* SSC */}
              <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-semibold">2020</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    100% Score
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  Secondary School Certificate (SSC)
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Keshava Reddy Concept EM High School
                </p>
                <p className="text-[11px] text-amber-400/90 font-mono">
                  Perfect 100% Distinction
                </p>
              </div>

            </div>
          </div>

          {/* Core Technical Coursework */}
          <div className="pt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900">
                Core Coursework:
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {coreCoursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-100 text-[11px] text-slate-200 dark:text-slate-200 light:text-slate-800 border border-white/5 dark:border-white/5 light:border-slate-200 font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row: Direct Hiring Readiness Note */}
          <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="text-center sm:text-left">
              🎓 Completed B.Tech in CSE (First Class with Distinction) • Fresher ready for immediate full-time onboarding.
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Schedule an Interview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
