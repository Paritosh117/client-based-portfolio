'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, MapPin, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export function About() {
  const [expanded, setExpanded] = useState(false);

  const capabilities = [
    { title: 'Cross-Platform Mobile', desc: 'Flutter, Dart, and BLoC state management for Android, iOS, and Smart TV.' },
    { title: 'Frontend Web Platforms', desc: 'Responsive Vue.js & Next.js platforms with clean component architecture.' },
    { title: 'Backend & REST APIs', desc: 'Django, DRF endpoints, PostgreSQL models, and JWT authentication.' },
    { title: 'Database & Storage', desc: 'PostgreSQL, Supabase, Firebase, and offline-first SQLite local caching.' },
    { title: 'Full Delivery Lifecycle', desc: 'From wireframes & API contracts to Play Store / App Store deployments.' },
    { title: 'Domain Experience', desc: 'Agritech, OTT, FinTech, Logistics, EdTech, Enterprise SaaS, & E-Commerce.' }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Bio Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-slate-900 text-white p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-500/20">
                  PS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Paritosh Shrouty</h3>
                  <div className="text-xs text-blue-400 font-semibold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Durg, Chhattisgarh, India (Global Remote)
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 font-mono border-t border-slate-800 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Positioning:</span>
                  <span className="text-slate-200 font-bold">Flutter & Full-Stack Product Dev</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Experience:</span>
                  <span className="text-slate-200 font-bold">3+ Years Professional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Education:</span>
                  <span className="text-slate-200 font-bold">MCA (Master of Computer Applications)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Engagement:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Freelance & Contract Services
                  </span>
                </div>
              </div>

              {/* Engineering Experience Timeline */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Engineering Experience History
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-200">Divyal Technologies Pvt Ltd</div>
                    <div className="text-[10px] text-slate-400">Software Developer</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                    2025 – Present
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-200">Aimsoft Technologies</div>
                    <div className="text-[10px] text-slate-400">Flutter Developer</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                    2023 – 2025
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 w-max">
              ABOUT ME
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              A Product Developer Focused on Building Real Systems
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              I am a Flutter & Full-Stack Product Developer with 3+ years of professional engineering experience building cross-platform mobile applications, web platforms, Smart TV applications, and backend REST APIs.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              My work spans mobile app development with Flutter and BLoC state management, backend engineering with Python, Django, and Django REST Framework, database design with PostgreSQL and Supabase, and web application development using Vue.js. I have contributed to production applications across agritech, OTT streaming, enterprise SaaS, logistics, fintech, and education.
            </p>

            {/* Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Details */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {expanded ? 'Show Less Details' : 'Read More About My Background & Engineering Philosophy'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800"
                  >
                    <p>
                      <strong>Team & Freelance Ownership:</strong> My experience combines team engineering at software firms (Divyal Technologies & Aimsoft Technologies) with complete end-to-end full-stack development capability for independent projects.
                    </p>
                    <p>
                      <strong>Engineering Approach:</strong> I focus on building maintainable software architectures using MVVM patterns, BLoC state streams in Flutter, structured Django REST serializers, and offline-first database caching to ensure software stability under real-world network conditions.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
