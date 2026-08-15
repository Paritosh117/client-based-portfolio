'use client';

import React from 'react';
import { DEVELOPMENT_PROCESS_STEPS } from '@/data/interview';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Process() {
  return (
    <section id="process" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            Engineering Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            My Development Process
          </h2>
          <p className="text-slate-400 text-base">
            Structured 9-step software development lifecycle applied across production cross-platform mobile apps and web platforms.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {DEVELOPMENT_PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative group hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-3xl font-black text-blue-500/80 group-hover:text-blue-400 transition-colors">
                  {item.step}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
