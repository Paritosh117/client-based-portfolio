'use client';

import React from 'react';
import { User, CheckCircle2, Award, Briefcase, GraduationCap, MapPin, Code, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    '3+ years of professional software development experience.',
    'Specialized in Flutter cross-platform mobile apps for Android, iOS, and Smart TV.',
    'Full-cycle lifecycle ownership — from UI wireframes to Play Store / App Store release.',
    'Hands-on experience with Django REST Framework (DRF) and Vue.js web modules.',
    'Expertise in BLoC & MVVM architectures for predictable state management.',
    'Experience with real-time systems (WebSockets, Supabase) and offline-first SQLite caching.',
    'Postgraduate degree in Computer Applications (MCA — Computer Engineering).'
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-5/12 bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 shadow-xl relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <User className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Paritosh Shrouty</h3>
            <p className="text-sm font-semibold text-blue-400 mb-4">
              Flutter Developer • Software Engineer
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 mb-6 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700/60">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Durg, Chhattisgarh, India</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-700/80 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Experience:</span>
                <span className="font-bold text-white">3+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Primary Domain:</span>
                <span className="font-bold text-white">Mobile & Full-Stack</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Education:</span>
                <span className="font-bold text-white">MCA (Computer Engg)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Production App Releases:</span>
                <span className="font-bold text-emerald-400">8+ Shipped Apps</span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-7/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              Engineering Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              About Me
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
              I am a Flutter Developer and Software Engineer with 3+ years of experience engineering high-performance cross-platform applications across Android, iOS, Smart TV, and web environments. My background spans building production digital products for agritech, OTT streaming, fintech, logistics, edtech, and enterprise SaaS.
            </p>

            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">
              I specialize in clean architecture patterns like BLoC and MVVM, offline-first SQLite caching strategies, and real-time streaming interfaces. In addition to frontend mobile specialization, I possess hands-on full-stack experience constructing RESTful web APIs with Django REST Framework (DRF) and building responsive administrative modules in Vue.js backed by PostgreSQL and Supabase.
            </p>

            {/* Key Focus Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
