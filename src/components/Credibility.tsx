'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Smartphone, Globe, Layers } from 'lucide-react';

export function Credibility() {
  const metrics = [
    {
      value: '3+ Years',
      label: 'Professional Experience',
      icon: Calendar,
      subText: 'Full lifecycle software engineering across production applications'
    },
    {
      value: '8+ Production Apps',
      label: 'Shipped to Stores & Enterprise',
      icon: Smartphone,
      subText: 'Cross-platform Android, iOS, Smart TV and web releases'
    },
    {
      value: 'Android • iOS • Smart TV • Web',
      label: 'Cross-Platform Scope',
      icon: Globe,
      subText: 'Unified Dart codebase architecture & web integration'
    },
    {
      value: 'Mobile + Backend + Web',
      label: 'Full Development Exposure',
      icon: Layers,
      subText: 'Flutter UIs, Django REST APIs, Supabase & PostgreSQL'
    }
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.subText}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
