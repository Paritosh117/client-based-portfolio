'use client';

import React from 'react';
import { Code2, Mail, Phone, ArrowUp, MessageSquare } from 'lucide-react';

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Paritosh Shrouty
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6 font-normal">
              Flutter & Full-Stack Product Developer building mobile apps, web platforms, Smart TV applications and backend REST APIs for startups, businesses and agencies.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://github.com/Paritosh117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/paritosh-shrouty-897198199/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/918349513774"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="mailto:paritoshshrouty@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 font-mono">
                SECTIONS
              </div>
              <ul className="space-y-2.5">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#what-i-build" className="hover:text-blue-400 transition-colors">What I Build</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Work</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 font-mono">
                ENGAGEMENT
              </div>
              <ul className="space-y-2.5">
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Expertise</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">How I Work</a></li>
                <li><a href="#who-i-work-with" className="hover:text-blue-400 transition-colors">Who I Work With</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Start a Project</a></li>
              </ul>
            </div>
          </div>

          {/* Availability Card */}
          <div className="md:col-span-3">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Projects
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                Open for Flutter app development, MVP builds, app improvements, and agency partnerships.
              </p>
              <a
                href="#contact"
                className="w-full inline-flex justify-center py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
              >
                Start a Project →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Paritosh Shrouty. All rights reserved. Professional Portfolio & IT Services Platform.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
