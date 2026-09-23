'use client';

import React from 'react';
import { Project } from '@/data/projects';
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (projectId: string) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const isProfessional = project.statusGroup === 'production';
  const isIndependent = project.statusGroup === 'independent';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Badges Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                isProfessional
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                  : isIndependent
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
              }`}
            >
              {project.statusTag}
            </span>

            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          {project.starred && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {project.title}
        </h3>

        {/* 1-Line Business Explanation */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
          {project.shortDescription}
        </p>

        {/* Professional Disclaimer Tag if Employment/Company Project */}
        {project.professionalDisclaimer && (
          <div className="mb-4 text-[11px] font-medium italic text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{project.professionalDisclaimer}</span>
          </div>
        )}

        {/* Personal Contribution Block */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
            My Personal Contribution:
          </div>
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
            {project.myContribution}
          </p>
        </div>

        {/* Platforms & Tech Stack */}
        <div className="space-y-3 mb-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Technology:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Platform:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.platform.map((plat) => (
                <span
                  key={plat}
                  className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Case Study CTA */}
      <button
        onClick={() => onOpenCaseStudy(project.id)}
        className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white"
      >
        View Case Study
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}
