import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060913] dark:bg-[#060913] light:bg-slate-100 border-t border-white/10 dark:border-white/10 light:border-slate-300 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand Identity & Copyright */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-electric-600 to-cyan-400 p-[1px] shadow-sm flex-shrink-0">
              <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-bold text-[11px] text-gradient">NN</span>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                {developerProfile.name}
                <span className="text-slate-500 font-normal ml-2 hidden sm:inline">• Java Full Stack Developer</span>
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Center: Inline Navigation */}
          <nav className="flex items-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={developerProfile.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={developerProfile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${developerProfile.contact.email}`}
              aria-label="Email"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
