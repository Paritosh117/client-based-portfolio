export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'flutter-mobile',
    title: 'Flutter Mobile App Development',
    shortDescription: 'High-performance cross-platform Android & iOS applications built with clean architecture, responsive UIs, and state management.',
    iconName: 'Smartphone',
    deliverables: [
      'Native-feel Android & iOS builds',
      'BLoC / Provider / Riverpod state architecture',
      'Offline-first local caching (SQLite/Hive)',
      'Play Store & App Store deployment setup'
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Application Development',
    shortDescription: 'Complete end-to-end applications linking modern responsive frontends with secure backend infrastructure and databases.',
    iconName: 'Layers',
    deliverables: [
      'Vue.js & Next.js frontend modules',
      'Supabase & Firebase serverless integration',
      'Role-based access & authentication systems',
      'Database schema & row-level security design'
    ]
  },
  {
    id: 'backend-api',
    title: 'Backend & REST API Development',
    shortDescription: 'Scalable backend service modules, API routing endpoints, and database models using Python, Django, and Django REST Framework.',
    iconName: 'Server',
    deliverables: [
      'Django & DRF web services',
      'JWT and OAuth authentication security',
      'PostgreSQL data model design',
      'Third-party API & webhook integrations'
    ]
  },
  {
    id: 'business-apps',
    title: 'Business & Field Service Applications',
    shortDescription: 'Custom operational software tailored around real-world business workflows, field technicians, and enterprise management.',
    iconName: 'Briefcase',
    deliverables: [
      'Technician & employee workflow management',
      'Task management & milestone tracking boards',
      'Location-based attendance & time logging',
      'Role-tailored employee & admin portals'
    ]
  },
  {
    id: 'ecommerce-apps',
    title: 'E-Commerce & Marketplace Platforms',
    shortDescription: 'Customer-facing mobile shopping apps and vendor portals with product catalogs, multi-item carts, and real-time status tracking.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Dynamic product catalogs with search filtering',
      'Multi-item cart & order management systems',
      'Multi-role vendor & customer experience',
      'Payment gateway checkout workflows'
    ]
  },
  {
    id: 'realtime-apps',
    title: 'Real-Time & Geolocation Systems',
    shortDescription: 'Location-aware mobile systems, GPS fleet tracking, WebSockets telemetry, and live status synchronization.',
    iconName: 'Radio',
    deliverables: [
      'GPS location tracking & Google Maps SDK',
      'Live driver ETA & status indicators',
      'WebSocket sub-second data streaming',
      'Background location & sync services'
    ]
  },
  {
    id: 'ai-powered',
    title: 'AI-Assisted App Development',
    shortDescription: 'Accelerated prototyping and feature integration using AI tools and RESTful AI API models where appropriate.',
    iconName: 'Sparkles',
    deliverables: [
      'Rapid prototype development with FlutterFlow',
      'AI model REST API endpoint integration',
      'Automated data transformation pipelines',
      'Fast design-to-code sprint handoffs'
    ]
  },
  {
    id: 'app-maintenance',
    title: 'Application Maintenance & Optimization',
    shortDescription: 'Ongoing code maintenance, performance profiling with Dart DevTools, bug resolution, and API updates.',
    iconName: 'Wrench',
    deliverables: [
      'UI responsiveness & devtools performance tuning',
      'Third-party API updates & bug fixes',
      'Cross-platform OS version updates',
      'Feature additions & codebase refactoring'
    ]
  }
];
