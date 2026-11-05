import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Database, 
  Server, 
  Code2, 
  Sparkles,
  Terminal,
  FolderGit2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-20 relative bg-[#0B1020] dark:bg-[#0B1020] light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Engineering Ideas Into Reality
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Full-stack applications showcasing end-to-end architecture, relational database design, and modern web interfaces.
          </p>
        </div>

        {/* Side-by-Side Grid: Max 3 projects in a row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border-electric-500/40 shadow-xl shadow-electric-500/10 hover:border-electric-400'
                    : 'bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg hover:border-electric-500/30'
                } hover:-translate-y-1.5`}
              >
                {/* Card Top: Badges & Title */}
                <div className="space-y-4">
                  
                  {/* Status & Badge Row */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-electric-500/20 text-electric-400 border border-electric-500/30">
                      {project.badge}
                    </span>
                    <span className={`px-2.5 py-1 text-[10px] font-mono rounded-full border ${
                      project.status.includes('Active Development')
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                      <FolderGit2 className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 dark:text-cyan-400 light:text-electric-600 mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Overview */}
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  {/* Highlight Features */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#0B1020] dark:bg-[#0B1020] light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 dark:border-white/10 light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Card Bottom: Interactive Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-electric-600 hover:bg-electric-500 rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture & APIs</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub Code"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 border border-white/10 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
