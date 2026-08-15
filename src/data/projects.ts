export interface Project {
  id: string;
  title: string;
  category: string;
  statusTag: 'Production Project' | 'Independent Project' | 'UI / Prototype';
  statusGroup: 'production' | 'independent' | 'prototype';
  workType: 'Team Project' | 'Independently Developed' | 'Team Project / UI Prototype';
  shortDescription: string;
  problemStatement: string;
  solutionOverview: string;
  myRole: string;
  technologies: string[];
  platform: string[];
  keyFeatures: string[];
  filterCategories: string[];
  confidentialityNotice?: string;
  featured: boolean;
  starred?: boolean;
  architectureNotes?: string;
  challengesSolved?: string;
}

export const PROJECTS: Project[] = [
  // -------------------------------------------------------------
  // PROFESSIONAL / PRODUCTION PROJECTS (1 - 12)
  // -------------------------------------------------------------
  {
    id: 'samuh-ott',
    title: 'Samuh OTT Platform',
    category: 'OTT / Entertainment',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Independently Developed',
    shortDescription: 'Bhutan\'s first dedicated OTT streaming platform, delivering adaptive video playback across Android mobile and Smart TVs.',
    problemStatement: 'Bhutan required its first dedicated digital OTT streaming infrastructure capable of rendering smooth adaptive video playback across mobile devices and Smart TVs, coupled with localized Razorpay subscription billing and multi-profile authentication.',
    solutionOverview: 'Engineered a cross-platform Flutter media streaming client featuring HLS adaptive bitrate video playback, multi-profile user switching, Razorpay payment gateway integration, and JWT-authenticated session security.',
    myRole: 'Sole Developer: Built media playback, multi-profile management, Razorpay subscription workflow, and JWT auth for Android and Smart TV.',
    technologies: ['Flutter', 'REST APIs', 'Video Streaming', 'Firebase', 'Razorpay', 'JWT Auth'],
    platform: ['Android', 'Smart TV'],
    keyFeatures: [
      'Adaptive bitrate video streaming engine (HLS)',
      'Multi-profile user account management & switching',
      'Razorpay subscription billing & recurring payment flows',
      'JWT-backed secure authentication',
      'Smart TV specialized D-pad remote navigation UX',
      'Cross-platform Flutter media discovery feed'
    ],
    filterCategories: ['Flutter', 'OTT', 'Mobile'],
    confidentialityNotice: 'Professional Production App — Sole developer role as listed on official resume.',
    featured: true,
    starred: true,
    architectureNotes: 'Flutter UI -> Custom Video Player Engine -> HLS Media Server & Firebase -> Razorpay Payment Gateways',
    challengesSolved: 'Implemented custom D-pad focus node navigation for Smart TV remotes and optimized memory consumption during high-definition video buffer state transitions.'
  },
  {
    id: 'university-crm',
    title: 'University Lead Management CRM',
    category: 'Enterprise SaaS / Education',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'A lead-management platform for university admissions, supporting onboarding and end-to-end enrollment pipelines.',
    problemStatement: 'Educational institutions needed a centralized SaaS CRM to route student admission leads to counsellors, assign university agent networks, and track prospective student onboarding in real-time.',
    solutionOverview: 'Contributed to both the Vue.js frontend and Django REST Framework (DRF) backend with PostgreSQL, implementing automated lead distribution, counsellor allocation workflows, and role-based access control.',
    myRole: 'UI / Vue.js development + API integration + Django/DRF contribution + CRUD modules + authentication & role-based access control (admin, counsellor, agent) + team collaboration.',
    technologies: ['Vue.js', 'Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs'],
    platform: ['Web'],
    keyFeatures: [
      'Lead assignment workflows routing incoming student leads to counsellors',
      'Agent-to-university routing and automated onboarding rules',
      'Real-time dashboards for Customer, Lead, Employee, and Task tracking',
      'Project management status and real-time report generation',
      'Role-based access control (Admin, Counsellor, Agent)',
      'PostgreSQL-backed CRUD modules and secure DRF endpoints'
    ],
    filterCategories: ['Web', 'Enterprise', 'Education'],
    confidentialityNotice: 'Professional Enterprise Project — Worked as part of an engineering team contributing to frontend and backend modules.',
    featured: true,
    starred: true,
    architectureNotes: 'Vue.js Component Architecture -> Axios Service Layer -> Django REST Framework -> PostgreSQL Database',
    challengesSolved: 'Engineered granular role-based middleware permissions in Django REST Framework to ensure strict data segregation between external agents and internal university counsellors.'
  },
  {
    id: 'bharat-agrimarts',
    title: 'Bharat Agrimarts',
    category: 'Agritech / E-Commerce',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'An agricultural e-commerce platform for trading farming supplies, seeds, harvesters, and tractors.',
    problemStatement: 'Farmers required an easy-to-use mobile marketplace to browse agricultural products, heavy machinery (new and used tractors), evaluate pricing, and manage orders with live delivery updates.',
    solutionOverview: 'Developed a BLoC-architected Flutter app integrating product search filters, multi-item cart management, Supabase real-time sync, and Razorpay payment integration.',
    myRole: 'UI Development + API Integration + Feature Implementation + Team Collaboration.',
    technologies: ['Flutter', 'BLoC', 'REST APIs', 'Supabase', 'Razorpay'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Agricultural product catalog (Seeds, Harvesters, New & Used Tractors)',
      'Structured search & multi-attribute filter system',
      'Multi-item cart & order management system',
      'Real-time order status tracking & push notifications',
      'BLoC state management for predictable UI state flow',
      'Supabase-backed secure user authentication'
    ],
    filterCategories: ['Flutter', 'E-Commerce', 'Mobile'],
    confidentialityNotice: 'Professional Production App — Contributed frontend UI, state management, and API integration in a team environment.',
    featured: true,
    starred: true,
    architectureNotes: 'Flutter UI -> BLoC State Management -> Repository Pattern -> REST APIs & Supabase Backend',
    challengesSolved: 'Optimized complex product catalog search queries and state transitions using reactive BLoC streams to maintain smooth 60fps list scrolling on low-spec mobile devices.'
  },
  {
    id: 'project-management-dashboard',
    title: 'Project Management Dashboard (PMD)',
    category: 'Enterprise / Field Service',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Enterprise field service management app for technicians handling camera installation, site telemetry, and time logs.',
    problemStatement: 'Field technicians deploying security cameras and equipment required a mobile tool to inspect site coordinates, log camera rotation angles, record daily work hours, and track project milestone task boards.',
    solutionOverview: 'Built Flutter UI workflow modules connected to Supabase real-time database and Django REST APIs featuring role-based access, site management, daily technician time logs, and task tracking.',
    myRole: 'UI Development + API Integration + Feature Implementation + Team Collaboration.',
    technologies: ['Flutter', 'Supabase', 'Django', 'REST APIs'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Technician installation workflows and site information logging',
      'Camera location mapping and rotation angle recording',
      'Equipment inventory management & serial logging',
      'Daily technician time logging & attendance management',
      'Task boards and milestone progress tracking',
      'Supabase/Django-backed real-time workflow modules with role-based access'
    ],
    filterCategories: ['Flutter', 'Enterprise', 'Logistics', 'Mobile'],
    confidentialityNotice: 'Enterprise Field Service System — Public description focuses on engineering contributions and non-proprietary workflows.',
    featured: true,
    starred: true,
    architectureNotes: 'Flutter UI -> Provider/BLoC -> Supabase Realtime DB & Django REST Endpoint',
    challengesSolved: 'Designed offline field data collection forms that cache technician camera logs locally before syncing to Supabase once network connection is restored.'
  },
  {
    id: 'crypto-trading-app',
    title: 'Future — Crypto Trading App',
    category: 'FinTech',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'A fintech app providing real-time crypto price feeds via WebSockets, candlestick charts, and encrypted wallet flows.',
    problemStatement: 'Crypto traders needed sub-second price telemetry, interactive candlestick financial charts, real-time P&L calculation, and 2FA-secured withdrawal requests.',
    solutionOverview: 'Developed Flutter screen components driven by WebSocket connections for live price streaming, integrated financial chart libraries, and implemented encrypted 2FA wallet workflows.',
    myRole: 'UI Development + Live WebSocket Feed Integration + Candlestick Chart Implementation + 2FA Withdrawal Flow UI + Team Collaboration.',
    technologies: ['Flutter', 'Firebase', 'WebSockets', 'REST APIs'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Live cryptocurrency price updates streamed via WebSockets',
      'Real-time Profit & Loss (P&L) tracking dashboard',
      'Interactive candlestick charts with time-frame controls',
      'Encrypted crypto wallet management flows',
      'Two-Factor Authentication (2FA) for secure withdrawal verification'
    ],
    filterCategories: ['Flutter', 'FinTech', 'Mobile'],
    confidentialityNotice: 'Production FinTech App — Selected non-sensitive public architecture and UI details shown.',
    featured: true,
    starred: true,
    architectureNotes: 'Flutter UI -> WebSocket Channel Manager -> RxDart / BLoC Stream -> REST API / Firebase Backend',
    challengesSolved: 'Managed persistent WebSocket socket connections with automatic reconnect logic and throttled high-frequency market tick state updates to prevent UI thread lag.'
  },
  {
    id: 'load-tracking-system',
    title: 'Load Tracking System',
    category: 'Logistics / Fleet Management',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Real-time GPS fleet tracking app with live driver telemetry, ETA calculation, and offline SQLite caching.',
    problemStatement: 'Logistics operators needed reliable driver location tracking for heavy freight trucks traveling through remote connectivity dead zones, demanding offline caching and auto-sync.',
    solutionOverview: 'Created an offline-first Flutter application utilizing local SQLite database caching, background location synchronization, Google Maps SDK integration, and automated ETA calculation.',
    myRole: 'UI Development + Google Maps Integration + ETA Calculation Logic + Offline SQLite Caching + Background Sync + Team Collaboration.',
    technologies: ['Flutter', 'Supabase', 'Google Maps API', 'SQLite'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Real-time GPS fleet location monitoring on Google Maps',
      'Live driver status updates (Active, In-Transit, Idle)',
      'Estimated Time of Arrival (ETA) calculation engine',
      'Offline-first SQLite local data caching',
      'Automatic background location sync when connectivity resumes'
    ],
    filterCategories: ['Flutter', 'Logistics', 'Mobile'],
    confidentialityNotice: 'Production Fleet Management System — Focuses on offline-first sync architecture and GIS API integration.',
    featured: true,
    starred: true,
    architectureNotes: 'Flutter UI -> Background Geolocation Service -> SQLite Local Cache -> Sync Repository -> Supabase Backend',
    challengesSolved: 'Implemented background location tracking with battery-conscious geofencing and batch SQLite cache synchronization.'
  },
  {
    id: 'vshowcards',
    title: 'vShowCards',
    category: 'Digital Identity / Business Cards',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Digital business card app featuring dynamic card templates, QR sharing, contact export, and engagement analytics.',
    problemStatement: 'Professionals needed a modern alternative to paper business cards with quick QR code transmission, direct vCard device export, and view analytics.',
    solutionOverview: 'Architected dynamic mobile card rendering UI, embedded QR scanner/generator engines, phonebook contact export modules, and an engagement analytics dashboard in Flutter.',
    myRole: 'UI Development + API Integration + QR Generator Implementation + Dynamic UI Rendering + Team Collaboration.',
    technologies: ['Flutter', 'REST APIs', 'QR Code', 'Dynamic UI'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Dynamic business card template layout customization',
      'Instant QR-code generation and camera scanner',
      'One-tap contact export (vCard format) to phonebook',
      'Analytics dashboard monitoring card views and shares'
    ],
    filterCategories: ['Flutter', 'Enterprise', 'Mobile'],
    featured: true
  },
  {
    id: 'green-treasure',
    title: 'Green Treasure App',
    category: 'Community / Environmental',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Community cleanliness app with geo-tagged issue reporting, photo upload, admin dashboard, and reward gamification.',
    problemStatement: 'Local communities lacked a visual mobile reporting system to log environmental clean-up issues, track resolution status, and reward active civic volunteers.',
    solutionOverview: 'Built a geo-tagged incident reporting mobile application featuring camera capture, geolocation tagging, admin moderation feed, and a gamified reward points engine.',
    myRole: 'UI Development + Firebase API Integration + Geolocation Feature Implementation + Gamification Logic + Team Collaboration.',
    technologies: ['Flutter', 'Firebase', 'Geolocation', 'Gamification'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Geo-tagged environmental issue submission with GPS coordinates',
      'Camera integration & photo upload feed',
      'Admin moderation & status resolution dashboard',
      'Gamified reward points engine for civic contributions'
    ],
    filterCategories: ['Flutter', 'Community', 'Mobile'],
    featured: true
  },
  {
    id: 'kids-learning-app',
    title: 'Kids Learning App',
    category: 'Education / EdTech',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Multilingual educational app with animated lessons, voice narration, quizzes, and parent progress tracking.',
    problemStatement: 'Child learners require engaging interactive visuals, voice narration, and gamified quizzes across multiple regional languages, alongside parent progress tracking.',
    solutionOverview: 'Designed and implemented interactive Flutter UI views featuring animated visual components, synchronized audio narration cues, multi-language translation dictionaries, and parent analytics.',
    myRole: 'UI Development + Firebase Integration + Audio/Voice Sync + Multi-Language Asset Management + Team Collaboration.',
    technologies: ['Flutter', 'Firebase', 'Multi-language', 'Gamification'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Multilingual interactive lesson modules',
      'Animated visual lessons & voice narration audio sync',
      'Interactive quiz gamification engine with star badges',
      'Parent milestone tracking & study summary dashboard'
    ],
    filterCategories: ['Flutter', 'Education', 'Mobile'],
    featured: false
  },
  {
    id: 'ecommerce-app-compact',
    title: 'E-Commerce Application',
    category: 'E-Commerce',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Cross-platform mobile retail store featuring product catalog navigation, cart management, and payment checkout APIs.',
    problemStatement: 'Retail business needed a streamlined mobile storefront for product catalog browsing, cart persistence, and secure payment processing.',
    solutionOverview: 'Built responsive Flutter UI layouts for product listing grids, item detailed view, shopping cart checkout state, and REST API integration.',
    myRole: 'UI Development + REST API Integration + Cart Flow Implementation + Team Collaboration.',
    technologies: ['Flutter', 'REST APIs', 'Payment Gateway'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Product catalog grid with search and category filters',
      'Cart item persistence & price breakdown module',
      'Payment checkout workflow integration'
    ],
    filterCategories: ['Flutter', 'E-Commerce', 'Mobile'],
    featured: false
  },
  {
    id: 'location-service-compact',
    title: 'Location Service Module',
    category: 'Logistics / Utility',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Background geolocation service module providing accurate GPS telemetry tracking and battery-conscious polling.',
    problemStatement: 'Required a lightweight, reusable location tracking engine capable of operating reliably across Android and iOS background states.',
    solutionOverview: 'Engineered a modular Flutter location service utilizing Native Location APIs, coordinate throttling, and periodic server update syncs.',
    myRole: 'Location Service Development + Native API Integration + Testing.',
    technologies: ['Flutter', 'Dart', 'Google Maps API', 'Location SDK'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Background GPS location tracking',
      'Battery-conscious location update intervals',
      'Coordinate polyline rendering & map markers'
    ],
    filterCategories: ['Flutter', 'Logistics', 'Mobile'],
    featured: false
  },
  {
    id: 'punch-in-compact',
    title: 'Punch In Application',
    category: 'Enterprise / HR SaaS',
    statusTag: 'Production Project',
    statusGroup: 'production',
    workType: 'Team Project',
    shortDescription: 'Employee attendance and geofenced shift punch-in app with biometric auth and daily work log dashboards.',
    problemStatement: 'Enterprise needed a fraud-resistant mobile attendance check-in app verifying employee GPS position at verified job site coordinates.',
    solutionOverview: 'Implemented geofenced attendance verification screens, punch-in/out timer states, biometric authentication triggers, and manager attendance report views.',
    myRole: 'UI Development + Geofencing Logic + API Integration + Team Collaboration.',
    technologies: ['Flutter', 'REST APIs', 'Geolocation', 'Biometrics'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Geofenced location-verified shift punch-in/out',
      'Biometric fingerprint/face login trigger',
      'Daily attendance summary & work hours log'
    ],
    filterCategories: ['Flutter', 'Enterprise', 'Mobile'],
    featured: false
  },

  // -------------------------------------------------------------
  // INDEPENDENT PROJECTS (13 - 17)
  // -------------------------------------------------------------
  {
    id: 'home-service-hub',
    title: 'Home Service Hub',
    category: 'Home Services Marketplace',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'Inspired by the home-services marketplace model, connecting customers with local service providers across dual app interfaces.',
    problemStatement: 'Connecting homeowners with vetted skilled service providers requires separate UI experiences for requesting service vs managing provider schedules, with real-time state sync.',
    solutionOverview: 'Independently architected and built dual customer and provider application flows powered by Supabase real-time backend, role-based access control, authentication, and database schemas.',
    myRole: 'My Role: Frontend + Backend + Deployment (Built independently using FlutterFlow + Supabase + AI-assisted development).',
    technologies: ['FlutterFlow', 'Supabase', 'AI-assisted Development', 'REST APIs'],
    platform: ['Android', 'iOS', 'Web'],
    keyFeatures: [
      'Inspired by the home-services marketplace model',
      'Dual customer booking UI & service provider dispatch app',
      'Service catalog with pricing & booking slot selection',
      'Supabase real-time database & row-level security policies',
      'User role management and profile verification workflows',
      'End-to-end full-stack development & cloud deployment'
    ],
    filterCategories: ['Flutter', 'Independent', 'E-Commerce', 'Web', 'Mobile'],
    confidentialityNotice: 'Independent Project — Built end-to-end independently. Inspired by the home-services marketplace model.',
    featured: true,
    starred: true,
    architectureNotes: 'FlutterFlow Client -> Supabase Auth & Realtime Database -> Custom Edge Functions',
    challengesSolved: 'Designed row-level security (RLS) policies in Supabase ensuring service providers can only view relevant customer job requests in their geographic coverage zone.'
  },
  {
    id: 'veggymart',
    title: 'VeggyMart',
    category: 'Grocery / E-Commerce',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'Grocery e-commerce application designed for online vegetable sales, supporting customer shopping and shop-owner stock controls.',
    problemStatement: 'Local grocery merchants require direct inventory management and order fulfillment controls, while customers need convenient product discovery and cart workflows.',
    solutionOverview: 'Independently built a multi-role grocery marketplace app featuring Shop Owner stock management tools and Customer checkout interfaces backed by Supabase schemas.',
    myRole: 'My Role: Frontend + Backend + Deployment (Built independently using FlutterFlow + Supabase + AI-assisted development).',
    technologies: ['FlutterFlow', 'Supabase', 'AI-assisted Development'],
    platform: ['Android', 'iOS', 'Web'],
    keyFeatures: [
      'Dedicated Customer shopping & instant checkout interface',
      'Shop Owner product inventory management & price control dashboard',
      'Role-based workflow authorization (Customer vs Store Admin)',
      'Real-time product stock availability updates',
      'Supabase database integration & authentication setup'
    ],
    filterCategories: ['Flutter', 'Independent', 'E-Commerce', 'Web', 'Mobile'],
    confidentialityNotice: 'Independent Project — Full-stack design, backend database schema, and deployment executed independently.',
    featured: true,
    starred: true,
    architectureNotes: 'FlutterFlow Mobile/Web UI -> Supabase Database & File Storage -> Auth Service',
    challengesSolved: 'Built dynamic pricing calculation modules for weighted produce items with real-time stock updates.'
  },
  {
    id: 'medical-pyq',
    title: 'Medical PYQ',
    category: 'Education / Web',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'Web platform delivering searchable previous-year question papers for academic students, with admin paper upload management.',
    problemStatement: 'Medical and academic students needed organized, stream-filtered access to past examination question papers and solution keys, while admins needed upload tools.',
    solutionOverview: 'Engineered a full-stack Vue.js web platform backed by Node.js REST APIs featuring user authentication, file management, subject filters, and admin moderation.',
    myRole: 'My Role: Frontend + Backend + Deployment (Vue.js frontend + Node.js REST API backend + Database + Cloud Web Hosting).',
    technologies: ['Vue.js', 'Node.js', 'REST APIs', 'PostgreSQL / Database'],
    platform: ['Web'],
    keyFeatures: [
      'Previous-year question paper repository filtered by stream & subject',
      'User authentication & paper bookmarking feed',
      'Admin content management portal for PDF paper uploads',
      'Fast subject search & stream filter controls',
      'Complete web server configuration and production deployment'
    ],
    filterCategories: ['Web', 'Independent', 'Education'],
    confidentialityNotice: 'Independent Web Project — End-to-end full-stack web engineering.',
    featured: true,
    starred: true,
    architectureNotes: 'Vue.js Single Page App -> Node.js Express REST API -> Database Storage',
    challengesSolved: 'Structured efficient indexed database searches to return PDF paper query results instantly across thousands of uploaded records.'
  },
  {
    id: 'medicine-delivery-app',
    title: 'Medicine Delivery Application',
    category: 'Healthcare / Delivery',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'Healthcare delivery application enabling users to upload doctor prescriptions and place online medicine requests.',
    problemStatement: 'Patients seeking home delivery of prescribed medications needed a simple way to upload doctor prescription photos and track pharmacy fulfillment.',
    solutionOverview: 'Built a mobile Flutter app supporting camera prescription capture, prescription review status updates, order tracking, and backend API integration.',
    myRole: 'My Role: Frontend + Backend + Deployment (Independent design, mobile development, backend APIs, and server setup).',
    technologies: ['Flutter', 'Backend APIs', 'Database', 'File Storage'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Doctor prescription photo upload & image compression workflow',
      'Prescription-based medicine request submission',
      'User login authentication & order status delivery timeline',
      'Past medical order history & request status overview'
    ],
    filterCategories: ['Flutter', 'Independent', 'Mobile'],
    confidentialityNotice: 'Independent Project — Focuses on prescription image uploading and order fulfillment UI. Makes no medical claims.',
    featured: true,
    starred: true
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Personal Finance',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'Personal finance tracking application enabling users to log, edit, and categorize daily expenses via an interactive dashboard.',
    problemStatement: 'Users needed an offline-capable, intuitive mobile dashboard to quickly record daily expenditures, edit past transactions, and review spending breakdowns.',
    solutionOverview: 'Independently designed a clean Flutter mobile expense tracker with full CRUD transaction capabilities, custom category tagging, and visual spending breakdown cards.',
    myRole: 'My Role: Independent Development (Designed UI, built Flutter local state management, CRUD logic, and analytics screens).',
    technologies: ['Flutter', 'Dart', 'Local Persistence'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Add, edit, and delete expense records (Full CRUD)',
      'Financial overview dashboard & category pie metrics',
      'Category-based spending classification',
      'Local data persistence for fast offline access'
    ],
    filterCategories: ['Flutter', 'Independent', 'FinTech', 'Mobile'],
    featured: false
  },

  // -------------------------------------------------------------
  // UI / PROTOTYPE PROJECTS (18 - 20)
  // -------------------------------------------------------------
  {
    id: 'de-way-does',
    title: 'De Way Does',
    category: 'Interactive / Educational UI',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'Team Project / UI Prototype',
    shortDescription: 'Interactive cartoon-style UI mock-up created for client concept presentation focused on children\'s content.',
    problemStatement: 'Client requested an engaging visual presentation prototype to pitch a child-oriented educational app concept.',
    solutionOverview: 'Designed colorful, cartoon-themed Flutter UI screens and interactive multi-screen navigation flows tailored for client concept evaluation.',
    myRole: 'My Role: UI / Prototype (Created interactive visual layouts and presentation flows; no live production backend).',
    technologies: ['Flutter', 'Dart', 'Custom Animation'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Cartoon-oriented visual design system & color palette',
      'Interactive multi-screen prototype navigation',
      'Client pitch presentation mock-up showcase'
    ],
    filterCategories: ['Flutter', 'Prototype', 'Mobile'],
    confidentialityNotice: 'UI & Prototype Showcase — Created exclusively as a visual concept prototype.',
    featured: false
  },
  {
    id: 'photos-app',
    title: 'Photos Application',
    category: 'Photo / Media UI',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'Team Project / UI Prototype',
    shortDescription: 'Photo browsing UI mock-up demonstrating high-resolution grid discovery, fullscreen preview, and layout exploration.',
    problemStatement: 'UI exploration prototype designed to demonstrate fluid photo gallery grid transitions and media detail overlays.',
    solutionOverview: 'Implemented a clean Flutter media browsing layout with category filters, image preview modal overlays, and download button mock-ups.',
    myRole: 'My Role: UI / Prototype (Designed UI screens and component layouts; UI-only prototype).',
    technologies: ['Flutter', 'Dart', 'UI Component Layout'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Category-based image grid discovery layout',
      'Interactive photo viewer preview overlay',
      'Photo download interface mock-up'
    ],
    filterCategories: ['Flutter', 'Prototype', 'Mobile'],
    confidentialityNotice: 'UI & Prototype Showcase — Demonstrates layout design and mobile presentation patterns.',
    featured: false
  },
  {
    id: 'future-imosys',
    title: 'Future Imosys',
    category: 'FinTech UI',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'Team Project / UI Prototype',
    shortDescription: 'FinTech mobile UI prototype created to explore modern financial dashboard aesthetics and menu components.',
    problemStatement: 'Exploratory concept prototype created to evaluate modern financial dashboard card layouts and navigation patterns.',
    solutionOverview: 'Designed and prototyped modern FinTech dashboard cards, transaction history rows, and interactive menu components in Flutter.',
    myRole: 'My Role: UI / Prototype (Designed financial UI screens and interactive navigation prototype).',
    technologies: ['Flutter', 'Dart', 'Prototyping'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'FinTech dashboard visual card layout',
      'Interactive multi-screen prototype navigation',
      'Modern financial component exploration'
    ],
    filterCategories: ['Flutter', 'FinTech', 'Prototype', 'Mobile'],
    confidentialityNotice: 'UI & Prototype Showcase — Visual layout concept only.',
    featured: false
  }
];
