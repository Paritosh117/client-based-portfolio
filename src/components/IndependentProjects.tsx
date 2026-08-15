'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Star } from 'lucide-react';

export function IndependentProjects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const independentList = PROJECTS.filter((p) => p.statusGroup === 'independent');

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
            FULL-STACK INDEPENDENT WORK
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
            Independent Projects
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            Projects handled independently from frontend design to backend database architecture, REST APIs, and deployment. Demonstrates full product ownership.
          </p>
        </div>

        {/* Independent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {independentList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(id) => setSelectedProjectId(id)}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
}
