export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Education';
  responsibilities: string[];
  technologies: string[];
  keyHighlights: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'divyal-technologies',
    role: 'Software Developer',
    company: 'Divyal Technologies Pvt Ltd',
    location: 'Bhilai, Chhattisgarh, India',
    period: 'April 2025 – Present',
    type: 'Work',
    responsibilities: [
      'Built scalable Flutter apps with pixel-perfect, responsive UIs on Android and iOS; used FlutterFlow to accelerate prototyping and cut design-to-code handoff time across sprints.',
      'Developed Bharat Agrimarts — a Flutter e-commerce platform for agricultural product trading — implementing product listings, cart, order management, and secure authentication using BLoC.',
      'Contributed to the Project Management Dashboard (PMD) by building interactive UI components, workflow management modules, and backend-integrated screens.',
      'Integrated Supabase (real-time DB, auth, row-level security) and Django REST APIs for secure backend connectivity; improved performance via Dart DevTools profiling.',
      'Contributed to an enterprise Vue.js and Django web application — building responsive Vue components, integrating Django REST APIs for CRUD operations, and supporting authentication and PostgreSQL-backed modules.'
    ],
    technologies: ['Flutter', 'FlutterFlow', 'BLoC', 'Supabase', 'Django REST Framework', 'Vue.js', 'PostgreSQL', 'Dart DevTools'],
    keyHighlights: [
      'Agile cross-platform mobile delivery for Android & iOS',
      'Full-stack contributions across Flutter and Vue.js/Django stacks',
      'Supabase Real-Time DB & Row-Level Security implementation'
    ]
  },
  {
    id: 'aimsoft-technologies',
    role: 'Flutter Developer',
    company: 'Aimsoft Technologies',
    location: 'Durg, Chhattisgarh, India',
    period: 'March 2023 – March 2025',
    type: 'Work',
    responsibilities: [
      'Architected and shipped 6 production apps across Android, iOS, and Smart TV using MVVM, reducing time-to-market by 40% and boosting customer satisfaction by 20%.',
      'Built reusable Flutter component libraries and standardized REST API patterns, cutting per-project boilerplate and accelerating feature delivery across all engagements.',
      'Owned full delivery lifecycle — from UI wireframe to Play Store/App Store release — across OTT, fintech, logistics, edtech, and community domains with consistent on-time delivery.'
    ],
    technologies: ['Flutter', 'Dart', 'MVVM', 'REST APIs', 'Firebase', 'Smart TV SDK', 'Play Store Deployment', 'App Store Release'],
    keyHighlights: [
      'Delivered 6 production applications across Android, iOS, and Smart TV',
      'Sole developer for Bhutan\'s first OTT platform (Samuh)',
      'Reduced time-to-market by 40% using standardized component architectures'
    ]
  },
  {
    id: 'education-mca',
    role: 'Master of Computer Applications (MCA)',
    company: 'Shri Shankaracharya Technical Campus',
    location: 'Bhilai, Chhattisgarh, India',
    period: 'Aug 2023 – Apr 2025',
    type: 'Education',
    responsibilities: [
      'Specialized in Computer Engineering and Software Systems Architecture.',
      'Coursework focused on Advanced Data Structures, Software Engineering, Database Systems, and Distributed Computing.'
    ],
    technologies: ['Computer Engineering', 'Software Architecture', 'DBMS', 'Algorithms'],
    keyHighlights: ['Postgraduate Technical Degree', 'Focus on Software Engineering & Systems']
  },
  {
    id: 'education-bca',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Kamla Nehru College — Nagpur University',
    location: 'Nagpur, Maharashtra, India',
    period: '2019 – 2022',
    type: 'Education',
    responsibilities: [
      'Specialized in Computer Science fundamentals, object-oriented programming, and web development principles.',
      'Graduated with strong foundations in database management, software development, and computing theory.'
    ],
    technologies: ['Computer Science', 'OOP', 'SQL', 'Web Technologies'],
    keyHighlights: ['Undergraduate Foundation in Computer Applications']
  }
];
