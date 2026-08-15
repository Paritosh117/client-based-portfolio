'use client';

import React from 'react';
import { Code2, Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenResume?: () => void;
}

// Custom SVG Icons for LinkedIn and GitHub
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Paritosh Shrouty</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-normal">
              Flutter Developer & Software Engineer with 3+ years of professional experience engineering cross-platform applications across Android, iOS, Smart TV, and Web.
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Durg, Chhattisgarh, India | paritoshshrouty@gmail.com
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience Timeline</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects & Case Studies</a></li>
              <li><a href="#architecture" className="hover:text-blue-400 transition-colors">Technical Approach</a></li>
              <li><a href="#interview-prep" className="hover:text-blue-400 transition-colors">What I Work With</a></li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">
              Actions
            </h4>
            <div className="space-y-3">
              <button
                onClick={onOpenResume}
                className="w-full px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-left transition-colors flex items-center justify-between"
              >
                <span>Download Resume</span>
                <span>↓</span>
              </button>

              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/in/paritoshshrouty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/paritoshshrouty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:paritoshshrouty@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Paritosh Shrouty. All rights reserved. Designed for technical interviews and professional networking.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
