import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight, Phone } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSent(true);
    // Direct fallback to native email client
    const mailto = `mailto:${developerProfile.contact.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 relative bg-[#080D1A] dark:bg-[#080D1A] light:bg-white border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-semibold mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-1.5 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
            Open for full-time Software Developer opportunities, projects, and discussions.
          </p>
        </div>

        {/* Clean Modern Contact Box */}
        <div className="rounded-3xl bg-[#0E1528] dark:bg-[#0E1528] light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 p-6 sm:p-10 shadow-xl">
          
          {/* Quick Direct Channels Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-8 mb-8 border-b border-white/10 dark:border-white/10 light:border-slate-200">
            
            {/* Phone Tile */}
            <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between">
              <a
                href={`tel:${developerProfile.contact.phone.replace(/[\s-]/g, '')}`}
                className="flex items-center gap-2.5 min-w-0"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Call / WhatsApp</span>
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 truncate block">
                    {developerProfile.contact.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Email Tile */}
            <div className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between">
              <a
                href={`mailto:${developerProfile.contact.email}`}
                className="flex items-center gap-2.5 min-w-0"
              >
                <div className="p-2 rounded-xl bg-electric-500/10 text-electric-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Email</span>
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 truncate block">
                    {developerProfile.contact.email}
                  </span>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email"
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Tile */}
            <a
              href={developerProfile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between hover:border-electric-500/30 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">LinkedIn</span>
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 truncate block">
                    /in/nallaninaresh
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Tile */}
            <a
              href={developerProfile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-slate-200 flex items-center justify-between hover:border-electric-500/30 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-white/10 text-white dark:text-white light:text-slate-800 flex-shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">GitHub</span>
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 truncate block">
                    /nallaninaresh
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

          </div>

          {/* Simple Direct Message Form */}
          {sent ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                Message Dispatched!
              </h3>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-sm mx-auto">
                Your message has been opened in your email client. I will respond to you shortly!
              </p>
              <button
                onClick={() => { setSent(false); setFormData({ name: '', email: '', message: '' }); }}
                className="mt-3 text-xs text-electric-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-electric-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-electric-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Your message, project inquiry, or interview details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-electric-500 transition-colors"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-electric-600 hover:bg-electric-500 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
