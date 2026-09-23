export interface Project {
  id: string;
  title: string;
  category: string;
  statusTag: 'Professional Project' | 'Independent Project' | 'UI / Prototype';
  statusGroup: 'production' | 'independent' | 'prototype';
  workType: 'Engineering Team Experience' | 'Independently Developed' | 'UI Prototyping';
  shortDescription: string;
  problemStatement: string;
  solutionOverview: string;
  myRole: string;
  myContribution: string;
  technologies: string[];
  platform: string[];
  keyFeatures: string[];
  filterCategories: string[];
  professionalDisclaimer?: string;
  confidentialityNotice?: string;
  featured: boolean;
  starred?: boolean;
  architectureNotes?: string;
  challengesSolved?: string;
  caseStudyContent?: {
    overview: string;
    problem: string;
    goal: string;
    solution: string;
    myRoleDetailed: string;
    keyFeaturesList: string[];
    architectureDetails: string;
    techStackDetails: string[];
    challengesFaced: string;
    myImplementation: string;
    genuineImpact: string;
    technicalHighlights: string[];
  };
}

export const PROJECTS: Project[] = [
  // 1. BHARAT AGRIMARTS (Prioritized #1)
  {
    id: 'bharat-agrimarts',
    title: 'Bharat Agrimarts',
    category: 'Agritech / E-Commerce',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'An agritech e-commerce platform helping farmers browse, order, and track agricultural equipment, seeds, and heavy machinery.',
    problemStatement: 'Farmers required an accessible mobile marketplace to evaluate, order, and track delivery of agricultural supplies, seeds, harvesters, and tractors (new and used).',
    solutionOverview: 'Engineered a robust Flutter mobile platform featuring dynamic catalog filtering, multi-item cart management, order status tracking, BLoC state management, and REST API integration.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Flutter Mobile UI development, BLoC state architecture, multi-item cart management, product filter search, and REST API integration.',
    technologies: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Supabase', 'Razorpay'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Agricultural product catalog (Seeds, Harvesters, Tractors, Used Machinery)',
      'Multi-parameter filter search & category navigation',
      'Multi-item cart management system',
      'Order status tracking and history overview',
      'BLoC-driven dynamic state management',
      'Secure user authentication & API integration'
    ],
    filterCategories: ['Flutter', 'Mobile', 'E-Commerce'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    starred: true,
    caseStudyContent: {
      overview: 'Bharat Agrimarts is a specialized agricultural e-commerce platform designed to connect farmers directly with agricultural products, equipment, seeds, and machinery listings.',
      problem: 'Rural agricultural buyers needed an intuitive mobile interface with offline resilience and clean category navigation to browse heavy machinery and seasonal inputs.',
      goal: 'Deliver a high-performance cross-platform mobile application with fast catalog loading, intuitive cart workflows, and reliable state management.',
      solution: 'Constructed responsive Flutter screen layouts managed by BLoC state management, connected to backend REST APIs for real-time inventory filtering.',
      myRoleDetailed: 'As a Flutter Developer on the team, I was responsible for designing and implementing application screens, constructing the cart management workflows, building BLoC state handlers, and integrating backend APIs.',
      keyFeaturesList: [
        'Comprehensive product catalog with categorized browsing',
        'Advanced search & machinery filter tools',
        'Multi-item cart & checkout workflow',
        'Real-time order tracking status',
        'BLoC state architecture for clean UI/logic separation'
      ],
      architectureDetails: 'Flutter Presentation Layer -> BLoC State Handlers -> REST API Repository Layer -> Backend Databases',
      techStackDetails: ['Flutter', 'Dart', 'BLoC Pattern', 'REST APIs', 'Supabase', 'Razorpay'],
      challengesFaced: 'Handling complex nested filtering for machinery specs while maintaining smooth 60fps scrolling performance on lower-spec mobile devices.',
      myImplementation: 'Optimized Flutter list rendering with lazy loading and decoupled state handlers using BLoC event streams.',
      genuineImpact: 'Streamlined agricultural product browsing and simplified order workflows for users.',
      technicalHighlights: [
        'Clean MVVM / BLoC separation',
        'Optimized list view memory consumption',
        'Reusable custom Flutter UI component library'
      ]
    }
  },

  // 2. SAMUH PLAY / PLATFORM (Prioritized #2)
  {
    id: 'samuh-ott',
    title: 'Samuh Play',
    category: 'OTT / Entertainment',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'Bhutan\'s premier OTT video streaming platform, delivering adaptive bitrate playback across Android mobile and Smart TVs.',
    problemStatement: 'Creating Bhutan\'s first dedicated digital OTT platform capable of serving seamless adaptive video streams across mobile devices and Smart TV environments.',
    solutionOverview: 'Architected and built adaptive video playback, multi-profile user switching, Razorpay subscription billing, and JWT authentication for mobile and TV remote interfaces.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Built media playback integration, multi-profile account management, Razorpay subscription billing workflows, JWT authentication, and Smart TV remote navigation.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Video Streaming', 'Firebase', 'Razorpay', 'JWT Auth'],
    platform: ['Android', 'Smart TV'],
    keyFeatures: [
      'Adaptive bitrate video streaming engine (HLS)',
      'Multi-profile user account management & switching',
      'Razorpay subscription billing & recurring payment flows',
      'JWT-backed secure authentication',
      'Smart TV specialized D-pad remote navigation UX',
      'Media discovery catalog and video player controls'
    ],
    filterCategories: ['Flutter', 'OTT', 'Mobile', 'Smart TV'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    starred: true,
    caseStudyContent: {
      overview: 'Samuh Play is the first OTT video streaming service dedicated to Bhutanese entertainment, offering movies, series, and cultural programs across mobile and TV platforms.',
      problem: 'Delivering smooth video streaming with localized subscription billing across diverse screen sizes and TV remote controllers.',
      goal: 'Build a high-performance cross-platform Flutter streaming app supporting both touchscreens and D-pad TV remotes.',
      solution: 'Engineered a unified Flutter app with adaptive bitrate media player integration, custom D-pad focus node navigation, and Razorpay billing.',
      myRoleDetailed: 'Contributed to application screen design, video player integration, multi-profile account handling, subscription billing flows, and Smart TV remote UX.',
      keyFeaturesList: [
        'Adaptive video playback with quality switching',
        'Multi-profile management per subscriber account',
        'Razorpay payment gateway & subscription plans',
        'Smart TV D-pad remote control focus handling',
        'JWT session authentication'
      ],
      architectureDetails: 'Flutter Client -> Video Player Plugin -> HLS Streaming Server & Firebase -> Razorpay Subscriptions',
      techStackDetails: ['Flutter', 'Dart', 'REST APIs', 'HLS Video Streaming', 'Firebase', 'Razorpay', 'JWT Auth'],
      challengesFaced: 'Managing focus node states on Smart TV interfaces to ensure smooth remote controller navigation across media carousels.',
      myImplementation: 'Implemented a custom focus hierarchy system for Smart TV remotes, guaranteeing predictable directional navigation.',
      genuineImpact: 'Delivered a seamless digital streaming platform serving content to Bhutanese audiences worldwide.',
      technicalHighlights: [
        'D-pad TV remote focus handling',
        'Adaptive bitrate video player integration',
        'Multi-profile state switching'
      ]
    }
  },

  // 3. UNIVERSITY LEAD MANAGEMENT CRM (Prioritized #3)
  {
    id: 'university-crm',
    title: 'University Lead Management CRM',
    category: 'Enterprise SaaS / Education',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A comprehensive lead-management platform for university admissions, supporting lead routing, counselor workflows, and role-based access.',
    problemStatement: 'Higher education institutions needed a centralized platform to manage incoming student leads, route applications to counselors and agents, and generate real-time analytics.',
    solutionOverview: 'Developed responsive Vue.js frontend interfaces and integrated Django REST Framework (DRF) backend APIs with PostgreSQL to automate lead distribution and role-based tracking.',
    myRole: 'Frontend & Backend Developer (Engineering Team)',
    myContribution: 'Built reusable Vue.js components, implemented CRUD modules, contributed to Django REST APIs for lead/agent assignment, and implemented role-based access control (Admin, Counselor, Agent).',
    technologies: ['Vue.js', 'Django', 'DRF', 'PostgreSQL', 'REST APIs', 'JavaScript', 'Python'],
    platform: ['Web'],
    keyFeatures: [
      'Lead assignment workflows routing prospective students to counselors',
      'Agent-to-university routing and onboarding management',
      'Real-time dashboards for Customer, Lead, Employee, and Task tracking',
      'Project management and automated reporting modules',
      'Role-based access control (Admin, Counselor, Agent)',
      'PostgreSQL-backed CRUD modules and secure DRF endpoints'
    ],
    filterCategories: ['Web', 'Enterprise', 'Django', 'Vue.js'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    starred: true,
    caseStudyContent: {
      overview: 'An enterprise admission management CRM enabling universities to manage their recruitment pipelines, assign incoming student leads, and monitor staff performance.',
      problem: 'Manual lead distribution resulted in delayed student follow-ups and fragmented communication between university admissions officers and external recruitment agents.',
      goal: 'Build an automated lead management SaaS platform with role-based permissions, counselor task boards, and real-time report generation.',
      solution: 'Developed a responsive Vue.js web client backed by Django REST Framework APIs and PostgreSQL database models.',
      myRoleDetailed: 'Contributed to both the Vue.js frontend and Django backend: constructed responsive UI components, created REST API endpoints for lead distribution, and built role-based authorization rules.',
      keyFeaturesList: [
        'Automated lead routing engine',
        'Multi-role access (Admin, Counselor, Agent)',
        'Student application pipeline tracking',
        'Custom task & employee management dashboards',
        'PostgreSQL reporting analytics'
      ],
      architectureDetails: 'Vue.js Single Page Application -> Django REST Framework APIs -> PostgreSQL Relational Database',
      techStackDetails: ['Vue.js', 'Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs', 'HTML5/CSS3'],
      challengesFaced: 'Designing granular permission checks across multiple user roles while maintaining clean, reusable Vue.js component trees.',
      myImplementation: 'Created centralized Vuex/state stores and Django permission classes to enforce strict role-based access control.',
      genuineImpact: 'Accelerated university student onboarding and streamlined admission workflows.',
      technicalHighlights: [
        'Clean Vue.js component architecture',
        'Django REST Framework serialization & views',
        'Role-Based Access Control (RBAC)'
      ]
    }
  },

  // 4. PROJECT MANAGEMENT DASHBOARD (Prioritized #4)
  {
    id: 'project-management-dashboard',
    title: 'Project Management Dashboard (PMD)',
    category: 'Enterprise / Field Service Management',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'An enterprise field-service application supporting technicians with site installation workflows, equipment tracking, and daily time logs.',
    problemStatement: 'Field technicians installing security cameras and heavy equipment needed a reliable mobile tool to manage site milestones, log work hours, inspect camera rotations, and sync real-time site data.',
    solutionOverview: 'Constructed an enterprise Flutter application connected to Supabase real-time database and Django REST APIs featuring task boards, milestone tracking, and camera installation logs.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Designed and implemented application screens, workflow management modules, camera location & rotation UI, equipment logs, and API/backend integration.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'Django', 'REST APIs', 'Location Services'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Technician installation workflows and site management',
      'Camera location mapping and rotation configuration logs',
      'Equipment management and inventory tracking',
      'Daily technician time logging and attendance tracking',
      'Task boards and milestone progress tracking',
      'Supabase & Django-backed real-time workflow modules'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Enterprise'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    starred: true,
    caseStudyContent: {
      overview: 'PMD is a specialized field-service workforce application built to empower field technicians managing camera installations, equipment tracking, and daily project milestones.',
      problem: 'Technicians operating on job sites needed a structured mobile application to log work hours, record camera setup specs, and update site project boards in real-time.',
      goal: 'Deliver a robust mobile workflow app that syncs site installation data reliably between technicians and project managers.',
      solution: 'Built interactive Flutter UI components integrated with Supabase real-time database and Django REST Framework backends.',
      myRoleDetailed: 'Developed application screens and workflow modules, built equipment tracking interfaces, implemented camera rotation layout views, and integrated backend APIs.',
      keyFeaturesList: [
        'Site milestone boards & technician task tracking',
        'Camera rotation layout & installation logging',
        'Daily time logging and shift tracking',
        'Equipment inventory management',
        'Real-time Supabase sync & Django backend API integration'
      ],
      architectureDetails: 'Flutter Mobile App -> Supabase Realtime DB & Django REST Framework -> PostgreSQL Database',
      techStackDetails: ['Flutter', 'Dart', 'Supabase', 'Django REST Framework', 'Location Services'],
      challengesFaced: 'Rendering dynamic site layout diagrams and equipment logs on varied mobile screen aspect ratios.',
      myImplementation: 'Designed flexible custom Flutter widgets that dynamically adapt to screen dimensions while preserving layout clarity.',
      genuineImpact: 'Improved field installation logging efficiency and site tracking accuracy.',
      technicalHighlights: [
        'Dynamic layout math & responsive custom widgets',
        'Real-time Supabase database sync',
        'Field technician workflow specialization'
      ]
    }
  },

  // 5. VSHOWCARDS (Prioritized #5)
  {
    id: 'vshowcards',
    title: 'vShowCards',
    category: 'Digital Identity / Business Cards',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A digital business card platform with dynamic template customization, QR-code instant sharing, and contact engagement tracking.',
    problemStatement: 'Actors, directors, and casting professionals needed a seamless digital medium to share interactive profile cards via QR code and track engagement metrics.',
    solutionOverview: 'Designed and implemented dynamic template selection, QR code generation/scanning workflows, direct contact export, and an engagement analytics dashboard in Flutter.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Designed application screens, implemented UI flows, integrated REST APIs, developed dynamic template engine, QR code generation, and analytics views.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'QR Code', 'Dynamic UI'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Dynamic digital card template selection engine',
      'Instant QR-code generation and camera scanning',
      'One-tap contact export to device phonebook (.vcf)',
      'Analytics dashboard tracking card views and engagement',
      'Custom branding & media profile links'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Enterprise'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    caseStudyContent: {
      overview: 'vShowCards is a digital card app connecting talent, casting teams, and directors through dynamic visual profiles shared instantly via QR code.',
      problem: 'Traditional paper cards are easily lost, while digital portfolio links are cumbersome to type out during networking events.',
      goal: 'Create an instant QR-code digital card sharing app with contact export and analytics tracking.',
      solution: 'Engineered a dynamic Flutter card generation engine with built-in QR code sharing and contact file export.',
      myRoleDetailed: 'Designed application screens, built dynamic UI card rendering flows, integrated REST APIs, and created engagement analytics dashboards.',
      keyFeaturesList: [
        'Dynamic template customization engine',
        'QR code generator and built-in scanner',
        'One-tap device contact export',
        'Engagement analytics tracking'
      ],
      architectureDetails: 'Flutter App -> Dynamic UI Templates -> QR Code Engine -> REST API Backend',
      techStackDetails: ['Flutter', 'Dart', 'REST APIs', 'QR Code SDK', 'Analytics Dashboard'],
      challengesFaced: 'Ensuring rendered dynamic templates scale cleanly across small and large smartphone display viewports.',
      myImplementation: 'Built a modular template renderer using custom layout constraints.',
      genuineImpact: 'Accelerated talent contact sharing and casting interaction workflows.',
      technicalHighlights: [
        'Dynamic UI template rendering',
        'QR code generation & scanning',
        'Device contact export integration'
      ]
    }
  },

  // 6. LOAD TRACKING SYSTEM (Prioritized #6)
  {
    id: 'load-tracking-system',
    title: 'Load Tracking System',
    category: 'Logistics / Fleet Management',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A real-time GPS fleet tracking application designed to monitor driver location, ETA calculations, and offline-first SQLite synchronization.',
    problemStatement: 'Logistics operators required reliable GPS fleet tracking for drivers in regions with intermittent network connectivity, needing background syncing and local caching.',
    solutionOverview: 'Developed an offline-first Flutter logistics app featuring SQLite caching, background location synchronization, Google Maps SDK integration, and real-time ETA calculation.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Built GPS location tracking UI, Google Maps API integration, live driver status views, ETA calculation modules, and offline SQLite caching.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'Google Maps API', 'SQLite', 'Location Services'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Real-time GPS fleet location monitoring',
      'Live driver status & duty state indicators',
      'ETA calculation engine based on route telemetry',
      'Google Maps SDK integration with custom route poly-lines',
      'Offline-first SQLite caching with background API sync'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Logistics'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: true,
    caseStudyContent: {
      overview: 'Real-time GPS fleet logistics application built for driver tracking, route monitoring, and reliable telemetry caching.',
      problem: 'Network drops in remote transport corridors resulted in lost location telemetry and inaccurate delivery ETAs.',
      goal: 'Develop an offline-first mobile app that records GPS location telemetry locally in SQLite and syncs in background upon connection restoration.',
      solution: 'Constructed an offline-first Flutter application utilizing SQLite local storage and background location services.',
      myRoleDetailed: 'Implemented GPS tracking logic, integrated Google Maps SDK, built status management screens, and developed SQLite offline caching.',
      keyFeaturesList: [
        'GPS telemetry recording & map visualization',
        'Offline SQLite caching engine',
        'Background sync when connection restores',
        'ETA estimation algorithms'
      ],
      architectureDetails: 'Flutter App -> SQLite Local Cache -> Background Sync Worker -> Google Maps API & Supabase',
      techStackDetails: ['Flutter', 'Dart', 'SQLite', 'Google Maps SDK', 'Supabase', 'Background Location'],
      challengesFaced: 'Managing battery consumption during continuous background GPS location polling.',
      myImplementation: 'Implemented adaptive GPS sampling intervals based on vehicle motion state to conserve battery.',
      genuineImpact: 'Ensured 100% location telemetry retention during cellular outages.',
      technicalHighlights: [
        'Offline-first SQLite database architecture',
        'Google Maps SDK route rendering',
        'Adaptive background location tracking'
      ]
    }
  },

  // 7. FUTURE CRYPTO TRADING APP
  {
    id: 'crypto-trading-app',
    title: 'Future — Crypto Trading App',
    category: 'FinTech',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A fintech application built around real-time cryptocurrency feeds, trading-related workflows, candlestick charts, and 2FA wallet flows.',
    problemStatement: 'Fintech users needed sub-second price stream rendering, dynamic candlestick charts, and secure 2FA withdrawal security UI.',
    solutionOverview: 'Built dynamic Flutter interface modules utilizing WebSockets for live crypto price streams, real-time P&L analytics, candlestick chart integration, and encrypted 2FA security flows.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'UI implementation, WebSocket integration for live price feeds, candlestick chart setup, P&L dashboard visuals, and 2FA withdrawal security UI.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'WebSockets', 'REST APIs'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Live crypto price streams via WebSockets',
      'Real-time Profit & Loss (P&L) dashboard analytics',
      'Interactive candlestick charts and market order indicators',
      'Encrypted wallet flows',
      'Two-Factor Authentication (2FA) for secure withdrawals'
    ],
    filterCategories: ['Flutter', 'Mobile', 'FinTech'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: false
  },

  // 8. GREEN TREASURE APP
  {
    id: 'green-treasure',
    title: 'Green Treasure App',
    category: 'Environmental / Community',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A community cleanliness application enabling users to report waste accumulation with geotags and photos, featuring gamified reward points.',
    problemStatement: 'Citizens lacked a simple tool to report urban waste hotspots with visual proof, while community admins needed location-verified issue reporting.',
    solutionOverview: 'Created a geo-tagged issue reporting app with photo upload, map discovery feeds, admin verification dashboards, and a gamification engine.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Designed application screens, implemented UI flows, integrated geolocation and Firebase APIs, and built gamification reward logic.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'Gamification'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Geo-tagged environmental issue reporting',
      'Photo upload & visual discovery feed',
      'Admin moderation dashboard',
      'Reward-points gamification engine'
    ],
    filterCategories: ['Flutter', 'Mobile'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: false
  },

  // 9. KIDS LEARNING APP
  {
    id: 'kids-learning-app',
    title: 'Kids Learning App',
    category: 'Education / EdTech',
    statusTag: 'Professional Project',
    statusGroup: 'production',
    workType: 'Engineering Team Experience',
    shortDescription: 'A multilingual educational application featuring animated lessons, voice narration, quiz games, and parent milestone tracking.',
    problemStatement: 'Young learners require multi-sensory interactive interfaces with voice cues, while parents need milestone progress analytics.',
    solutionOverview: 'Built a multilingual mobile edtech app with animated story lessons, voice audio cues, quiz gamification, and a parent tracking dashboard.',
    myRole: 'Flutter Developer (Engineering Team)',
    myContribution: 'Designed and implemented screens, developed interactive UI flows, integrated Firebase APIs, and built multi-language asset support.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Multi-language', 'Gamification'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Multilingual interactive lesson modules',
      'Animated visual elements & voice narration',
      'Interactive quiz gamification engine',
      'Parent milestone tracking dashboard'
    ],
    filterCategories: ['Flutter', 'Mobile'],
    professionalDisclaimer: 'Professional Project — Developed as part of my engineering experience.',
    featured: false
  },

  // 10. HOME SERVICE HUB ⭐ (Independent Project)
  {
    id: 'home-service-hub',
    title: 'Home Service Hub',
    category: 'Home Services Marketplace',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'A home-services marketplace application inspired by the service marketplace model, connecting customers with service providers.',
    problemStatement: 'Building separate customer request and provider scheduling workflows with real-time backend synchronization.',
    solutionOverview: 'Independently built dual application flows (Customer and Service Provider interfaces) powered by Supabase backend, handling bookings and user roles.',
    myRole: 'Sole Full-Stack Developer: Frontend UI, Supabase backend database, authentication, user roles, and independent deployment.',
    myContribution: 'Designed and developed application UI, customer/provider flows, navigation, Supabase backend integration, database operations, and deployment.',
    technologies: ['FlutterFlow', 'Supabase', 'AI-assisted Development'],
    platform: ['Android', 'iOS', 'Web'],
    keyFeatures: [
      'Dual customer and service provider app experiences',
      'Service discovery and categorized booking workflows',
      'Supabase real-time database & row-level security',
      'User role management and profile handling',
      'Independent full-stack deployment'
    ],
    filterCategories: ['Mobile', 'Web', 'Independent', 'E-Commerce'],
    featured: true,
    starred: true
  },

  // 11. VEGGYMART ⭐ (Independent Project)
  {
    id: 'veggymart',
    title: 'VeggyMart',
    category: 'Grocery / E-Commerce',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'A grocery e-commerce application designed for online vegetable sales, supporting customer and shop-owner roles.',
    problemStatement: 'Sellers need direct stock management tools while customers require fast vegetable selection and checkout flows.',
    solutionOverview: 'Independently created a multi-role grocery marketplace with dedicated Shop Owner inventory dashboards and Customer shopping flows backed by Supabase.',
    myRole: 'Sole Full-Stack Developer: Frontend design & dev, backend Supabase schema design, user authentication, and full-stack ownership.',
    myContribution: 'Designed customer & shop-owner interfaces, application flows, Supabase integration, database operations, and deployment.',
    technologies: ['FlutterFlow', 'Supabase', 'AI-assisted Development'],
    platform: ['Android', 'iOS', 'Web'],
    keyFeatures: [
      'Dedicated Customer shopping & checkout interface',
      'Shop Owner product catalog & stock management dashboard',
      'Role-based workflow authorization',
      'Online product listings with real-time updates',
      'Supabase backend integration'
    ],
    filterCategories: ['Mobile', 'Web', 'Independent', 'E-Commerce'],
    featured: true,
    starred: true
  },

  // 12. MEDICAL PYQ ⭐ (Independent Project)
  {
    id: 'medical-pyq',
    title: 'Medical PYQ',
    category: 'Education / Web Platform',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'A web platform providing previous-year question papers for academic students, featuring separate admin and user panels.',
    problemStatement: 'Students need organized, searchable study materials and exam papers, while administrators require a content management portal.',
    solutionOverview: 'Developed a full-stack web platform with Vue.js frontend and Node.js REST API backend, featuring authentication, paper management, and admin workflows.',
    myRole: 'Sole Full-Stack Developer: Designed user and admin web interfaces (Vue.js), built Node.js REST API backend, authentication, and server deployment.',
    myContribution: 'Frontend design (Vue.js), backend REST API development (Node.js), user authentication, admin content management, and web deployment.',
    technologies: ['Vue.js', 'Node.js', 'Database', 'REST APIs'],
    platform: ['Web'],
    keyFeatures: [
      'Previous-year question paper repository by stream',
      'User authentication and personalized bookmarking',
      'Admin content management panel for paper uploads',
      'Structured search & stream filters',
      'End-to-end web deployment'
    ],
    filterCategories: ['Web', 'Vue.js', 'Independent'],
    featured: true,
    starred: true
  },

  // 13. MEDICINE DELIVERY APP ⭐ (Independent Project)
  {
    id: 'medicine-delivery-app',
    title: 'Medicine Delivery Application',
    category: 'Healthcare / Delivery',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'A healthcare delivery application enabling users to upload doctor prescriptions and submit online medicine delivery requests.',
    problemStatement: 'Patients facing mobility constraints need a simple tool to submit prescription photos to pharmacies for home delivery.',
    solutionOverview: 'Built a Flutter application supporting photo prescription uploads, prescription verification status, order tracking, and backend API integration.',
    myRole: 'Sole Full-Stack Developer: Designed UI screens, implemented prescription upload flows, backend API integration, and deployment.',
    myContribution: 'Designed UI screens, user flows, prescription photo upload functionality, backend API integration, database handling, and deployment.',
    technologies: ['Flutter', 'Dart', 'Backend APIs', 'Database'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Doctor prescription photo upload workflow',
      'Prescription-based order submission system',
      'User authentication & delivery tracking',
      'Healthcare request history overview'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Independent'],
    featured: true
  },

  // 14. EXPENSE TRACKER (Independent Project)
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Personal Finance',
    statusTag: 'Independent Project',
    statusGroup: 'independent',
    workType: 'Independently Developed',
    shortDescription: 'An expense tracking application designed to help users manage and monitor daily expenses through an interactive dashboard.',
    problemStatement: 'Users require a lightweight mobile dashboard to log daily spending, edit records, and view category breakdowns.',
    solutionOverview: 'Engineered a Flutter financial manager featuring complete CRUD expense operations, category tagging, and visual spending overviews.',
    myRole: 'Sole Developer: Designed UI and built interactive expense management functionality independently.',
    myContribution: 'UI design, expense CRUD operations, local state management, and spending analytics dashboard.',
    technologies: ['Flutter', 'Dart'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Add, edit, and delete expense records',
      'Financial dashboard & expense overview',
      'Category-based spending classification',
      'Interactive UI and local data persistence'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Independent'],
    featured: false
  },

  // 15. DE WAY DOES (UI / Prototype)
  {
    id: 'de-way-does',
    title: 'De Way Does',
    category: 'Interactive / Educational UI',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'UI Prototyping',
    shortDescription: 'An interactive cartoon-style UI mock-up created for client presentation, focusing on children\'s content.',
    problemStatement: 'Client needed an engaging visual presentation prototype to pitch a child-oriented educational app concept.',
    solutionOverview: 'Created vibrant cartoon-themed Flutter UI components and animated multi-screen navigation flows tailored for client presentation.',
    myRole: 'UI Designer & Flutter Prototype Developer: Built interactive visual screens and presentation flows.',
    myContribution: 'Designed and implemented UI screens, created interactive screen flows, colorful UI implementation for client mock-up presentation.',
    technologies: ['Flutter', 'Dart', 'Custom UI Animation'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Cartoon-oriented visual design system',
      'Interactive screen navigation flows',
      'Client presentation mock-up showcase'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Prototype'],
    featured: false
  },

  // 16. PHOTOS APPLICATION (UI / Prototype)
  {
    id: 'photos-app',
    title: 'Photos Application',
    category: 'Photo / Media',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'UI Prototyping',
    shortDescription: 'A photo browsing UI mock-up presenting media discovery, category navigation, and photo download interfaces.',
    problemStatement: 'UI exploration mock-up designed to demonstrate fluid photo gallery interactions and download UI layouts.',
    solutionOverview: 'Implemented a clean Flutter media browsing layout with category filters, full-screen image preview overlays, and download controls.',
    myRole: 'UI Designer & Flutter Prototype Developer (UI-only mock-up).',
    myContribution: 'Designed complete UI screens, category navigation, and interactive presentation flows (UI-only mock-up without backend).',
    technologies: ['Flutter', 'Dart', 'UI Design'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'Category-based image grid discovery',
      'Interactive photo viewer overlay',
      'Photo download interface mock-up'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Prototype'],
    featured: false
  },

  // 17. FUTURE IMOSYS (UI / Prototype)
  {
    id: 'future-imosys',
    title: 'Future Imosys',
    category: 'FinTech UI',
    statusTag: 'UI / Prototype',
    statusGroup: 'prototype',
    workType: 'UI Prototyping',
    shortDescription: 'A FinTech mobile interactive UI prototype created to explore modern financial application layouts.',
    problemStatement: 'Exploratory prototype created to evaluate modern financial dashboard aesthetics and interactive navigation patterns.',
    solutionOverview: 'Designed and prototyped modern FinTech dashboard concepts, transaction history layouts, and interactive menu components in Flutter.',
    myRole: 'UI Designer & Flutter Prototype Developer.',
    myContribution: 'Designed multiple UI screens, implemented interactive UI components, and explored new UI patterns for client presentation.',
    technologies: ['Flutter', 'Dart', 'Prototyping'],
    platform: ['Android', 'iOS'],
    keyFeatures: [
      'FinTech dashboard visual layout',
      'Interactive multi-screen prototype navigation',
      'Modern financial component exploration'
    ],
    filterCategories: ['Flutter', 'Mobile', 'Prototype'],
    featured: false
  }
];
