import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, FileText, Sparkles, MapPin, Code2, Server, Database } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [photoSrc, setPhotoSrc] = useState('/profile-photo.jpg');

  // Animated rotating roles
  const roles = [
    'Java Full Stack Developer',
    'Backend Engineer (Spring Boot)',
    'REST APIs & MySQL Architect',
    'Full Stack Software Engineer'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleImageError = () => {
    if (photoSrc === '/profile-photo.jpg') {
      setPhotoSrc('/profile-photo.png');
    } else if (photoSrc === '/profile-photo.png') {
      setPhotoSrc('/profile-photo.svg');
    }
  };

  const coreTags = [
    { name: 'Core & Advanced Java', icon: Code2, color: 'border-orange-500/30 text-orange-400 bg-orange-500/10 hover:border-orange-400/60' },
    { name: 'Spring Boot 3', icon: Server, color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:border-emerald-400/60' },
    { name: 'React.js', icon: Sparkles, color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10 hover:border-cyan-400/60' },
    { name: 'MySQL & JDBC', icon: Database, color: 'border-blue-500/30 text-blue-400 bg-blue-500/10 hover:border-blue-400/60' },
    { name: 'RESTful Microservices', icon: Sparkles, color: 'border-purple-500/30 text-purple-400 bg-purple-500/10 hover:border-purple-400/60' },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] pt-28 pb-16 lg:py-28 flex items-center bg-grid-pattern overflow-hidden">
      {/* Animated ambient lighting orbs that softly pulse and glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-electric-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-96 sm:w-[30rem] h-96 sm:h-[30rem] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear, Crisp Introduction with Animation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Friendly Greeting Pill with Live Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-medium backdrop-blur-md shadow-sm transition-transform hover:scale-105 duration-200">
              <span className="text-base animate-bounce">👋</span>
              <span>Hello, I'm</span>
              <span className="font-semibold text-white dark:text-white light:text-slate-900">{developerProfile.name}</span>
            </div>

            {/* Main Headline with Animated Rotating Role */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight leading-[1.15]">
                <span className="inline-block transition-all duration-300 transform">
                  {roles[currentRoleIndex]}
                </span>
                <span className="block text-gradient mt-1.5">
                  Building Scalable Web Apps
                </span>
              </h1>
            </div>

            {/* Clear, Simple Bio */}
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              B.Tech in Computer Science &amp; Engineering Graduate (First Class with Distinction, 8.3 CGPA) and passionate Java Full Stack Developer (<span className="text-white dark:text-white light:text-slate-900 font-semibold">Fresher &amp; Immediate Joiner</span>). Specialized in robust Spring Boot microservices, normalized MySQL databases, and responsive React interfaces.
            </p>

            {/* Primary Action Buttons with Shimmer & Hover Lift */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a
                href="#projects"
                className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-electric-600/30 hover:shadow-electric-600/50 transition-all duration-300 group active:scale-95 overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              <a
                href="/nallani_naresh_resume.pdf"
                download="nallani_naresh_resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick Preview</span>
              </button>
            </div>

            {/* Clean Core Skills Tags with Micro-Hover Animation */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {coreTags.map((tag, idx) => {
                  const Icon = tag.icon;
                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border ${tag.color} transition-all duration-200 hover:-translate-y-0.5 cursor-default shadow-sm`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tag.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Photo Card with Animated Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              
              {/* Animated Floating Badge 1 (Top-Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 z-20 px-3 py-1.5 rounded-xl bg-[#0B1020]/90 dark:bg-[#0B1020]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-slate-300 shadow-xl flex items-center gap-2 text-xs font-semibold text-white dark:text-white light:text-slate-900 animate-float backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Spring Boot 3 & Java</span>
              </div>

              {/* Animated Floating Badge 2 (Bottom-Left) */}
              <div 
                className="absolute -bottom-3 -left-3 sm:-left-4 z-20 px-3 py-1.5 rounded-xl bg-[#0B1020]/90 dark:bg-[#0B1020]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-slate-300 shadow-xl flex items-center gap-2 text-xs font-semibold text-white dark:text-white light:text-slate-900 animate-float backdrop-blur-md" 
                style={{ animationDelay: '2.5s' }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>REST APIs & MySQL</span>
              </div>

              {/* Glowing Aura behind photo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-600 via-cyan-500 to-electric-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-45 transition-opacity duration-500" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 p-4 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                
                {/* Photo wrapper with optimal 4:5 portrait ratio */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0B1020] border border-white/5 shadow-inner">
                  <img
                    src={photoSrc}
                    alt={developerProfile.name}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette on bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1528]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Profile Meta Below Photo */}
                <div className="mt-4 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-white dark:text-white light:text-slate-900">
                        {developerProfile.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-electric-600">
                        B.Tech CSE Graduate • Fresher
                      </p>
                    </div>

                    {/* Live Status Pill */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Immediate Joiner</span>
                    </div>
                  </div>

                  {/* Quick Social Buttons Dock */}
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>Andhra Pradesh, India</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={developerProfile.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:scale-110 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={developerProfile.contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#0A66C2] hover:scale-110 transition-all"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`mailto:${developerProfile.contact.email}`}
                        aria-label="Email"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
