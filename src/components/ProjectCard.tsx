'use client';

import React from 'react';
import { Project } from '@/data/projects';
import { useInterview } from '@/context/InterviewContext';
import { ExternalLink, Layers, ShieldCheck, UserCheck, Smartphone, Monitor, Tv, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (projectId: string) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const { isInterviewMode } = useInterview();

  const getStatusBadgeStyle = (statusGroup: string) => {
    switch (statusGroup) {
      case 'production':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800';
      case 'independent':
        return 'bg-blue-950/80 text-blue-300 border-blue-800';
      case 'prototype':
        return 'bg-amber-950/80 text-amber-300 border-amber-800';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'smart tv':
        return <Tv className="w-3.5 h-3.5" />;
      case 'web':
        return <Monitor className="w-3.5 h-3.5" />;
      default:
        return <Smartphone className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div
      className={`bg-slate-900 border rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group hover:border-blue-500/50 shadow-lg ${
        isInterviewMode ? 'border-slate-700 bg-slate-900' : 'border-slate-800 hover:shadow-blue-500/5'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
            {project.category}
          </span>

          <span
            className={`text-[11px] font-extrabold px-2.5 py-1 rounded-md border ${getStatusBadgeStyle(
              project.statusGroup
            )}`}
          >
            {project.statusTag}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
          {project.title}
          {project.starred && <span className="text-amber-400 text-xs">★</span>}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
          {project.shortDescription}
        </p>

        {/* Role Highlight Box */}
        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 mb-5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-400 mb-1">
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>MY ROLE:</span>
          </div>
          <p className="text-xs text-slate-200 font-medium leading-snug">
            {project.myRole}
          </p>
        </div>

        {/* Key Features Bullet List */}
        <div className="space-y-1.5 mb-6">
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <span className="text-blue-500 font-bold">•</span>
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div>
        {/* Platforms & Tech Stack */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800 mb-5">
          {project.platform.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {getPlatformIcon(p)}
              {p}
            </span>
          ))}

          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800/50 text-slate-400 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] text-slate-500 font-bold">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Details CTA */}
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/15 hover:bg-blue-600 text-blue-400 hover:text-white font-bold text-xs border border-blue-500/30 hover:border-blue-600 transition-all active:scale-95 group/btn"
        >
          <span>View Details & Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
