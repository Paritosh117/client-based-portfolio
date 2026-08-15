export interface TechSkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Core Expertise"
    context: string; // Real project usage evidence
  }[];
}

export const TECHNICAL_SKILL_GROUPS: TechSkillGroup[] = [
  {
    category: 'MOBILE DEVELOPMENT',
    description: 'Cross-platform mobile engineering across Android, iOS, and Smart TV ecosystems.',
    skills: [
      { name: 'Flutter', level: 'Core Expertise', context: 'Used across 8+ production apps & independent projects for 3+ years' },
      { name: 'Dart', level: 'Core Expertise', context: 'Strong async programming, streams, reflection, and devtools profiling' },
      { name: 'FlutterFlow', level: 'Proficient', context: 'Accelerated low-code prototyping & full-stack independent app delivery' },
      { name: 'Android SDK', level: 'Proficient', context: 'Native platform channels, permissions, and APK/AAB store release build configuration' },
      { name: 'BLoC State Management', level: 'Advanced', context: 'Implemented across e-commerce (Bharat Agrimarts) and field dashboards' }
    ]
  },
  {
    category: 'WEB DEVELOPMENT',
    description: 'Modern responsive web interfaces and single-page applications.',
    skills: [
      { name: 'Vue.js', level: 'Proficient', context: 'Built enterprise CRM frontend modules, component systems, and CRUD interfaces' },
      { name: 'HTML5', level: 'Advanced', context: 'Semantic structure, web accessibility standards, and SEO tags' },
      { name: 'CSS3 / Modern Styling', level: 'Advanced', context: 'Responsive flexbox/grid layouts, CSS variables, and modern web styling' },
      { name: 'Responsive UI Design', level: 'Advanced', context: 'Mobile-first responsive layouts across web, tablet, and desktop viewports' }
    ]
  },
  {
    category: 'BACKEND DEVELOPMENT',
    description: 'REST API engineering, backend services, and web frameworks.',
    skills: [
      { name: 'Django', level: 'Proficient', context: 'Contributed backend views, models, and authentication logic for enterprise apps' },
      { name: 'Django REST Framework (DRF)', level: 'Proficient', context: 'Built RESTful endpoints, serializers, and permission middleware for CRM platforms' },
      { name: 'REST APIs', level: 'Core Expertise', context: 'Standardized API clients, token handling, error interceptors, and DTO mapping' }
    ]
  },
  {
    category: 'DATABASE & CLOUD',
    description: 'Real-time databases, cloud infrastructure, and SQL data modeling.',
    skills: [
      { name: 'Supabase', level: 'Advanced', context: 'Integrated real-time database subscriptions, Auth, Storage, and Row-Level Security' },
      { name: 'Firebase', level: 'Proficient', context: 'Implemented Auth, Firestore, Cloud Messaging, and analytics in multiple mobile apps' },
      { name: 'PostgreSQL', level: 'Proficient', context: 'Relational database schemas, migrations, CRUD operations, and index optimization' },
      { name: 'SQLite', level: 'Advanced', context: 'Local mobile database persistence for offline-first fleet tracking sync engines' }
    ]
  },
  {
    category: 'DEVELOPMENT TOOLS',
    description: 'Version control, API testing, and IDE toolchains.',
    skills: [
      { name: 'Git', level: 'Advanced', context: 'Branching strategies, pull request workflows, and collaborative codebase management' },
      { name: 'GitHub', level: 'Advanced', context: 'Repository management, release tagging, and CI/CD workflow automation' },
      { name: 'Android Studio / VS Code', level: 'Advanced', context: 'Flutter profiling, device debugging, memory leak analysis via Dart DevTools' },
      { name: 'Postman', level: 'Advanced', context: 'REST API contract testing, request collection runner, and mock server testing' }
    ]
  },
  {
    category: 'ARCHITECTURE & ENGINEERING',
    description: 'Software design patterns, architectural paradigms, and delivery methodologies.',
    skills: [
      { name: 'MVVM Architecture', level: 'Core Expertise', context: 'Reduced per-project boilerplate by 40% across 6 production apps at Aimsoft' },
      { name: 'Cross-Platform Architecture', level: 'Core Expertise', context: 'Single codebase deployment across Android, iOS, Smart TV, and Web targets' },
      { name: 'Offline-First Design', level: 'Advanced', context: 'Local SQLite data persistence with queued background synchronization' },
      { name: 'Real-Time Systems', level: 'Advanced', context: 'WebSocket tickers & Supabase real-time change data capture' },
      { name: 'Agile / Scrum', level: 'Proficient', context: 'Sprint planning, daily standups, issue tracking, and rapid iteration releases' },
      { name: 'CI / CD Pipelines', level: 'Proficient', context: 'Automated build checks, release artifact generation, and deployment pipelines' }
    ]
  }
];

