'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tv, Server, ArrowRight } from 'lucide-react';

export function WhatIBuild() {
  const categories = [
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      icon: Smartphone,
      accentColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      description: 'Cross-platform Android and iOS applications using Flutter, with production-ready architecture, APIs, authentication, payments, notifications and deployment.',
      highlights: ['Flutter & Dart', 'Native Android & iOS', 'BLoC State Management', 'App Store & Play Store Release']
    },
    {
      id: 'web-platforms',
      title: 'Web Platforms',
      icon: Monitor,
      accentColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
      description: 'Business platforms, CRM systems, dashboards and web applications using Vue.js, Django and REST APIs.',
      highlights: ['Vue.js & Next.js', 'Django & DRF Endpoints', 'Role-Based Access (RBAC)', 'PostgreSQL / Supabase']
    },
    {
      id: 'smart-tv-apps',
      title: 'Smart TV Applications',
      icon: Tv,
      accentColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      description: 'Smart TV and OTT experiences with streaming, authentication, profiles and remote-friendly interfaces.',
      highlights: ['Flutter for Smart TV', 'D-Pad Remote UX Focus', 'HLS Adaptive Video Streaming', 'Multi-Profile Accounts']
    },
    {
      id: 'backend-apis',
      title: 'Backend & APIs',
      icon: Server,
      accentColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      description: 'REST APIs, authentication, database integration and backend systems using Django and Django REST Framework.',
      highlights: ['Python & Django REST', 'JWT & OAuth Authentication', 'PostgreSQL Schema Design', 'Third-Party Webhooks']
    }
  ];

  return (
    <section id="what-i-build" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            PRODUCT CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            Specialized engineering capabilities across mobile, web, Smart TV, and backend APIs built for performance, reliability, and business impact.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${cat.accentColor} transition-transform group-hover:scale-110`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                      Category 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-2"
                >
                  Explore {cat.title} Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
