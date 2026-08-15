'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { Briefcase, Filter, Sparkles, Layers, ShieldCheck, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export function Work({ onOpenCaseStudy }: WorkProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<'all' | 'production' | 'independent' | 'prototype'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const categoryTabs = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'production', label: 'Professional / Production', count: PROJECTS.filter((p) => p.statusGroup === 'production').length },
    { id: 'independent', label: 'Independent Projects', count: PROJECTS.filter((p) => p.statusGroup === 'independent').length },
    { id: 'prototype', label: 'UI / Prototype Projects', count: PROJECTS.filter((p) => p.statusGroup === 'prototype').length }
  ];

  const domainFilters = [
    'All',
    'Flutter',
    'Web',
    'E-Commerce',
    'OTT',
    'FinTech',
    'Logistics',
    'Education',
    'Enterprise',
    'Community'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    // Primary Category Tab Filtering
    if (selectedCategoryTab !== 'all' && project.statusGroup !== selectedCategoryTab) {
      return false;
    }
    // Secondary Domain Filter
    if (selectedDomain !== 'All') {
      const matchCategory = project.category.toLowerCase().includes(selectedDomain.toLowerCase());
      const matchFilterCats = project.filterCategories.some((c) => c.toLowerCase() === selectedDomain.toLowerCase());
      const matchTech = project.technologies.some((t) => t.toLowerCase().includes(selectedDomain.toLowerCase()));
      if (!matchCategory && !matchFilterCats && !matchTech) {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Featured Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-base">
            Selected professional, independent and prototype projects. Clear distinctions between team software engineering roles and independent full-stack developments.
          </p>
        </div>

        {/* Primary Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedCategoryTab(tab.id as any);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                selectedCategoryTab === tab.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${
                selectedCategoryTab === tab.id ? 'bg-blue-800 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Secondary Domain Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12 p-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 max-w-4xl mx-auto">
          <div className="flex items-center gap-1 text-xs text-slate-400 px-3 py-1 font-semibold">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Filter Domain:</span>
          </div>
          {domainFilters.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedDomain === domain
                  ? 'bg-slate-800 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onOpenCaseStudy={(id) => {
                  if (onOpenCaseStudy) {
                    onOpenCaseStudy(id);
                  } else {
                    setSelectedProject(project);
                  }
                }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm mb-2">No projects found matching the selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategoryTab('all');
                setSelectedDomain('All');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
