import React, { useState } from 'react';
import { Cpu, Sparkles } from 'lucide-react';

// Large, crisp, embedded authentic SVG tech logos
const TechLogos = {
  Java: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <path d="M12.5 24.2c0 0-2.3.3-1.6 1.7.9 1.7 5.7 1.8 6.4 1.8.8 0 5.4-.1 6.3-1.8.7-1.4-1.6-1.7-1.6-1.7s1.2-.8 2.5-.6c3.2.4 2.8 2.5 1.1 3.5-2.2 1.3-6.9 1.4-8.3 1.4s-6.1-.1-8.3-1.4c-1.7-1-2.1-3.1 1.1-3.5 1.3-.2 2.4.6 2.4.6z" fill="#007396"/>
      <path d="M10.8 20.3c0 0-2.1.4-1.4 1.6.8 1.4 4.5 1.5 5.8 1.5s5.2-.1 6-.1c.9 0 4.1-.1 4.9-1.4.6-1-1.3-1.5-1.3-1.5s1.2-.5 2.4-.4c2.6.3 2.5 1.8 1.1 2.6-1.8 1-5.7 1.1-7 1.1s-5.2-.1-7.1-1.1c-1.4-.7-1.5-2.2 1.1-2.5 1.2-.2 2.3.4 2.3.4z" fill="#ED8B00"/>
      <path d="M16.3 13.5c1.4 1.5-1.1 3-1.1 3s3.4-1.8 1.8-3.9c-1.5-2-2.7-3-8.6-6.6 6.3 2.1 6.5 6 7.9 7.5z" fill="#ED8B00"/>
      <path d="M21.5 17.2c2.1 2.2-1.7 4.5-1.7 4.5s5.1-2.6 2.7-5.8c-2.3-3-4-4.5-12.8-9.8 9.4 3.1 9.7 8.9 11.8 11.1z" fill="#007396"/>
      <path d="M18.8 8.4s-1.8-1.8-5.3-3.4c4.6.9 7.4 3.1 5.3 3.4z" fill="#ED8B00"/>
      <path d="M11.9 27.8c3.2.8 7.4.8 9.5 0 1.2-.5 2.1-1.4 2.1-1.4s-.6.5-1.7.8c-2.2.6-6.6.6-9.9 0-1.1-.2-1.7-.8-1.7-.8s.6.9 1.7 1.4z" fill="#007396"/>
    </svg>
  ),
  SpringBoot: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <circle cx="16" cy="16" r="14" fill="#6DB33F"/>
      <path d="M22.5 14.8c-.3-.2-3.8-1.9-7-1.2-3.8.8-5.3 3.7-5.2 6.1.1 2.4 1.7 4.7 4.9 4.7 3.6 0 6.6-2.6 7-6.2.2-1.8-.4-3.1-.7-3.4zm-4.7 7.4c-2.1 1.2-4.5.3-4.7-1.4-.2-1.7 1.3-3.3 3.2-3.8 2.1-.5 4.3.4 4.5 2.1.2 1.4-1.1 2.5-3 3.1z" fill="#FFFFFF"/>
      <path d="M15.5 12c.1-.4.4-1.6 1.4-2.6 1.3-1.3 2.9-1.7 3.3-1.7-.1.4-.4 1.7-1.4 2.7-1.2 1.2-2.9 1.6-3.3 1.6z" fill="#FFFFFF"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#00618A"/>
      <path d="M7 23c2.5-1.5 5.5-2 8.5-1 3.5 1.2 6.5.5 8.5-1.5-1.2 2.5-4.2 3.8-7.5 3-3-.8-6.5-.2-9.5.5z" fill="#E48E00"/>
      <path d="M11 11c1.5 1.5 2 3.5 1.5 5.5-1-1.5-2.5-2.5-4-3 1.5-.5 2-.5 2.5-2.5z" fill="#FFFFFF"/>
      <circle cx="19" cy="13" r="1.5" fill="#FFFFFF"/>
      <path d="M15 15c2.5-1 4.5-.5 6 1s2 3.5 2 5.5c-1-1.5-2.5-2.5-4-2.5s-3 1-4-4z" fill="#FFFFFF"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.6"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 16 16)"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#F7DF1E"/>
      <path d="M18.5 22.8c.8.5 1.8.8 2.8.8 1.5 0 2.4-.7 2.4-1.7 0-1.1-.9-1.5-2.4-2.1-2.1-.8-3.5-1.9-3.5-3.8 0-2.1 1.7-3.7 4.2-3.7 1.5 0 2.5.4 3.2.8l-.8 2c-.6-.4-1.4-.7-2.4-.7-1.2 0-1.9.6-1.9 1.4 0 .9.8 1.4 2.2 1.9 2.3.9 3.8 1.9 3.8 4 0 2.4-1.9 3.9-4.7 3.9-1.6 0-2.9-.4-3.8-1l.9-2.1zm-7.8-8.8h2.6v9.3c0 1.9-.9 2.8-2.5 2.8-.8 0-1.5-.2-2-.5l.5-1.9c.4.2.8.3 1.2.3.6 0 1-.3 1-1.2V14z" fill="#000000"/>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <path d="M5 4l2.2 24.5 8.8 2.5 8.8-2.5L27 4H5z" fill="#E34F26"/>
      <path d="M16 28.8l6.8-1.9L24.6 6H16v22.8z" fill="#EF652A"/>
      <path d="M16 12.3h-4.3l-.3-3.3H16V6H8.5l.8 9.5H16v-3.2zm0 6.8l-.1.1-2.8-.8-.2-2.1H9.8l.4 4.5 5.8 1.6V19.1z" fill="#EBEBEB"/>
      <path d="M16 12.3h4.5l-.4 4.5-4.1 1.1v3.2l6.8-1.9.7-7.8.1-2.3H16v3.2z" fill="#FFFFFF"/>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <path d="M5 4l2.2 24.5 8.8 2.5 8.8-2.5L27 4H5z" fill="#1572B6"/>
      <path d="M16 28.8l6.8-1.9L24.6 6H16v22.8z" fill="#33A9DC"/>
      <path d="M16 12.3h-4.3l-.3-3.3H16V6H8.5l.8 9.5H16v-3.2zm0 6.8l-.1.1-2.8-.8-.2-2.1H9.8l.4 4.5 5.8 1.6V19.1z" fill="#EBEBEB"/>
      <path d="M16 12.3h4.5l-.4 4.5-4.1 1.1v3.2l6.8-1.9.7-7.8.1-2.3H16v3.2z" fill="#FFFFFF"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#0B1020"/>
      <path d="M16 10.5c-3 0-4.8 1.5-5.5 4.5 1.1-1.5 2.4-2.1 3.9-1.7.9.3 1.5 1 2.2 1.7 1.1 1.2 2.5 2.5 5.4 2.5 3 0 4.8-1.5 5.5-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.3-1.5-1-2.2-1.7-1.1-1.2-2.5-2.5-5.4-2.5zm-6 6c-3 0-4.8 1.5-5.5 4.5 1.1-1.5 2.4-2.1 3.9-1.7.9.3 1.5 1 2.2 1.7 1.1 1.2 2.5 2.5 5.4 2.5 3 0 4.8-1.5 5.5-4.5-1.1 1.5-2.4 2.1-3.9 1.7-.9-.3-1.5-1-2.2-1.7-1.1-1.2-2.5-2.5-5.4-2.5z" fill="#38BDF8"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <path d="M29.3 14.5l-11.8-11.8c-.9-.9-2.4-.9-3.3 0l-3.3 3.3 4.2 4.2c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l4 4c.8-.3 1.8-.1 2.4.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.5-2.6l-3.8-3.8v7.2c.2.2.3.4.3.7 0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3c0-.9.5-1.7 1.3-2.1v-7.3c-.8-.4-1.3-1.2-1.3-2.1 0-.6.2-1.2.6-1.7l-4.1-4.1-6.1 6.1c-.9.9-.9 2.4 0 3.3l11.8 11.8c.9.9 2.4.9 3.3 0l11.8-11.8c1-.9 1-2.4 0-3.3z" fill="#F05032"/>
    </svg>
  ),
  Hibernate: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#59666C"/>
      <path d="M16 6l8 4.6v9.2L16 24.5l-8-4.7v-9.2L16 6z" fill="#BCAE79"/>
      <path d="M12 11h3v10h-3zm5 0h3v10h-3z" fill="#FFFFFF"/>
    </svg>
  ),
  RestApi: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#1E293B"/>
      <path d="M16 8v5m0 6v5m-8-8h5m6 0h5" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="3" fill="#3B82F6"/>
      <circle cx="16" cy="7" r="2" fill="#22D3EE"/>
      <circle cx="16" cy="25" r="2" fill="#22D3EE"/>
      <circle cx="7" cy="16" r="2" fill="#22D3EE"/>
      <circle cx="25" cy="16" r="2" fill="#22D3EE"/>
    </svg>
  ),
  Maven: () => (
    <svg viewBox="0 0 32 32" className="w-9 h-9 sm:w-10 sm:h-10">
      <rect width="32" height="32" rx="7" fill="#C71A36"/>
      <path d="M8 22V10l8 6 8-6v12l-8-5-8 5z" fill="#FFFFFF"/>
    </svg>
  )
};

