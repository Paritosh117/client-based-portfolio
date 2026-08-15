'use client';

import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate clean text resume file blob and trigger download
    const resumeText = `PARITOSH SHROUTY
Flutter Developer | Software Engineer
Durg, Chhattisgarh, India | paritoshshrouty@gmail.com | linkedin.com/in/paritoshshrouty | +91-8349513774

SUMMARY
Flutter Developer with 3+ years of experience building cross-platform applications for Android, iOS, and Smart TV. Delivered 8+ production apps spanning agritech, OTT, fintech, logistics, edtech, and enterprise SaaS, reducing time-to-market by 40% and improving customer satisfaction by 20%. Strong expertise in BLoC state management, offline-first design, and real-time systems, with full-cycle ownership from UI architecture to Play Store/App Store deployment. Additional hands-on exposure to Django REST APIs and Vue.js for enterprise web modules.

TECHNICAL SKILLS
- Mobile: Flutter, FlutterFlow, Android SDK, BLoC, Cross-platform Architecture (Android, iOS, Smart TV)
- Languages: Dart, Python, JavaScript, SQL
- Concepts: MVVM, Offline-first Design, Real-time Systems, Agile/Scrum, CI/CD
- Backend & DB: Firebase, Supabase, PostgreSQL, REST APIs, Django, DRF
- Web: Vue.js, HTML5, CSS3
- Tools: Git, GitHub, Android Studio, Postman

EXPERIENCE
Software Developer | Divyal Technologies Pvt Ltd | April 2025 – Present | Bhilai, Chhattisgarh, India
– Built scalable Flutter apps with pixel-perfect, responsive UIs on Android and iOS; used FlutterFlow to accelerate prototyping and cut design-to-code handoff time across sprints.
– Developed Bharat Agrimarts — a Flutter e-commerce platform for agricultural product trading — implementing product listings, cart, order management, and secure authentication using BLoC.
– Contributed to the Project Management Dashboard (PMD) by building interactive UI components, workflow management modules, and backend-integrated screens.
– Integrated Supabase (real-time DB, auth, row-level security) and Django REST APIs for secure backend connectivity; improved performance via Dart DevTools profiling.
– Contributed to an enterprise Vue.js and Django web application — building responsive Vue components, integrating Django REST APIs for CRUD operations, and supporting authentication and PostgreSQL-backed modules.

Flutter Developer | Aimsoft Technologies | March 2023 – March 2025 | Durg, Chhattisgarh, India
– Architected and shipped 6 production apps across Android, iOS, and Smart TV using MVVM, reducing time-to-market by 40% and boosting customer satisfaction by 20%.
– Built reusable Flutter component libraries and standardized REST API patterns, cutting per-project boilerplate and accelerating feature delivery across all engagements.
– Owned full delivery lifecycle — from UI wireframe to Play Store/App Store release — across OTT, fintech, logistics, edtech, and community domains with consistent on-time delivery.

KEY PROJECTS
1. University Lead Management CRM | Vue.js, Django, DRF, PostgreSQL, REST APIs (2025)
2. Bharat Agrimarts | Flutter, BLoC, REST APIs, Supabase, Razorpay (2025)
3. Project Management Dashboard (PMD) | Flutter, Supabase, Django, REST APIs (2025)
4. Samuh OTT Platform | Flutter, REST APIs, Video Streaming, Firebase, Razorpay (2023–2024)
5. Future — Crypto Trading App | Flutter, Firebase, WebSockets, REST APIs (2024)
6. Load Tracking System | Flutter, Supabase, Google Maps API, SQLite (2024)
7. vShowCards | Flutter, REST APIs, QR Code, Dynamic UI (2023–2024)
8. Green Treasure App | Flutter, Firebase, Geolocation, Gamification (2023)
9. Kids Learning App | Flutter, Firebase, Multi-language, Gamification (2023)

EDUCATION
- Master of Computer Applications (MCA) — Computer Engineering | Shri Shankaracharya Technical Campus (Aug 2023 – Apr 2025) | Bhilai, Chhattisgarh, India
- Bachelor of Computer Applications (BCA) — Computer Science | Kamla Nehru College — Nagpur University (2019 – 2022) | Nagpur, Maharashtra, India
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Paritosh_Shrouty_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-6 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Paritosh Shrouty Resume</h3>
                <span className="text-xs text-slate-400">Official Interview Resume Document</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download File</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Preview */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-xs text-slate-200 space-y-6 font-mono leading-relaxed select-text">
            
            {/* Header */}
            <div className="text-center border-b border-slate-800 pb-4">
              <h1 className="text-xl font-bold text-white tracking-wide">PARITOSH SHROUTY</h1>
              <p className="text-blue-400 font-bold text-xs mt-1">Flutter Developer | Software Engineer</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Durg, Chhattisgarh, India | paritoshshrouty@gmail.com | linkedin.com/in/paritoshshrouty | +91-8349513774
              </p>
            </div>

            {/* Summary */}
            <div>
              <h4 className="font-bold text-blue-400 uppercase tracking-wider mb-1">SUMMARY</h4>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                Flutter Developer with 3+ years of experience building cross-platform applications for Android, iOS, and Smart TV. Delivered 8+ production apps spanning agritech, OTT, fintech, logistics, edtech, and enterprise SaaS, reducing time-to-market by 40% and improving customer satisfaction by 20%. Strong expertise in BLoC state management, offline-first design, and real-time systems, with full-cycle ownership from UI architecture to Play Store/App Store deployment. Additional hands-on exposure to Django REST APIs and Vue.js for enterprise web modules.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="font-bold text-blue-400 uppercase tracking-wider mb-2">EXPERIENCE</h4>
              
              <div className="space-y-3 font-sans">
                <div>
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Software Developer — Divyal Technologies Pvt Ltd</span>
                    <span className="text-slate-400">April 2025 – Present</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mb-1">Bhilai, Chhattisgarh, India</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li>Built scalable Flutter apps with responsive UIs on Android & iOS; used FlutterFlow for rapid prototyping.</li>
                    <li>Developed Bharat Agrimarts — Flutter e-commerce platform for agricultural product trading using BLoC.</li>
                    <li>Contributed to Project Management Dashboard (PMD) with Supabase/Django backends.</li>
                    <li>Integrated Supabase real-time DB & Django REST APIs; profiled performance via Dart DevTools.</li>
                    <li>Contributed to enterprise Vue.js and Django web application modules with PostgreSQL.</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-900">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>Flutter Developer — Aimsoft Technologies</span>
                    <span className="text-slate-400">March 2023 – March 2025</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mb-1">Durg, Chhattisgarh, India</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    <li>Architected and shipped 6 production apps across Android, iOS, and Smart TV using MVVM.</li>
                    <li>Built reusable Flutter component libraries and standardized REST API patterns.</li>
                    <li>Owned full delivery lifecycle — from wireframes to Play Store / App Store release.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="font-bold text-blue-400 uppercase tracking-wider mb-2">EDUCATION</h4>
              <div className="space-y-1 font-sans text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-white">MCA — Shri Shankaracharya Technical Campus</span>
                  <span className="text-slate-400">Aug 2023 – Apr 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-white">BCA — Kamla Nehru College (Nagpur University)</span>
                  <span className="text-slate-400">2019 – 2022</span>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Click 'Download File' to download text resume copy.</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 font-bold hover:bg-slate-700"
            >
              Close Resume
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