export interface TechnicalHighlight {
  id: string;
  title: string;
  problem: string;
  engineeringApproach: string;
  relatedProject: string;
  technologiesUsed: string[];
}

export const TECHNICAL_HIGHLIGHTS: TechnicalHighlight[] = [
  {
    id: 'th-realtime',
    title: 'Real-Time Data Streaming via WebSockets',
    problem: 'Crypto trading applications require sub-second ticker updates without HTTP polling lag or high network overhead.',
    engineeringApproach: 'Integrated WebSocket channel listeners in Flutter, feeding price ticks directly into RxStreams with throttled UI state rebuilds to maintain 60fps.',
    relatedProject: 'Future — Crypto Trading App',
    technologiesUsed: ['Flutter', 'WebSockets', 'RxStreams']
  },
  {
    id: 'th-gps',
    title: 'GPS Location Telemetry & ETA Engine',
    problem: 'Fleet logistics apps require high-accuracy driver tracking across varying cellular conditions with minimal battery drain.',
    engineeringApproach: 'Configured native location services with distance-filtered polling intervals, integrated Google Maps SDK polylines, and computed dynamic ETA estimates.',
    relatedProject: 'Load Tracking System',
    technologiesUsed: ['Flutter', 'Google Maps API', 'Geolocation SDK']
  },
  {
    id: 'th-offline',
    title: 'Offline-First Caching with Background Sync',
    problem: 'Field technicians operating security equipment in signal dead zones need to submit logs without losing entries.',
    engineeringApproach: 'Architected local SQLite transaction caching that persists user input offline and automatically syncs queued payloads to Supabase upon reconnection.',
    relatedProject: 'Project Management Dashboard (PMD) / Load Tracking',
    technologiesUsed: ['Flutter', 'SQLite', 'Supabase']
  },
  {
    id: 'th-rest',
    title: 'Standardized REST API Client Architecture',
    problem: 'Fragmented network code across projects leads to boilerplate code, unhandled token expiration, and inconsistent error UI.',
    engineeringApproach: 'Created a reusable network library with token refresh interceptors, HTTP status mapping, and strongly-typed model serialization.',
    relatedProject: 'University Lead CRM & Aimsoft Production Apps',
    technologiesUsed: ['REST APIs', 'Dio', 'JWT Interceptors']
  },
  {
    id: 'th-auth',
    title: 'Secure JWT & OAuth Authentication',
    problem: 'Protecting user sessions across cross-platform mobile and Smart TV apps requiring automatic token renewal.',
    engineeringApproach: 'Stored encrypted access/refresh tokens in secure storage and implemented automatic silent token refresh protocols on 401 response codes.',
    relatedProject: 'Samuh OTT Platform & Bharat Agrimarts',
    technologiesUsed: ['JWT', 'Flutter Secure Storage', 'REST APIs']
  },
  {
    id: 'th-rbac',
    title: 'Multi-Role Authorization & Row-Level Security',
    problem: 'Enterprise CRM platforms require strict data isolation between admins, university counsellors, and third-party agents.',
    engineeringApproach: 'Implemented role-based middleware in Django REST Framework and configured Supabase Row-Level Security (RLS) policies at the database layer.',
    relatedProject: 'University Lead Management CRM',
    technologiesUsed: ['Django DRF', 'PostgreSQL RLS', 'Vue.js']
  },
  {
    id: 'th-video',
    title: 'Adaptive Bitrate Video Playback (HLS)',
    problem: 'Delivering seamless media streaming across fluctuating network bandwidths on Android mobile and Smart TV devices.',
    engineeringApproach: 'Integrated HLS adaptive bitrate video player streams in Flutter with D-pad remote focus navigation optimized for Smart TV displays.',
    relatedProject: 'Samuh OTT Platform',
    technologiesUsed: ['Flutter', 'Video Streaming', 'Smart TV SDK']
  },
  {
    id: 'th-subscription',
    title: 'Subscription Workflow & Billing',
    problem: 'Managing recurring digital subscriptions, payment receipts, and user access state upon billing success or failure.',
    engineeringApproach: 'Integrated Razorpay payment gateway SDK with webhooks to validate payment signatures and update user subscription status real-time.',
    relatedProject: 'Samuh OTT Platform',
    technologiesUsed: ['Razorpay API', 'Flutter', 'Firebase']
  },
  {
    id: 'th-payments',
    title: 'E-Commerce Payment & Multi-Item Cart',
    problem: 'Farmers purchasing agricultural tools and machinery require multi-item cart calculation and secure payment processing.',
    engineeringApproach: 'Built reactive BLoC cart state management coupled with Razorpay checkout APIs and real-time order status tracking notifications.',
    relatedProject: 'Bharat Agrimarts',
    technologiesUsed: ['Flutter', 'BLoC', 'Razorpay']
  },
  {
    id: 'th-database',
    title: 'PostgreSQL Relational Schema & DRF Integration',
    problem: 'University lead generation platform required complex relational schemas connecting leads, counsellors, agents, and institutions.',
    engineeringApproach: 'Designed relational PostgreSQL tables, foreign key constraints, indexing for lead search queries, and exposed type-safe DRF endpoints.',
    relatedProject: 'University Lead Management CRM',
    technologiesUsed: ['PostgreSQL', 'Django REST Framework', 'Vue.js']
  },
  {
    id: 'th-sync',
    title: 'Background Telemetry Synchronization',
    problem: 'Syncing field technician location coordinates and equipment status updates in background state without app crashes.',
    engineeringApproach: 'Utilized background task managers to execute periodic sync jobs, batching location payloads and handling retries gracefully.',
    relatedProject: 'Load Tracking System',
    technologiesUsed: ['Flutter', 'Background Tasks', 'SQLite']
  },
  {
    id: 'th-crossplatform',
    title: 'Single-Codebase Multi-Target Deployment',
    problem: 'Delivering consistent user experience across Android, iOS, Smart TV, and Web while maintaining platform-specific UI patterns.',
    engineeringApproach: 'Structured adaptive layout widgets with device-class detection, supporting touchscreen, keyboard, and D-pad remote navigation.',
    relatedProject: 'Samuh OTT & Home Service Hub',
    technologiesUsed: ['Flutter', 'Dart', 'Smart TV', 'Web']
  }
];

