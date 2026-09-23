'use client';

import React from 'react';
import { SKILL_GROUPS } from '@/data/skills';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Layers, Server, Database, Cloud, Wrench } from 'lucide-react';

const categoryIconMap: Record<string, React.ElementType> = {
  MOBILE: Smartphone,
  ARCHITECTURE: Layers,
  BACKEND: Server,
  DATABASE: Database,
  'CLOUD / SERVICES': Cloud,
  OTHER: Wrench
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Grouped Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Proven frameworks, architectures, databases, and backend services applied across production mobile applications, web platforms, and REST API backends.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = categoryIconMap[group.category] || Code2;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-wider flex items-center gap-2.5">
                    <Icon className="w-5 h-5 text-blue-500" />
                    <span>{group.category}</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                    Group 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
