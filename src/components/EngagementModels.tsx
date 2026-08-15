'use client';

import React from 'react';
import { ENGAGEMENT_MODELS } from '@/data/globalEngagement';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2, DollarSign, Calendar, Sparkles } from 'lucide-react';

export function EngagementModels() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            HIRING & CONTRACT OPTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Flexible Engagement Models For Global Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
            Whether you need a full turnkey product built from scratch, a dedicated senior engineer integrated into your sprint team, or an emergency app performance audit.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENGAGEMENT_MODELS.map((model, idx) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {model.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Model 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                  {model.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {model.shortDesc}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 border-t border-slate-200 dark:border-slate-800 pt-5 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Key Deliverables:
                  </div>
                  {model.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Ideal Choice For:
                  </div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                    {model.idealFor}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <a
                href="#contact"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                Inquire For {model.title.split(' ')[0]}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
