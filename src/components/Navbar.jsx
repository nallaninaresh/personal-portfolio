import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, Sparkles, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { developerProfile } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/80 dark:bg-[#0B1020]/80 light:bg-white/85 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-slate-200 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-400 p-[1.5px] shadow-md shadow-electric-500/20 group-hover:shadow-electric-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0B1020] dark:bg-[#0B1020] light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm text-gradient tracking-wider">NN</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-electric-400 transition-colors">
                {developerProfile.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400 dark:text-cyan-400 light:text-electric-600">
                &lt;Java FullStack /&gt;
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 dark:bg-white/5 light:bg-slate-100 p-1 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white light:text-white bg-electric-600 shadow-sm'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Quick Preview Resume Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              title="Preview CV"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white bg-white/5 dark:bg-white/5 light:bg-slate-100 hover:bg-white/10 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview CV</span>
            </button>

            {/* Download Resume Direct Button */}
            <a
              href="/nallani_naresh_resume.pdf"
              download="nallani_naresh_resume.pdf"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-cyan-500 rounded-xl shadow-md shadow-electric-500/20 hover:shadow-electric-500/40 transition-all duration-300 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0E1528] dark:bg-[#0E1528] light:bg-white border-b border-white/10 dark:border-white/10 light:border-slate-200 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-electric-600 text-white font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl text-slate-300 bg-white/5 border border-white/10"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Quick View Resume</span>
            </button>
            <a
              href="/nallani_naresh_resume.pdf"
              download="nallani_naresh_resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-electric-600 to-cyan-500 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

