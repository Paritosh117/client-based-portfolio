'use client';

import React from 'react';
import { CLIENT_SERVICES } from '@/data/services';
import { motion } from 'framer-motion';
import { Smartphone, Rocket, Wrench, ShieldCheck, Server, Monitor, Tv, RefreshCw, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Rocket,
  Wrench,
  ShieldCheck,
  Server,
  Monitor,
  Tv,
  RefreshCw
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            FREELANCE & SERVICE OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services I Offer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            Whether you are launching a new product MVP, improving an existing app, requesting a technical audit, or expanding your engineering team capacity.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENT_SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Smartphone;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3 text-blue-500" />
                      Problems Solved:
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">
                      {service.problemsSolved}
                    </p>
                  </div>

                  {/* What is included checklist */}
                  <div className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      What Is Included:
                    </div>
                    {service.whatIsIncluded.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                >
                  {service.ctaText}
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
