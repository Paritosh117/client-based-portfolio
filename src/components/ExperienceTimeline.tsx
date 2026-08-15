'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  const workExperiences = EXPERIENCE_DATA.filter((exp) => exp.type === 'Work');
  const educationExperiences = EXPERIENCE_DATA.filter((exp) => exp.type === 'Education');

  return (
    <section id="experience" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Professional Experience & Education
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdown of my professional software engineering career, responsibilities, and academic foundation derived directly from my official resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-10">
              {workExperiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all">
                    
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-slate-300 block">
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Bullet Responsibilities */}
                    <div className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                          <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tag Cloud */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-semibold text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {educationExperiences.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all"
                >
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950 px-2.5 py-1 rounded border border-purple-800 mb-3">
                    {edu.period}
                  </span>

                  <h4 className="text-base font-bold text-white mb-1">
                    {edu.role}
                  </h4>

                  <p className="text-xs font-semibold text-slate-300 mb-2">
                    {edu.company}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-4">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    {edu.responsibilities.map((item, iIdx) => (
                      <p key={iIdx} className="leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
