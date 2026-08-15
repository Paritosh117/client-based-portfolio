export interface EngagementModel {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  deliverables: string[];
  idealFor: string;
  popularCurrencyRates: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: 'turnkey-project',
    title: 'Turnkey Fixed-Price Project',
    badge: 'Full Product Delivery',
    shortDesc: 'Complete end-to-end mobile app or web platform development from architecture to Google Play & Apple App Store release.',
    deliverables: [
      'Scope definition & milestone deliverables',
      'Pixel-perfect Flutter mobile or Vue.js web apps',
      'Backend API integration & database setup',
      'Store release & 30-day post-launch support'
    ],
    idealFor: 'Startups & SMEs needing a complete product built on a fixed timeline.',
    popularCurrencyRates: 'Fixed Budget Milestones (USD / EUR / GBP / AED)'
  },
  {
    id: 'dedicated-developer',
    title: 'Dedicated Engineering Retainer',
    badge: 'Full-Time / Part-Time',
    shortDesc: 'Senior Flutter & Full-Stack developer embedded directly into your engineering team on a monthly retainer.',
    deliverables: [
      'Full integration with your Slack, GitHub & Jira',
      'Daily async updates & weekly video sprint demos',
      'Direct communication in your local timezone',
      'Flexible month-to-month commitment'
    ],
    idealFor: 'Tech startups, agencies & scaleups needing continuous feature velocity.',
    popularCurrencyRates: 'Monthly Retainer (USD / EUR / GBP)'
  },
  {
    id: 'app-audit-sprint',
    title: 'Code Audit & Performance Sprint',
    badge: '1–2 Week Sprint',
    shortDesc: 'Deep-dive code review, Dart DevTools memory profiling, BLoC architecture refactoring, and API latency optimization.',
    deliverables: [
      'Comprehensive architectural health report',
      'BLoC state management & memory leak fixes',
      'Database query & API latency optimization',
      'Actionable refactoring roadmap'
    ],
    idealFor: 'Existing apps facing performance lag, crash reports, or technical debt.',
    popularCurrencyRates: 'One-Time Sprint Fee (USD / EUR / GBP)'
  }
];

export interface TimezoneRegion {
  name: string;
  code: string;
  overlapHours: string;
  cities: string;
}

export const TIMEZONE_REGIONS: TimezoneRegion[] = [
  { name: 'North America (East)', code: 'EST / EDT', overlapHours: 'Morning overlap (8 AM – 1 PM EST)', cities: 'New York, Toronto, Miami' },
  { name: 'North America (West)', code: 'PST / PDT', overlapHours: 'Late overlap (8 AM – 11 AM PST)', cities: 'San Francisco, Seattle, LA' },
  { name: 'United Kingdom & Ireland', code: 'GMT / BST', overlapHours: 'Full afternoon overlap (12 PM – 6 PM GMT)', cities: 'London, Dublin, Manchester' },
  { name: 'Europe (Central & North)', code: 'CET / CEST', overlapHours: 'Full afternoon overlap (1 PM – 7 PM CET)', cities: 'Berlin, Amsterdam, Paris' },
  { name: 'Middle East & Gulf', code: 'GST', overlapHours: 'Full day overlap (11 AM – 8 PM GST)', cities: 'Dubai, Abu Dhabi, Riyadh' },
  { name: 'Asia-Pacific & Australia', code: 'SGT / AEST', overlapHours: 'Full morning & day overlap', cities: 'Singapore, Sydney, Melbourne' }
];

export const INTERNATIONAL_PAYMENTS = [
  { name: 'Wise (TransferWise)', desc: 'Zero mark-up FX bank transfers in USD, EUR, GBP, AED, CAD, AUD' },
  { name: 'International Bank Wire (SWIFT)', desc: 'Direct corporate USD/EUR bank wire transfers' },
  { name: 'Stripe / Credit Card Invoicing', desc: 'Instant online invoice payments via Visa, Mastercard, AMEX' },
  { name: 'PayPal / Escrow.com', desc: 'Secure buyer protection milestones for initial client contracts' }
];

export const REMOTE_STACK = [
  { name: 'GitHub & GitLab', role: 'Version Control & Code Reviews' },
  { name: 'Slack & Microsoft Teams', role: 'Real-time & Async Messaging' },
  { name: 'Loom & Zoom', role: 'Video Sprint Demos & Screen Recordings' },
  { name: 'Notion & Jira', role: 'Documentation & Sprint Task Tracking' },
  { name: 'Figma', role: 'UI/UX Design Handoff & Inspections' },
  { name: 'Postman', role: 'API Testing & OpenAPI Specifications' }
];
