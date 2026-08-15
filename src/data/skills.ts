export interface SkillGroup {
  category: string;
  skills: { name: string; tag?: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', tag: 'Core Specialist' },
      { name: 'Dart', tag: 'Expert' },
      { name: 'BLoC State Management', tag: 'Production' },
      { name: 'FlutterFlow', tag: 'AI Prototyping' },
      { name: 'Android SDK', tag: 'Native Integration' }
    ]
  },
  {
    category: 'Web & Frontend',
    skills: [
      { name: 'Vue.js', tag: 'Production' },
      { name: 'JavaScript (ES6+)', tag: 'Core' },
      { name: 'HTML5 & CSS3', tag: 'Semantic Layout' },
      { name: 'Responsive UI Design', tag: 'Cross-device' }
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Django', tag: 'Production' },
      { name: 'Django REST Framework (DRF)', tag: 'APIs' },
      { name: 'Python', tag: 'Core' },
      { name: 'RESTful API Architecture', tag: 'Design' }
    ]
  },
  {
    category: 'Database & Backend Services',
    skills: [
      { name: 'Supabase', tag: 'Real-time DB / Auth' },
      { name: 'Firebase', tag: 'Auth / Firestore' },
      { name: 'PostgreSQL', tag: 'Relational DB' },
      { name: 'SQLite', tag: 'Offline Caching' },
      { name: 'SQL', tag: 'Queries & Schemas' }
    ]
  },
  {
    category: 'Architecture & Engineering Concepts',
    skills: [
      { name: 'Cross-platform Architecture', tag: 'Android / iOS / TV / Web' },
      { name: 'MVVM Pattern', tag: 'Clean Code' },
      { name: 'Offline-First Design', tag: 'Background Sync' },
      { name: 'Real-Time Systems', tag: 'WebSockets / Maps' },
      { name: 'Agile / Scrum', tag: 'Sprint Execution' },
      { name: 'CI / CD Pipelines', tag: 'Deployment' }
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git & GitHub', tag: 'Version Control' },
      { name: 'Android Studio', tag: 'IDE & Emulators' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Dart DevTools', tag: 'Profiling & Tuning' }
    ]
  }
];
