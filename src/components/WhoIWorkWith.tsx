'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Building, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export function WhoIWorkWith() {
  const audiences = [
    {
      id: 'startups',
      title: 'STARTUPS',
      subtitle: 'MVPs & New Products',
      icon: Rocket,
      badge: 'Rapid Launch',
      description: 'Helping founders turn initial product ideas into working MVPs built for fast market testing, user feedback, and investor demos.',
      points: [
        'Product scope planning & feature prioritization',
        'Flutter mobile & web MVP development',
        'Backend REST API & Supabase database integration',
        'Rapid iteration & deployment setup'
      ]
    },
    {
      id: 'businesses',
      title: 'BUSINESSES',
      subtitle: 'Custom Apps & Digital Platforms',
      icon: Building,
      badge: 'Business Operations',
      description: 'Building operational applications, customer-facing mobile apps, CRM systems, and internal tool dashboards tailored to real business workflows.',
      points: [
        'Business workflow digitization & internal tools',
        'Customer shopping, field service & logistics portals',
        'Role-based security & administrative dashboards',
        'Legacy code improvements & new feature additions'
      ]
    },
    {
      id: 'agencies',
      title: 'AGENCIES',
      subtitle: 'Development Partner & Capacity',
      icon: Users,
      badge: 'Engineering Capacity',
      description: 'Serving as a dependable Development Partner for digital agencies needing senior Flutter, web, and backend engineering support.',
      points: [
        'Flutter cross-platform development support',
        'Backend & REST API engineering capacity',
        'Clean codebase integration & code reviews',
        'Long-term technical partnership & sprint execution'
      ]
    }
  ];

  return (
    <section id="who-i-work-with" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            CLIENT & PARTNER ENGAGEMENT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who I Work With
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            Whether you are a startup launching a new product, a business scaling your digital operations, or an agency needing reliable development capacity.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {aud.title}
                  </h3>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {aud.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                    {aud.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  Work With Me as {aud.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
