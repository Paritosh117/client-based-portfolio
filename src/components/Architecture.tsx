'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_CONCEPTS, ArchitectureConcept } from '@/data/architecture';
import { Cpu, CheckCircle2, Layers, Server, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Architecture() {
  const [selectedConcept, setSelectedConcept] = useState<ArchitectureConcept>(ARCHITECTURE_CONCEPTS[0]);

  return (
    <section id="architecture" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-bold uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical Approach & Systems Design
          </h2>
          <p className="text-slate-400 text-base">
            Technically sound architectural patterns and system design paradigms used across production mobile applications, APIs, and real-time backends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Concept Navigation Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_CONCEPTS.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  selectedConcept.id === concept.id
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 opacity-80">
                    {concept.category}
                  </span>
                  <h4 className="text-sm font-bold">{concept.title}</h4>
                </div>
                <ArrowRight className={`w-4 h-4 flex-shrink-0 ${selectedConcept.id === concept.id ? 'text-white' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Detailed Concept Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800 mb-2 inline-block">
                  {selectedConcept.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedConcept.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
              {selectedConcept.shortSummary}
            </p>

            {/* Clean ASCII Architecture Flowchart Diagram */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Data Flow & Component Pipeline
              </h4>
              <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-blue-300 leading-relaxed overflow-x-auto">
                {selectedConcept.diagramAscii}
              </pre>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedConcept.description}
              </p>
            </div>

            {/* Key Engineering Principles */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Engineering Principles
              </h4>
              <div className="space-y-2">
                {selectedConcept.keyPrinciples.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Applied In */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Applied In Projects
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedConcept.appliedInProjects.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-semibold text-slate-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
