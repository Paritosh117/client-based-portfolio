'use client';

import React from 'react';
import { useInterview } from '@/context/InterviewContext';
import { Presentation, X, Award, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';

export function InterviewBar() {
  const { isInterviewMode, toggleInterviewMode } = useInterview();

  if (!isInterviewMode) return null;

  return (
    <div className="bg-blue-900 text-white text-xs py-2 px-4 border-b border-blue-700 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold text-blue-200">
          <Presentation className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="uppercase tracking-wider">Interview Mode Active</span>
          <span className="hidden sm:inline-block text-blue-300 font-normal">| High legibility • Instant transitions • Explicit role boundaries</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-slate-200">
          <div className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white">3+ Years Exp</span>
          </div>

          <div className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">8+ Production Apps</span>
          </div>

          <div className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
            <UserCheck className="w-3.5 h-3.5 text-purple-300" />
            <span className="font-semibold text-white">Flutter • Django • Vue.js</span>
          </div>

          <div className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">Durg, India</span>
          </div>

          <button
            onClick={toggleInterviewMode}
            className="flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-white px-2.5 py-1 rounded text-xs font-semibold transition-colors border border-blue-600"
            title="Exit Interview Mode"
          >
            <span>Exit Mode</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
