'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Monitor, Server, Globe, Zap, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="studio-glow w-[500px] h-[500px] bg-blue-500 top-10 left-1/2 -translate-x-1/2" />
      <div className="studio-glow w-[400px] h-[400px] bg-indigo-600 top-40 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Globe className="w-3.5 h-3.5" />
              <span>WORKING WITH CLIENTS GLOBALLY — US • UK • EU • UAE • APAC OVERLAP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              I Build Mobile Apps & Digital Products That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                Solve Real Business Problems Worldwide.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Flutter & Full-Stack Developer with 3+ years of experience building mobile applications, web platforms, APIs and digital products across Android, iOS, Smart TV and web. Remote engineering ready for startups & enterprises.
            </p>

            {/* Core Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold text-slate-700 dark:text-slate-300">
              {['Flutter', 'Dart', 'Django', 'Vue.js', 'REST APIs', 'Firebase', 'Supabase', 'BLoC'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
              >
                View My Work
              </a>

              <a
                href="https://wa.me/918349513774"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-500/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Guaranteed Response Time Pill */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>⚡ Guaranteed lead response within 12 hours worldwide</span>
            </div>
          </motion.div>

          {/* Right Interactive Product Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product Studio Glass Container */}
              <div className="rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-slate-800 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-xl relative">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wide flex items-center gap-1">
                    <Globe className="w-3 h-3 text-blue-400" />
                    GLOBAL_SOFTWARE_STUDIO.SYS
                  </span>
                </div>

                {/* Simulated Stack Diagram */}
                <div className="space-y-4">
                  {/* Layer 1: Clients */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Mobile & Smart TV Apps</div>
                        <div className="text-[10px] text-slate-400">Flutter • Dart • BLoC</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Android & iOS
                    </span>
                  </div>

                  {/* Layer 2: Web Platform */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Web Portals & SaaS</div>
                        <div className="text-[10px] text-slate-400">Vue.js • Next.js • Tailwind</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      Responsive
                    </span>
                  </div>

                  {/* Layer 3: Backend & Data */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">Backend APIs & Databases</div>
                        <div className="text-[10px] text-slate-400">Django • REST • Supabase • PostgreSQL</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      Real-time / Sync
                    </span>
                  </div>
                </div>

                {/* System Stats Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                    <div className="text-lg font-bold text-slate-100">8+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Production Apps</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
                    <div className="text-lg font-bold text-slate-100">3+ Years</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Field Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
