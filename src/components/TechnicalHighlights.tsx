'use client';

import React from 'react';
import { TECHNICAL_HIGHLIGHTS } from '@/data/interview';
import { Sparkles, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function TechnicalHighlights() {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Problem Solving Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical Highlights & Engineering Solutions
          </h2>
          <p className="text-slate-400 text-base">
            Concrete examples of complex engineering problems encountered and solved across real-world production projects. No exaggerated claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800 mb-3 inline-block">
                  {item.relatedProject}
                </span>

                <h3 className="text-base font-extrabold text-white mb-3">
                  {item.title}
                </h3>

                {/* Problem Statement */}
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 mb-3">
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block mb-1">
                    Problem Challenge:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.problem}
                  </p>
                </div>

                {/* Engineering Solution */}
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 mb-4">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Engineering Approach:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.engineeringApproach}
                  </p>
                </div>
              </div>

              {/* Technologies Tag Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {item.technologiesUsed.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
