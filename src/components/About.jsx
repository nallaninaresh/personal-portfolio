import React, { useState } from 'react';
import { 
  User, 
  ArrowRight, 
  Download, 
  GraduationCap, 
  Server, 
  Code2, 
  Database, 
  Rocket, 
  CheckCircle2, 
  MapPin, 
  Briefcase,
  Sparkles,
  Award,
  ExternalLink,
  X,
  Eye,
  Check,
  ShoppingBag,
  RefreshCw,
  Search
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function About() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Recruiter-focused clear bullet takeaways
  const recruiterTakeaways = [
    {
      category: "Academic Standing",
      title: "B.Tech in CSE Graduate • 8.3 / 10 CGPA",
      desc: "Completed graduation with First Class Distinction from ALITS. Strong academic foundations in Object-Oriented Analysis, Data Structures, and Relational DBMS."
    },
    {
      category: "Industry Practical Experience",
      title: "Full Stack Java Developer Intern (ExcelR EdTech)",
      desc: "Completed intensive industrial internship in Vijayawada, developing enterprise Java web applications, JDBC persistence, and RESTful service integrations."
    },
    {
      category: "Backend Architecture",
      title: "Spring Boot Microservices & MySQL",
      desc: "Proficient in Core/Advanced Java, Spring Boot 3, Hibernate/JPA ORM, REST API design, and ACID transactional guarantees."
    },
    {
      category: "Modern Frontend",
      title: "Component-Driven React.js",
      desc: "Constructing responsive, high-performance web applications using modern React, stateful hooks, and utility-first Tailwind CSS."
    },
    {
      category: "Recruitment Status",
      title: "Fresher • Ready for Immediate Onboarding",
      desc: "Immediate joiner with zero notice period. Available for full-time Software Engineer / Java Developer roles across India or remote."
    }
  ];

  // Visual projects and credentials for recruiter credibility
  const visualCredentials = [
    {
      id: "excelr-cert",
      type: "Certificate",
      title: "ExcelR Full Stack Java Internship",
      subtitle: "Verified Industry Credential",
      tag: "Verified Certificate",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      image: "/internship-certificate.jpg",
      isCertificate: true,
      icon: Award
    },
    {
      id: "reusehub-logo",
      type: "Featured Project",
      title: "ReUseHub Web Platform",
      subtitle: "Spring Boot 3 + React + MySQL",
      tag: "Full-Stack System",
      tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accent: "from-cyan-500 to-emerald-500",
      icon: RefreshCw,
      metrics: "Live Item Exchange & Claims"
    },
    {
      id: "ecommerce-logo",
      type: "Core Project",
      title: "E-Commerce Enterprise System",
      subtitle: "Java Servlets + JSP + JDBC + MySQL",
      tag: "ACID Transactional",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      accent: "from-blue-500 to-indigo-500",
      icon: ShoppingBag,
      metrics: "Zero Framework Overhead"
    },
    {
      id: "jobportal-logo",
      type: "Active Project",
      title: "TalentTrack Job Portal",
      subtitle: "Role-Based Recruiter & Candidate Hub",
      tag: "Spring Boot Microservice",
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      accent: "from-purple-500 to-pink-500",
      icon: Search,
      metrics: "Applicant Tracking Pipeline"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#080D1A] dark:bg-[#080D1A] light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[34rem] h-80 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight leading-tight max-w-3xl">
            Java Full Stack Developer <span className="text-gradient">Ready for Real-World Engineering.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Computer Science Graduate (B.Tech in CSE, 8.3 CGPA) and Immediate Joiner combining enterprise Java backend architectures with reactive, accessible web frontends.
          </p>
        </div>

        {/* Box-Free Editorial Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Natural Editorial Bio & Bullets */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans">
            
            {/* Opening highlight statement */}
            <div className="border-l-2 border-cyan-400 pl-4 py-1">
              <p className="text-lg sm:text-xl text-white dark:text-white light:text-slate-900 font-semibold leading-snug">
                I am a B.Tech in Computer Science &amp; Engineering graduate and Fresher eager to bring disciplined software engineering into high-growth engineering teams.
              </p>
            </div>

            {/* Narrative text */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
              My core technical strength lies in the <strong className="text-white dark:text-white light:text-slate-900 font-semibold">Java Ecosystem</strong>—including Core &amp; Advanced Java, JDBC, and enterprise <strong className="text-cyan-400 font-semibold">Spring Boot REST microservices</strong> paired with Hibernate/JPA and normalized <strong className="text-white dark:text-white light:text-slate-900 font-semibold">MySQL</strong> databases.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
              During my intensive internship at <strong className="text-white dark:text-white light:text-slate-900 font-semibold">ExcelR EdTech Pvt Ltd</strong>, I gained verified practical experience translating client specifications into production-ready Java code, adhering strictly to clean code practices (SOLID principles, MVC pattern, and git branch workflows).
            </p>

            {/* Simple, Non-Box Recruiter Bullets */}
            <div className="pt-2 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Why Hire Me As A Fresher:
              </span>

              <div className="space-y-3.5">
                {recruiterTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="text-xs font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase">
                        {item.category}
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/nallani_naresh_resume.pdf"
                download="nallani_naresh_resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-electric-600 hover:bg-electric-500 shadow-md shadow-electric-600/20 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Official Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>View Full-Stack Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase (Internship Certificate + Project Badges/Logos) */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            
            {/* Visual Internship Certificate Card (Click to preview) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Industry Credential</span>
                </span>
                <span className="text-slate-500">ExcelR EdTech</span>
              </div>

              {/* Certificate Image Preview Container */}
              <div 
                onClick={() => setIsCertModalOpen(true)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-300 bg-[#0E1528] shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                {/* Certificate image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/internship-certificate.jpg"
                    alt="ExcelR EdTech Full Stack Java Internship Certificate - Naresh Nallani"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay with View Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          <Check className="w-2.5 h-2.5" />
                          <span>Full Stack Java Intern</span>
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white mt-1">
                          ExcelR Internship Certificate
                        </h4>
                        <p className="text-[11px] text-slate-300">
                          Click to inspect full verified credential
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Project Logos / Badges Section */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Key Architectural Projects &amp; Badges:
              </span>

              <div className="space-y-2.5">
                
                {/* Badge 1: ReUseHub Platform */}
                <a
                  href="#projects"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 border border-white/5 dark:border-white/5 light:border-slate-200 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                          ReUseHub Platform
                        </h4>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Spring Boot &bull; React
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Circular economy item donation &amp; claim engine
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Badge 2: E-Commerce System */}
                <a
                  href="#projects"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 border border-white/5 dark:border-white/5 light:border-slate-200 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                          E-Commerce Management
                        </h4>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Java &bull; JDBC &bull; MySQL
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        100% ACID transactional checkout &amp; catalog
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* Badge 3: Job Portal Application */}
                <a
                  href="#projects"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 border border-white/5 dark:border-white/5 light:border-slate-200 transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                          Job Portal Application
                        </h4>
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Active Dev
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Two-sided recruiter applicant tracking system
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

              </div>
            </div>

            {/* Recruiter Quick Status Pill */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-white/5">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Immediate Joining</span>
              </span>
              <span>Fresher</span>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Certificate Modal / Lightbox */}
      {isCertModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#0E1528] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    ExcelR Full Stack Java Internship Certificate
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Awarded to NALLANI NARESH (Reg No: 222G1A05A4)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/internship-certificate.jpg"
                  download="Naresh_Nallani_ExcelR_Internship_Certificate.jpg"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-electric-600 hover:bg-electric-500 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate High-Res Viewer */}
            <div className="rounded-xl overflow-hidden bg-black border border-white/10 max-h-[70vh] flex items-center justify-center">
              <img
                src="/internship-certificate.jpg"
                alt="Full Stack Java Internship Certificate - Naresh Nallani"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Footer verification text */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span>Organization: ExcelR EdTech Pvt Ltd • Vijayawada, AP</span>
              <span className="text-emerald-400 font-mono font-medium">✓ Verified Practical Engineering Experience</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
