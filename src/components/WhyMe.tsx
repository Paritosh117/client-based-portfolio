'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Smartphone, Layers, Server, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

export function WhyMe() {
  const trustPoints = [
    {
      title: '3+ Years Professional Experience',
      desc: 'Hands-on full-lifecycle software development across software engineering firms and production client releases.',
      icon: Calendar
    },
    {
      title: '8+ Production Applications',
      desc: 'Shipped and deployed production applications across Agritech, OTT, FinTech, Logistics, Education, and Enterprise SaaS.',
      icon: Smartphone
    },
    {
      title: 'Android + iOS + Smart TV Scope',
      desc: 'Cross-platform Flutter specialization building touch interfaces as well as Smart TV D-pad remote controllers.',
      icon: Layers
    },
    {
      title: 'Mobile + Backend Experience',
      desc: 'Full-stack development combining Flutter client applications with Django REST Framework backends and PostgreSQL databases.',
      icon: Server
    }
  ];

  const additionalCapabilities = [
    'Full-cycle development from wireframe to store release',
    'REST API architecture & JWT session authentication',
    'Third-party payment & video streaming integrations',
    'Production Play Store & App Store deployments',
    'Real-time WebSockets & GPS location-based systems',
    'Clean MVVM & BLoC state management architecture'
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            PROVEN TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            Grounding client engagements in genuine engineering experience, clean codebase architecture, and production delivery.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPoints.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Capabilities Grid */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            Core Engineering Strengths & Production Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalCapabilities.map((cap, cIdx) => (
              <div key={cIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{cap}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
