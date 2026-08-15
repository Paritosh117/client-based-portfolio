export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand the core business problem, target end-users, feature requirements, and technical scope.',
    details: [
      'Define clear business objectives & user journeys',
      'Identify target platforms (Android, iOS, Web, Smart TV)',
      'Analyze third-party integrations and backend needs'
    ]
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Define technical architecture, state management patterns, API contracts, and database schema.',
    details: [
      'Choose state management (BLoC, Provider, Supabase, DRF)',
      'Structure offline caching strategy & real-time sync needs',
      'Draft responsive UI layouts & component component specifications'
    ]
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'Build pixel-perfect Flutter UIs, Vue.js modules, backend APIs, and database structures in disciplined sprints.',
    details: [
      'Construct modular, reusable component libraries',
      'Integrate Django REST Framework APIs or Supabase DBs',
      'Implement BLoC patterns, WebSockets, or Maps services'
    ]
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Validate application workflows, user interface responsiveness, API payload data, and performance.',
    details: [
      'Execute Dart DevTools performance & memory profiling',
      'Test edge cases, offline modes, and slow connections',
      'Verify role-based permissions and secure authentication'
    ]
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Prepare production builds and configure release pipelines for web servers, Google Play, and Apple App Store.',
    details: [
      'Generate signed release binaries (APK/AAB/IPA)',
      'Deploy Vue.js / web builds to cloud environments',
      'Verify production API endpoints & row-level security'
    ]
  },
  {
    step: '06',
    title: 'Support',
    description: 'Provide ongoing post-launch maintenance, API updates, performance optimization, and new feature iterations.',
    details: [
      'Monitor app stability & operational logging',
      'Perform version upgrades & security patches',
      'Iterate on user feedback for future feature rollouts'
    ]
  }
];
