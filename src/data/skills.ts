export interface SkillGroup {
  category: string;
  skills: { name: string; tag?: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'MOBILE',
    skills: [
      { name: 'Flutter', tag: 'Specialist' },
      { name: 'Dart', tag: 'Expert' },
      { name: 'Android', tag: 'Native SDK' },
      { name: 'iOS', tag: 'Deployment' },
      { name: 'Smart TV', tag: 'D-Pad Remote UX' }
    ]
  },
  {
    category: 'ARCHITECTURE',
    skills: [
      { name: 'BLoC', tag: 'Production State' },
      { name: 'Provider', tag: 'State' },
      { name: 'Riverpod', tag: 'State' },
      { name: 'MVVM', tag: 'Clean Code' }
    ]
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Python', tag: 'Core' },
      { name: 'Django', tag: 'Web Framework' },
      { name: 'Django REST Framework', tag: 'DRF APIs' },
      { name: 'REST APIs', tag: 'Endpoint Design' }
    ]
  },
  {
    category: 'DATABASE',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational DB' },
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'SQLite', tag: 'Offline Caching' },
      { name: 'Hive', tag: 'Local KV Store' },
      { name: 'Supabase', tag: 'Real-time DB' }
    ]
  },
  {
    category: 'CLOUD / SERVICES',
    skills: [
      { name: 'Firebase', tag: 'Auth / Firestore' },
      { name: 'Supabase', tag: 'Auth / RLS' },
      { name: 'Authentication', tag: 'JWT & OAuth' },
      { name: 'Notifications', tag: 'FCM / Push' }
    ]
  },
  {
    category: 'OTHER',
    skills: [
      { name: 'Google Maps', tag: 'Maps SDK' },
      { name: 'OpenStreetMap', tag: 'Location' },
      { name: 'Geolocation', tag: 'GPS Tracking' },
      { name: 'WebSockets', tag: 'Real-time Data' },
      { name: 'Payments', tag: 'Razorpay / Stripe' },
      { name: 'Git', tag: 'Version Control' },
      { name: 'Docker', tag: 'Containers' }
    ]
  }
];
