'use client';

import React from 'react';
import { SERVICES } from '@/data/services';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Server, Briefcase, ShoppingBag, Radio, Sparkles, Wrench, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Layers,
  Server,
  Briefcase,
  ShoppingBag,
  Radio,
  Sparkles,
  Wrench
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            CLIENT SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Can Build For Your Business
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Client-oriented software engineering capabilities spanning cross-platform mobile apps, backend REST APIs, web portals, and real-time systems.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Smartphone;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 pt-2 transition-colors"
                >
                  Discuss {service.title.split(' ')[0]} Project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
