'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Globe, ShieldCheck } from 'lucide-react';

export function WhyMe() {
  const points = [
    {
      title: 'Product-Focused Mindset',
      desc: 'I focus on solving the underlying business problem and user journey, not simply implementing static screens.',
      icon: Target
    },
    {
      title: 'Full-Cycle Capability',
      desc: 'End-to-end experience across Flutter mobile applications, Django REST APIs, Supabase real-time databases, and cloud deployment.',
      icon: Layers
    },
    {
      title: 'Cross-Platform Scope',
      desc: 'Proven track record releasing unified Dart apps across Android, iOS, Smart TV, and responsive web portals.',
      icon: Globe
    },
    {
      title: 'Diverse Domain Experience',
      desc: 'Hands-on experience in Agritech, E-Commerce, OTT, FinTech, Logistics, EdTech, Healthcare, Community, and Enterprise SaaS.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            VALUE PROPOSITION
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Partner With Me?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
