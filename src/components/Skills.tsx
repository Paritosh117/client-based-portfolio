'use client';

import React from 'react';
import { TECHNICAL_SKILL_GROUPS } from '@/data/interview';
import { Smartphone, Monitor, Server, Database, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'MOBILE DEVELOPMENT':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'WEB DEVELOPMENT':
        return <Monitor className="w-5 h-5 text-indigo-400" />;
      case 'BACKEND DEVELOPMENT':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'DATABASE & CLOUD':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'DEVELOPMENT TOOLS':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical Skills & Engineering Stack
          </h2>
          <p className="text-slate-400 text-base">
            Categorized technical capabilities backed by hands-on production application delivery. No arbitrary percentage bars.
          </p>
        </div>

        {/* Grouped Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-600 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-extrabold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 font-normal">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 hover:border-slate-600 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
