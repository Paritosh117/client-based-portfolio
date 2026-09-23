'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export function Work({ onOpenCaseStudy }: WorkProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Flutter',
    'Mobile',
    'Web',
    'E-Commerce',
    'Enterprise',
    'OTT',
    'Logistics',
    'FinTech',
    'Independent',
    'Prototype'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Independent') return project.statusGroup === 'independent';
    if (activeFilter === 'Prototype') return project.statusGroup === 'prototype';
    return project.filterCategories.includes(activeFilter);
  });

  const handleOpenCaseStudy = (id: string) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(id);
    } else {
      setSelectedProjectId(id);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              PROVEN PRODUCTION EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-2xl font-normal">
              A selection of production applications and digital products across mobile, web, Smart TV and enterprise platforms.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-semibold text-slate-500 dark:text-slate-400">
            Showing <span className="font-bold text-blue-600 dark:text-blue-400">{filteredProjects.length}</span> of {PROJECTS.length} Projects
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects found matching the selected filter.
          </div>
        )}
      </div>

      {/* Case Study Deep Dive Modal Overlay */}
      <CaseStudyModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
}
