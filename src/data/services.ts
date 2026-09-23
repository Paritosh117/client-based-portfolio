export interface ClientService {
  id: string;
  title: string;
  shortDescription: string;
  problemsSolved: string;
  whatIsIncluded: string[];
  technologies: string[];
  iconName: string;
  badge?: string;
  ctaText: string;
}

export const CLIENT_SERVICES: ClientService[] = [
  {
    id: 'flutter-app-development',
    title: 'Flutter App Development',
    shortDescription: 'Cross-platform Android and iOS applications built with clean architecture, high-performance rendering, and production-ready integrations.',
    problemsSolved: 'Eliminates separate iOS and Android development budgets while delivering native 60fps performance and unified business logic.',
    whatIsIncluded: [
      'Native-feel Android, iOS, and Tablet builds',
      'BLoC / Provider state management architecture',
      'API integration, JWT authentication & OAuth security',
      'Payment gateway checkout workflows (Razorpay, Stripe)',
      'Push notifications, Google Maps, location telemetry',
      'Offline-first SQLite caching & real-time WebSockets'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Firebase', 'SQLite'],
    iconName: 'Smartphone',
    badge: 'Core Specialist',
    ctaText: 'Start Flutter App Project'
  },
  {
    id: 'mvp-development',
    title: 'MVP Development',
    shortDescription: 'Helping startup founders turn product ideas into fully working, testable MVPs built for rapid market validation.',
    problemsSolved: 'Prevents over-engineering delays and excessive initial burn rate by focusing strictly on high-impact core features.',
    whatIsIncluded: [
      'Product scoping & feature prioritization roadmap',
      'Clean UI screen architecture & wireframe implementation',
      'Flutter mobile or Vue.js web frontend development',
      'Backend REST API & Supabase database integration',
      'Alpha testing, user role setup & cloud deployment'
    ],
    technologies: ['Flutter', 'FlutterFlow', 'Supabase', 'Django REST', 'Firebase'],
    iconName: 'Rocket',
    badge: 'Startup Favorite',
    ctaText: 'Build Your MVP'
  },
  {
    id: 'existing-app-improvement',
    title: 'Existing App Improvement',
    shortDescription: 'Optimizing, upgrading, and fixing existing applications that suffer from performance lag, UI flaws, or technical debt.',
    problemsSolved: 'Resolves app store rejection issues, UI responsiveness bugs, state management crashes, and slow API data rendering.',
    whatIsIncluded: [
      'Bug fixing & state management crash resolution',
      'UI responsiveness & layout polish across devices',
      'Dart DevTools memory profiling & frame-rate tuning',
      'New feature development & API integration',
      'Firebase updates, code cleanup & deployment fixes'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC', 'DevTools', 'Firebase', 'REST APIs'],
    iconName: 'Wrench',
    badge: 'Low Risk Entry',
    ctaText: 'Improve Your Existing App'
  },
  {
    id: 'flutter-code-audit',
    title: 'Flutter Code Audit',
    shortDescription: 'A comprehensive technical audit evaluating your codebase architecture, state handling, performance, and security.',
    problemsSolved: 'Identifies memory leaks, unstable state patterns, security vulnerabilities, and deployment risks before scaling.',
    whatIsIncluded: [
      'Architecture & project structure health inspection',
      'State management & memory leak analysis',
      'API payload handling & error safety checks',
      'Build configuration & store deployment review',
      'Detailed diagnostic report with refactoring roadmap'
    ],
    technologies: ['Flutter', 'Dart DevTools', 'BLoC', 'Static Analysis'],
    iconName: 'ShieldCheck',
    badge: '1-Week Audit',
    ctaText: 'Request Code Audit'
  },
  {
    id: 'backend-api-development',
    title: 'Backend & API Development',
    shortDescription: 'Scalable REST APIs, database schemas, and backend microservices built with Python, Django, and Django REST Framework.',
    problemsSolved: 'Provides robust server infrastructure to power mobile and web apps with secure authentication and fast database queries.',
    whatIsIncluded: [
      'Django & Django REST Framework (DRF) endpoints',
      'JWT & OAuth authentication security modules',
      'PostgreSQL data modeling & schema migrations',
      'CRUD modules, role-based authorization (RBAC)',
      'Third-party API webhook & service integrations'
    ],
    technologies: ['Python', 'Django', 'DRF', 'PostgreSQL', 'REST APIs'],
    iconName: 'Server',
    ctaText: 'Build Backend System'
  },
  {
    id: 'web-platform-development',
    title: 'Web Platform Development',
    shortDescription: 'Responsive web portals, CRM platforms, dashboards, and enterprise SaaS modules built using Vue.js, Django, and modern CSS.',
    problemsSolved: 'Transforms complex business workflows into clean, intuitive web portals for internal teams, counselors, and customers.',
    whatIsIncluded: [
      'Responsive Vue.js & Next.js frontend interfaces',
      'Lead management, task boards & reporting modules',
      'Role-based admin portals (Admin, Manager, Agent)',
      'PostgreSQL/Supabase backend synchronization',
      'REST API data fetching & form validation'
    ],
    technologies: ['Vue.js', 'Django', 'DRF', 'JavaScript', 'PostgreSQL', 'Tailwind'],
    iconName: 'Monitor',
    ctaText: 'Build Web Platform'
  },
  {
    id: 'smart-tv-app-development',
    title: 'Smart TV App Development',
    shortDescription: 'Specialized Smart TV and OTT streaming applications with adaptive media playback, D-pad remote navigation, and multi-profile accounts.',
    problemsSolved: 'Solves D-pad remote controller focus issues and video buffering state handling on TV hardware.',
    whatIsIncluded: [
      'Flutter Smart TV D-pad remote focus node navigation UX',
      'Adaptive bitrate video streaming engine (HLS)',
      'Multi-profile user account switching interfaces',
      'Razorpay subscription billing & plan management'
    ],
    technologies: ['Flutter', 'Smart TV', 'HLS Video', 'Firebase', 'Razorpay'],
    iconName: 'Tv',
    ctaText: 'Build Smart TV App'
  },
  {
    id: 'maintenance-feature-development',
    title: 'Maintenance & Feature Development',
    shortDescription: 'Ongoing technical support, OS version updates, third-party API upgrades, and continuous feature additions.',
    problemsSolved: 'Keeps production apps compliant with annual Google Play / Apple App Store requirements and modern security patches.',
    whatIsIncluded: [
      'Routine Android & iOS SDK updates',
      'Third-party library & API maintenance',
      'Performance monitoring & patch deployment',
      'Continuous sprint feature additions'
    ],
    technologies: ['Flutter', 'Git', 'Android SDK', 'iOS', 'CI/CD'],
    iconName: 'RefreshCw',
    ctaText: 'Retain Technical Support'
  }
];
