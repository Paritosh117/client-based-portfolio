'use client';

import React from 'react';
import { TIMEZONE_REGIONS, INTERNATIONAL_PAYMENTS, REMOTE_STACK } from '@/data/globalEngagement';
import { motion } from 'framer-motion';
import { Globe, Clock, CreditCard, Laptop, Zap, CheckCircle2 } from 'lucide-react';

export function GlobalReach() {
  return (
    <section className="py-24 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Globe className="w-3.5 h-3.5" />
            GLOBAL CLIENT COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seamless Engineering For Clients Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Equipped for remote collaboration across US, UK, European, Middle Eastern, and APAC timezones. Daily async updates, weekly sprint video demos, and international billing readiness.
          </p>
        </div>

        {/* Top 3 Global Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Timezone Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Timezone Overlap Coverage</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Real-time working hours overlap designed for smooth communication with founders and product teams.
            </p>

            <div className="space-y-3">
              {TIMEZONE_REGIONS.map((tz) => (
                <div key={tz.code} className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/50">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-200">{tz.name}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                      {tz.code}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">{tz.overlapHours}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{tz.cities}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillar 2: International Billing & Wire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">International Invoicing & Multi-Currency</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Hassle-free international payment rails in USD ($), EUR (€), GBP (£), AED (د.إ), and CAD ($).
            </p>

            <div className="space-y-3">
              {INTERNATIONAL_PAYMENTS.map((pm) => (
                <div key={pm.name} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{pm.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{pm.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold text-center">
              Simple Net-15 or Milestone Escrow Contracts
            </div>
          </motion.div>

          {/* Pillar 3: Remote Stack & Response Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Remote Collaboration Toolkit</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Seamless async communication integrated into your existing company workflow.
              </p>

              <div className="space-y-2.5">
                {REMOTE_STACK.map((st) => (
                  <div key={st.name} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200">{st.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{st.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 12-Hour Guarantee Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-500/40 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-black text-blue-300 uppercase tracking-wider mb-1">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                Guaranteed Lead Response
              </div>
              <p className="text-[11px] text-slate-300 font-semibold">
                Guaranteed response within 12 hours for all global inquiries worldwide.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
