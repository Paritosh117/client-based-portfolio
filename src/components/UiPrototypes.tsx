'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Palette } from 'lucide-react';

export function UiPrototypes() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const prototypeList = PROJECTS.filter((p) => p.statusGroup === 'prototype');

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Palette className="w-3.5 h-3.5" />
            UI & PROTOTYPE EXPLORATION
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
            UI & Prototype Work
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            Interactive UI mock-ups and prototype explorations developed for client presentations and design evaluations. Clearly marked as visual prototypes without backend functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prototypeList.map((project) => (
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