export const DEVELOPMENT_PROCESS_STEPS = [
  { step: '01', title: 'Understand Requirements', description: 'Analyze business goals, user personas, technical constraints, and domain requirements.' },
  { step: '02', title: 'Design Architecture', description: 'Select state management (BLoC/MVVM), define data models, and outline API contracts.' },
  { step: '03', title: 'Build UI Components', description: 'Implement responsive, pixel-perfect UI components adhering to design systems.' },
  { step: '04', title: 'Implement State Management', description: 'Establish predictable state flows using BLoC or Provider with reactive streams.' },
  { step: '05', title: 'Integrate APIs', description: 'Connect REST endpoints or GraphQL with token interceptors and robust error handling.' },
  { step: '06', title: 'Implement Backend / DB', description: 'Configure Django/DRF endpoints, Supabase schemas, and local SQLite caches.' },
  { step: '07', title: 'Verify & Test', description: 'Perform static type checks, unit testing, device testing, and Dart DevTools profiling.' },
  { step: '08', title: 'Deploy & Release', description: 'Build production APK/AAB bundles, submit to Play Store / App Store, and deploy web builds.' },
  { step: '09', title: 'Maintain & Monitor', description: 'Monitor app performance, log telemetry, fix edge cases, and roll out feature updates.' }
];
