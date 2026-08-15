'use client';

import React from 'react';
import { TECHNICAL_SKILL_GROUPS } from '@/data/interview';
import { Code, Terminal, CheckCircle2, Cpu, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatIWorkWith() {
  return (
    <section id="interview-prep" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Interview Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What I Work With
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of core framework experience, runtime environments, and development tools with actual production application context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILL_GROUPS.flatMap((g) => g.skills).map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                  {skill.context}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Resume Tech</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
