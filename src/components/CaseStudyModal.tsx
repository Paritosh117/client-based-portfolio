'use client';

import React, { useEffect } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Cpu, Layers, User, Wrench, Smartphone, Monitor, Tv, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';

interface CaseStudyModalProps {
  projectId?: string | null;
  project?: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ projectId, project: projectProp, onClose }: CaseStudyModalProps) {
  const project = projectProp || PROJECTS.find((p) => p.id === projectId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isProfessional = project.statusGroup === 'production';
  const caseStudy = project.caseStudyContent;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80 flex items-start justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isProfessional
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  }`}
                >
                  {project.statusTag}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {project.category}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/60 text-slate-500 border border-slate-200 dark:border-slate-800">
                  {project.workType}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title} — Case Study
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
            
            {/* Professional Disclaimer Badge */}
            {project.professionalDisclaimer && (
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3 text-blue-800 dark:text-blue-300 text-xs leading-relaxed">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
                <div>
                  <strong className="font-bold block mb-0.5">Professional Experience Disclaimer</strong>
                  {project.professionalDisclaimer} Selected details highlight my direct technical contributions while maintaining client and internal code confidentiality.
                </div>
              </div>
            )}

            {/* Overview & Business Description */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Overview & Product Description
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {caseStudy?.overview || project.shortDescription}
              </p>
            </div>

            {/* Problem & Goal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-blue-500" />
                  Business / Product Problem
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {caseStudy?.problem || project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                  Project Goal & Solution
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {caseStudy?.solution || project.solutionOverview}
                </p>
              </div>
            </div>

            {/* My Role & Responsibilities */}
            <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/50">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                My Role & Technical Contribution
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {project.myRole}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy?.myRoleDetailed || project.myContribution}
              </p>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Key Platform Features & Functional Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/80 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Challenges */}
            {project.architectureNotes && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    System Architecture
                  </h4>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.architectureNotes}
                  </p>
                </div>

                {project.challengesSolved && (
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                      Challenges & Implementation Highlights
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.challengesSolved}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack & Platforms */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                  Target Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.platform.map((plat: string) => (
                    <span
                      key={plat}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study Call To Action (Prompt Section 28) */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Have a similar project in mind?
                </h4>
                <p className="text-xs text-slate-300">
                  Let's discuss your requirements, architecture, and estimated timeline.
                </p>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
            <span className="text-xs text-slate-500">Paritosh Shrouty • Portfolio Case Study</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
