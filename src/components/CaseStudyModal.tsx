'use client';

import React, { useEffect } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { X, CheckCircle2, UserCheck, Smartphone, Monitor, Tv, Layers, ShieldCheck, Code, Cpu, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  if (!project) return null;

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'smart tv':
        return <Tv className="w-4 h-4 text-purple-400" />;
      case 'web':
        return <Monitor className="w-4 h-4 text-indigo-400" />;
      default:
        return <Smartphone className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-8 pr-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-slate-800 text-blue-400 border border-slate-700">
                {project.category}
              </span>

              <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-blue-950 text-blue-300 border border-blue-800">
                {project.statusTag}
              </span>

              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                {project.workType}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>

            {project.confidentialityNotice && (
              <p className="text-xs text-slate-400 bg-slate-950/80 p-3 rounded-lg border border-slate-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{project.confidentialityNotice}</span>
              </p>
            )}
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-8 divide-y divide-slate-800">
            
            {/* Overview */}
            <div>
              <h3 className="text-base font-bold text-blue-400 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.shortDescription}
              </p>
            </div>

            {/* Problem / Purpose & Solution */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-extrabold text-rose-400 uppercase tracking-wider mb-2">
                  Problem / Purpose
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800">
                <h4 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider mb-2">
                  Solution Overview
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solutionOverview}
                </p>
              </div>
            </div>

            {/* MY ROLE (Crucial Ownership Section) */}
            <div className="pt-6 bg-blue-950/40 p-5 rounded-xl border border-blue-800/80">
              <div className="flex items-center gap-2 text-sm font-extrabold text-blue-300 uppercase tracking-wider mb-2">
                <UserCheck className="w-4 h-4 text-blue-400" />
                <span>My Role & Engineering Responsibility</span>
              </div>
              <p className="text-xs text-slate-100 font-medium leading-relaxed">
                {project.myRole}
              </p>
            </div>

            {/* Key Features */}
            <div className="pt-6">
              <h3 className="text-base font-bold text-blue-400 uppercase tracking-wider mb-3">
                Key Features & Functional Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Platform */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  Target Platform(s) & Status
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.platform.map((p: string) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold"
                    >
                      {getPlatformIcon(p)}
                      {p}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  <span className="text-slate-400">Project Status: </span>
                  <span className="font-bold text-emerald-400">{project.statusTag}</span>
                </div>
              </div>
            </div>

            {/* Architecture / Technical Approach & Challenges */}
            {(project.architectureNotes || project.challengesSolved) && (
              <div className="pt-6 space-y-4">
                {project.architectureNotes && (
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-extrabold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      Architecture / Technical Pattern
                    </h4>
                    <p className="text-xs text-slate-300 font-mono">
                      {project.architectureNotes}
                    </p>
                  </div>
                )}

                {project.challengesSolved && (
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-1">
                      Challenges / Technical Highlights
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {project.challengesSolved}
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Close Modal Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
