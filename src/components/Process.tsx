'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/process';
import { motion } from 'framer-motion';
import { CheckCircle2, Workflow } from 'lucide-react';

export function Process() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5" />
            CLIENT WORKFLOW PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            A structured 9-step development process ensuring transparent sprint execution, clean codebases, and predictable product delivery.
          </p>
        </div>

        {/* 9-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-blue-600 dark:text-blue-400 opacity-90">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Phase {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-2 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