export default function Skills() {
  const [filter, setFilter] = useState('All');

  // Percentages strictly in the requested 65% to 76% range
  const skills = [
    { name: "Core Java", category: "Backend", percentage: 76, logo: TechLogos.Java, color: "from-orange-500 to-amber-400" },
    { name: "OOP & MVC", category: "Core CS", percentage: 76, logo: TechLogos.Java, color: "from-electric-400 to-cyan-400" },
    { name: "MySQL", category: "Database", percentage: 75, logo: TechLogos.MySQL, color: "from-sky-500 to-blue-600" },
    { name: "Spring Boot", category: "Backend", percentage: 74, logo: TechLogos.SpringBoot, color: "from-emerald-500 to-teal-400" },
    { name: "REST APIs", category: "Backend", percentage: 73, logo: TechLogos.RestApi, color: "from-cyan-400 to-blue-500" },
    { name: "HTML5 & CSS3", category: "Frontend", percentage: 72, logo: TechLogos.HTML5, color: "from-orange-500 to-red-500" },
    { name: "JavaScript (ES6+)", category: "Frontend", percentage: 71, logo: TechLogos.JavaScript, color: "from-yellow-400 to-amber-500" },
    { name: "Git & GitHub", category: "Tools", percentage: 70, logo: TechLogos.Git, color: "from-orange-500 to-red-500" },
    { name: "Bootstrap & Tailwind", category: "Frontend", percentage: 69, logo: TechLogos.Tailwind, color: "from-cyan-400 to-teal-400" },
    { name: "Hibernate / JPA", category: "Backend", percentage: 68, logo: TechLogos.Hibernate, color: "from-amber-400 to-yellow-600" },
    { name: "React.js", category: "Frontend", percentage: 67, logo: TechLogos.React, color: "from-cyan-400 to-sky-500" },
    { name: "Maven", category: "Tools", percentage: 65, logo: TechLogos.Maven, color: "from-rose-500 to-pink-600" },
  ];

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(s => s.category === filter || (filter === 'Tools' && s.category === 'Core CS'));

  return (
    <section id="skills" className="py-16 relative bg-[#080D1A] dark:bg-[#080D1A] light:bg-white border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>SKILLS & PROFICIENCY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Technologies & Mastery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-electric-600 text-white shadow-sm'
                    : 'bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Grid: 2 columns on mobile/tablet, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const Logo = skill.logo;

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0E1528] dark:bg-[#0E1528] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-electric-500/40 transition-all duration-200 shadow-sm group hover:-translate-y-0.5"
              >
                {/* Tech Info Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3.5">
                    {/* Big Prominent Logo Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform flex-shrink-0">
                      <Logo />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white dark:text-white light:text-slate-900 tracking-tight">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Percentage Display */}
                  <div className="text-right">
                    <span className="text-sm font-mono font-bold text-cyan-400 dark:text-cyan-400 light:text-electric-600">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Smooth Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
