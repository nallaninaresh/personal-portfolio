import React from 'react';
import { X, Download, FileText, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-electric-500/10 text-electric-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white dark:text-white light:text-slate-900 text-base">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-400">
                Official PDF Document • nallani_naresh_resume.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/nallani_naresh_resume.pdf"
              download="nallani_naresh_resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-electric-600 hover:bg-electric-500 rounded-lg shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet (Matches uploaded PDF exactly) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 bg-[#0B1020]/50 dark:bg-[#0B1020]/50 light:bg-slate-100">
          <div className="max-w-3xl mx-auto p-8 sm:p-10 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200 font-sans space-y-5">
            
            {/* Header */}
            <div className="text-center pb-4 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                NARESH NALLANI
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                Java Backend Developer (Fresher)
              </p>
              
              {/* Contact Info Pills */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
                <span className="flex items-center gap-1">
                  📞 {developerProfile.contact.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  ✉️ {developerProfile.contact.email}
                </span>
                <span>•</span>
                <a href={developerProfile.contact.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/nallaninaresh
                </a>
                <span>•</span>
                <a href={developerProfile.contact.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  github.com/nallaninaresh
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Career Objective
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed text-justify">
                To obtain an entry-level position as a Java BackEnd Developer where I can apply my knowledge of Core Java, Spring Boot, REST APIs, MySQL, Spring JPA, JavaScript to develop reliable and user-friendly web applications. Eager to contribute to real-world projects, enhance my technical expertise, and grow as a software developer while contributing to organizational success.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Skills
              </h2>
              <div className="text-xs space-y-1.5 text-slate-800">
                <p><span className="font-bold text-slate-950">Programming Languages:</span> Java, SQL, JavaScript</p>
                <p><span className="font-bold text-slate-950">Frameworks:</span> Spring Boot, Spring MVC, Hibernate, JPA, Servlets, JSP</p>
                <p><span className="font-bold text-slate-950">Databases:</span> MySQL, OracleSQL</p>
                <p><span className="font-bold text-slate-950">Developer Tools:</span> Git, GitHub, Maven, Postman, Eclipse, Tomcat</p>
                <p><span className="font-bold text-slate-950">Core Concepts:</span> REST APIs, JDBC, OOP, Collections, Multithreading, JWT Authentication</p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Projects
              </h2>
              <div className="space-y-4">
                
                {/* ReUseHub */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <span>ReUseHub: Sustainable Item Exchange Platform</span>
                    <span className="text-[11px] font-mono text-slate-700">Java, Spring Boot, React.js, MySQL (2025)</span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-slate-800">
                    <li>Designed and developed a full-stack item donation and exchange platform capable of handling real-time listings, categories, and automated reservation workflows for hundreds of concurrent users.</li>
                    <li>Improved API response throughput by approximately 45% and reduced database query latency by implementing B-tree indexing and optimized REST endpoints.</li>
                    <li>Implemented transactional database locking and ACID-compliant state machines to eliminate race conditions and prevent duplicate claims during simultaneous user requests.</li>
                    <li>Built responsive user and admin tracking dashboards in React.js featuring real-time status transitions, dynamic search filtering, and inventory managers, cutting page render time by 35%.</li>
                  </ul>
                </div>

                {/* TalentTrack */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-950">
                    <span>TalentTrack Job Portal System</span>
                    <span className="text-[11px] font-mono text-slate-700">Java, Spring Boot, React.js, Hibernate, MySQL (2025)</span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-slate-800">
                    <li>Designed and built a two-sided recruitment platform connecting job seekers with recruiters through structured candidate screening and applicant tracking workflows.</li>
                    <li>Improved search filter efficiency by approximately 35% using normalized schema architectures and Hibernate ORM relational mappings (@OneToMany, @ManyToOne).</li>
                    <li>Implemented Role-Based Access Control (RBAC) and secure authentication guards to separate Candidate application flows from Recruiter administrative endpoints.</li>
                    <li>Built modular pipeline tracking interfaces in React.js allowing real-time stage updates (Applied → Shortlisted → Interview → Decision) with automated notification triggers.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Education
              </h2>
              <div className="space-y-2 text-xs">
                
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-950">Bachelor of Technology (B.Tech) in CSE</span>
                    <p className="text-slate-600 italic">Anantha Lakshmi Institute of Technology and Sciences</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-slate-700">2022 – 2026</span>
                    <p className="font-bold text-slate-950">CGPA : 8.3/10</p>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-950">Intermediate (MPC)</span>
                    <p className="text-slate-600 italic">Narayana Junior College</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-slate-700">2020 – 2022</span>
                    <p className="font-bold text-slate-950">Percentage : 87.7%</p>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-950">Secondary School Certificate (SSC)</span>
                    <p className="text-slate-600 italic">Keshava Reddy Concept EM High School</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-slate-700">2020</span>
                    <p className="font-bold text-slate-950">Percentage : 100%</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Awards & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                Awards &amp; Certifications
              </h2>
              <ul className="text-xs space-y-1.5 text-slate-800 list-disc list-inside">
                <li>
                  <strong className="text-slate-950">Full Stack Java Certified – ExcelR EdTech in collab with APSCHE – JAVA (2025):</strong> Certified in enterprise Java architecture, RESTful API integration, and relational database management.
                </li>
                <li>
                  <strong className="text-slate-950">Web Full Stack Developer Virtual Internship – ExcelR EdTech (2025):</strong> Validated expertise in building full-stack web architectures using HTML5, CSS3, JavaScript, React.js, Java, Spring Boot, and RESTful microservices.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
