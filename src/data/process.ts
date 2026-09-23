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
    description: 'Understand the business goal, target users, project requirements, and technical constraints.',
    details: [
      'Clarify business goals & user journeys',
      'Identify target platforms (Android, iOS, Web, Smart TV)',
      'Analyze third-party API dependencies & system scope'
    ]
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Define feature scope, product architecture roadmap, technology stack, and sprint milestones.',
    details: [
      'Draft technical specification document',
      'Choose state management strategy (BLoC / Provider)',
      'Establish API endpoints & database schema models'
    ]
  },
  {
    step: '03',
    title: 'UI & Architecture',
    description: 'Structure responsive UI screen layouts, design tokens, and modular codebase architecture.',
    details: [
      'Construct reusable custom widget library',
      'Set up clean MVVM folder architecture',
      'Prepare light/dark theme tokens & layout constraints'
    ]
  },
  {
    step: '04',
    title: 'Development',
    description: 'Build core application features, state handlers, and interactive user flows in disciplined sprints.',
    details: [
      'Write production-ready Flutter or Vue.js components',
      'Implement BLoC state streams & business logic',
      'Configure local storage / SQLite offline caching'
    ]
  },
  {
    step: '05',
    title: 'API Integration',
    description: 'Connect client interfaces with backend REST APIs, authentication services, and third-party gateways.',
    details: [
      'Integrate Django REST Framework APIs or Supabase',
      'Implement JWT / OAuth session authentication',
      'Set up payment gateways (Razorpay/Stripe) & WebSockets'
    ]
  },
  {
    step: '06',
    title: 'Testing',
    description: 'Validate application workflows, screen responsiveness, error handling, and performance profiling.',
    details: [
      'Execute Dart DevTools memory & FPS profiling',
      'Test edge cases, offline modes & network resilience',
      'Verify role-based access & data security rules'
    ]
  },
  {
    step: '07',
    title: 'Client Review',
    description: 'Demonstrate functional application builds to stakeholders for feedback, refinement, and final sign-off.',
    details: [
      'Provide staging app build (APK / TestFlight / Web URL)',
      'Conduct video sprint demo & feature walkthrough',
      'Incorporate client feedback & polish interactions'
    ]
  },
  {
    step: '08',
    title: 'Deployment',
    description: 'Configure production build pipelines and release binaries to Google Play, Apple App Store, or web servers.',
    details: [
      'Generate signed release binaries (AAB/IPA/Web bundle)',
      'Manage app store submission metadata & compliance',
      'Verify production API endpoints & CORS security'
    ]
  },
  {
    step: '09',
    title: 'Support',
    description: 'Provide post-launch maintenance, bug fixes, third-party API updates, and ongoing feature enhancements.',
    details: [
      'Monitor production stability & app logging',
      'Perform annual OS SDK version updates',
      'Iterate on new feature requests & scalability needs'
    ]
  }
];
