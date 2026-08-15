export interface ArchitectureConcept {
  id: string;
  title: string;
  category: 'State Management' | 'API & Backend' | 'Database & Storage' | 'Real-time & Telemetry' | 'Security';
  shortSummary: string;
  diagramAscii: string;
  description: string;
  keyPrinciples: string[];
  appliedInProjects: string[];
  codeSnippetTitle?: string;
  codeSnippet?: string;
}

export const ARCHITECTURE_CONCEPTS: ArchitectureConcept[] = [
  {
    id: 'mvvm-pattern',
    title: 'MVVM (Model-View-ViewModel)',
    category: 'State Management',
    shortSummary: 'Decouples UI layout from business logic and data providers, ensuring testable, maintainable cross-platform codebases.',
    diagramAscii: `[ Flutter View (UI) ]
         │  ▲
  User   │  │ State
  Events │  │ Updates
         ▼  │
[ ViewModel (Logic & State) ]
         │  ▲
  Fetch  │  │ Data
  Data   │  │ Stream
         ▼  │
[ Repository / Data Layer ]
         │  ▲
  HTTP / │  │ Payload
  DB     │  │
         ▼  │
[ Remote API / Database ]`,
    description: 'MVVM ensures clean separation of concerns in Flutter applications. Views listen to state changes emitted by ViewModels, while ViewModels orchestrate calls to data repositories without direct knowledge of widget rendering details.',
    keyPrinciples: [
      'Declarative UI reactive to immutable state objects',
      'ViewModels contain zero Flutter widget dependencies for unit testability',
      'Repository pattern abstracts REST APIs, Firebase, and local SQLite caches',
      'Used across Aimsoft production apps to reduce per-project boilerplate'
    ],
    appliedInProjects: ['Samuh OTT Platform', 'Future Crypto App', 'vShowCards', 'Kids Learning App']
  },
  {
    id: 'bloc-pattern',
    title: 'BLoC (Business Logic Component)',
    category: 'State Management',
    shortSummary: 'Event-driven reactive state management leveraging RxDart streams to handle complex UI state transitions predictably.',
    diagramAscii: `[ UI Widgets ]
      │ (Emits Events)
      ▼
┌──────────────┐
│  BLoC Engine │  ─────▶  Transforms Events into States
└──────────────┘
      │ (Emits States)
      ▼
[ UI Rebuilds ]`,
    description: 'The BLoC pattern converts user actions (Events) into predictable immutable output states using Dart Streams. This isolates UI components from business rules and provides complete state traceability during complex e-commerce or tracking workflows.',
    keyPrinciples: [
      'Unidirectional data flow (Events In -> States Out)',
      'Strict separation of business logic from UI rendering',
      'Ease of unit testing by mocking Event streams',
      'Prevents unnecessary widget rebuilds using BlocBuilder filtering'
    ],
    appliedInProjects: ['Bharat Agrimarts', 'Project Management Dashboard (PMD)', 'Load Tracking System']
  },
  {
    id: 'rest-api-architecture',
    title: 'REST API & Repository Pattern',
    category: 'API & Backend',
    shortSummary: 'Standardized HTTP network layer with token refresh interceptors, error handling, and structured data serialization.',
    diagramAscii: `[ App UI Layer ]
       │
       ▼
[ Repository Interface ]
   ├───▶ [ Remote Data Source (Dio/Http + JWT Interceptor) ]
   └───▶ [ Local Data Source (SQLite / Secure Storage) ]
       │
       ▼
[ Django REST Framework / Node.js Backend ]`,
    description: 'A robust networking architecture built around Dio/HTTP clients featuring automatic JWT bearer token injection, exponential backoff retries for transient network drops, and type-safe JSON serialization.',
    keyPrinciples: [
      'Centralized HTTP client with Request/Response interceptors',
      'Token refresh interceptor handling 401 Unauthorized seamlessly',
      'Strongly typed DTOs (Data Transfer Objects) mapped to domain entities',
      'Decoupled Repository interfaces allowing mock network responses during UI testing'
    ],
    appliedInProjects: ['University Lead Management CRM', 'Samuh OTT Platform', 'Bharat Agrimarts', 'Medical PYQ']
  },
  {
    id: 'offline-first-design',
    title: 'Offline-First & SQLite Caching',
    category: 'Database & Storage',
    shortSummary: 'Ensures full application usability in low-connectivity areas by persisting mutations locally and background syncing.',
    diagramAscii: `[ User Action ]
       │
       ▼
[ Local SQLite Cache ]  ──▶  (Instant UI Response)
       │
 [ Sync Queue ]
       │  (Connection Available?)
       ▼
[ Remote DB (Supabase/Django) ]`,
    description: 'Designed for field applications where cellular connectivity is intermittent. Data mutations are committed instantly to a local SQLite database, queued in a sync ledger, and pushed to the remote backend as soon as connectivity is restored.',
    keyPrinciples: [
      'Instant local UI response without waiting for network round-trips',
      'Local transaction logging with conflict resolution strategies',
      'Background connectivity listener triggering queued payload sync',
      'Used in logistics tracking and field technician workflows'
    ],
    appliedInProjects: ['Load Tracking System', 'Project Management Dashboard (PMD)']
  },
  {
    id: 'realtime-websockets',
    title: 'Real-Time Streaming & WebSockets',
    category: 'Real-time & Telemetry',
    shortSummary: 'Sub-second real-time data streaming for live crypto ticker updates and Supabase database change listeners.',
    diagramAscii: `[ Client App ]  ◄──── WebSocket Full-Duplex Socket ────►  [ WebSocket Server ]
       │                                                         │
 [ RxStream ]                                              [ Live Tickers ]
       │                                                         │
[ Chart View ]                                            [ Exchange API ]`,
    description: 'Implements full-duplex WebSocket socket channels to stream continuous price ticks and live telemetry feeds directly into reactive RxDart streams, bypassing heavy HTTP polling overhead.',
    keyPrinciples: [
      'Sub-second real-time telemetry updates with zero HTTP poll overhead',
      'Automatic socket ping/pong heartbeats and auto-reconnect fallback',
      'Throttled UI rendering to maintain 60fps frame rate during high tick rates',
      'Supabase Realtime PostgreSQL change subscriptions'
    ],
    appliedInProjects: ['Future — Crypto Trading App', 'Home Service Hub', 'Load Tracking System']
  },
  {
    id: 'auth-rbac-security',
    title: 'Authentication & Role-Based Access (RBAC)',
    category: 'Security',
    shortSummary: 'Multi-layer security architecture combining JWT authentication, role guards, and Row-Level Security (RLS) policies.',
    diagramAscii: `[ Client Request + JWT ]
          │
          ▼
[ Django / Supabase Auth Guard ]
          │
  (Verify Role & Permissions)
          │
  ├── Admin ────▶ [ Full Access / Management APIs ]
  ├── Counsellor ─▶ [ Assigned Lead Pipelines ]
  └── Agent ─────▶ [ Registered Submissions Only ]`,
    description: 'Enforces strict data access rules across enterprise platforms. Users authenticate via JWT tokens or Supabase Auth, and API endpoints enforce role-based middleware guards backed by database-level Row-Level Security (RLS).',
    keyPrinciples: [
      'Encrypted token storage in Flutter Secure Storage / HttpOnly Cookies',
      'Middleware route guards protecting restricted application flows',
      'Supabase Row-Level Security (RLS) enforcing database query segregation',
      'Multi-role permission dashboards (Admin, Counsellor, Agent, Technician, Customer)'
    ],
    appliedInProjects: ['University Lead Management CRM', 'Project Management Dashboard (PMD)', 'Home Service Hub', 'VeggyMart']
  }
];
