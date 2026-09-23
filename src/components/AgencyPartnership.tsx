'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, ShieldCheck, Code2, Zap } from 'lucide-react';

export function AgencyPartnership() {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                AGENCY DEVELOPMENT PARTNER
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Need Additional Development Capacity?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 max-w-2xl">
                I can support software and digital agencies with Flutter, mobile, web and backend development when additional engineering capacity is required. Clean codebases, disciplined sprint delivery, and reliable async communication.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  White-label & NDA Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  Clean Flutter & DRF Code
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Flexible Sprint Capacity
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                Let's Discuss a Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
