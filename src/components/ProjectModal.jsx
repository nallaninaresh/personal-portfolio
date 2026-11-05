import React, { useState } from 'react';
import { X, ExternalLink, Github, Database, Layers, Server, AlertCircle, CheckCircle, Terminal, Cpu } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture & Flow', icon: Layers },
    { id: 'database', label: 'Database Design', icon: Database },
    { id: 'apis', label: 'REST APIs', icon: Server },
    { id: 'challenges', label: 'Challenges & Solutions', icon: AlertCircle }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-50">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-electric-500/20 text-electric-400 border border-electric-500/30">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-400">
                  Status: <strong className="text-emerald-400">{project.status}</strong>
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-2">
                {project.title}
              </h2>
              <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-electric-600 hover:bg-electric-500 rounded-lg transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Preview</span>
              </a>
            )}
            <span className="text-xs text-slate-500 ml-auto hidden sm:inline">
              Key Metric: <span className="text-cyan-400 font-mono">{project.metrics}</span>
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-1 border-b border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-electric-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                  System Architectural Design
                </h3>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    <Cpu className="w-4 h-4" />
                    <span>Pattern: {project.architecture.pattern}</span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-2">
                    <p><strong className="text-white">Frontend Layer:</strong> {project.architecture.frontend}</p>
                    <p><strong className="text-white">Backend Layer:</strong> {project.architecture.backend}</p>
                    <p><strong className="text-white">Database Layer:</strong> {project.architecture.database}</p>
                  </div>
                </div>
              </div>

              {/* Visual Flow diagram representation */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                  Data & Request Lifecycle Flow
                </h3>
                <div className="p-4 rounded-xl bg-navy-950 border border-white/10 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-amber-400">1. Client Request</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-slate-300">React Components dispatch async fetch calls with JSON payload</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-electric-400">2. Controller / Servlet</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-slate-300">Validates DTO, parses path/query parameters, extracts credentials</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-emerald-400">3. Service Layer</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-slate-300">Executes business validation rules, checks status integrity</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-cyan-400">4. Repository / DAO</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-slate-300">Communicates with MySQL via JPA/JDBC connection pools</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-purple-400">5. Response Serialization</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-slate-300">ACID transaction commits, returns formatted JSON (200 / 201)</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                  Core Implementation Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: DATABASE DESIGN */}
          {activeTab === 'database' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                  Relational Schema & Entity Relationships
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Normalized to 3NF to avoid update anomalies and guarantee data integrity under high write throughput.
                </p>
                <div className="space-y-3">
                  {project.schemaDetails.map((schema, idx) => {
                    const [tableName, fields] = schema.split(' (');
                    return (
                      <div key={idx} className="p-3.5 rounded-xl bg-navy-950 border border-white/10 font-mono text-xs">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1.5">
                          <Database className="w-3.5 h-3.5" />
                          <span>Table: {tableName}</span>
                        </div>
                        <div className="text-slate-400 pl-5">
                          ({fields}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REST APIS */}
          {activeTab === 'apis' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                  API Endpoint Documentation
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  {project.apiEndpoints.map((api, idx) => {
                    const methodColor = 
                      api.method === 'GET' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' :
                      api.method === 'POST' ? 'text-electric-400 bg-electric-500/10 border-electric-500/30' :
                      api.method === 'PUT' || api.method === 'PATCH' ? 'text-amber-400 bg-amber-500/10 border-amber-500/30' :
                      'text-red-400 bg-red-500/10 border-red-500/30';

                    return (
                      <div key={idx} className="p-3 rounded-xl bg-navy-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${methodColor}`}>
                            {api.method}
                          </span>
                          <span className="text-slate-200">{api.endpoint}</span>
                        </div>
                        <span className="text-slate-400 text-[11px] font-sans">{api.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CHALLENGES */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-400 mb-2">
                Engineering Roadblocks & Solutions
              </h3>
              {project.challenges.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      CHALLENGE
                    </span>
                    <p className="text-xs font-semibold text-slate-200">{item.challenge}</p>
                  </div>
                  <div className="flex items-start gap-2 pl-2 border-l-2 border-emerald-500/40">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      SOLUTION
                    </span>
                    <p className="text-xs text-slate-300">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-50 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-electric-400" />
            <span>Tech: {project.technologies.join(', ')}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

