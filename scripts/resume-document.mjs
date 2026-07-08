export const phone = '604-726-7888';
export const github = 'github.com/AdamWentworth';
export const linkedIn = 'linkedin.com/in/adam-john-wentworth';

export const headline = 'Software Engineer | Go Backends | C++ Systems | Full-Stack Products';
export const availability =
  'BCIT BSc Applied Computer Science, expected May 2027 | Seeking 2027 software engineering roles';
export const profile =
  'Software engineer and BCIT Applied Computer Science student building full-stack products, Go services, C++ game systems, and AI-adjacent tooling. I use modern AI coding workflows to move faster while keeping ownership of design, testing, and production quality.';

export const skills = [
  ['Languages', ['TypeScript', 'JavaScript', 'Python', 'Go', 'C++20', 'Rust', 'SQL']],
  [
    'Backend/Data',
    [
      'Microservices',
      'net/http',
      'Fiber',
      'Node/Express',
      'FastAPI',
      'PostgreSQL/PostGIS',
      'MySQL',
      'MongoDB',
      'ClickHouse',
      'Kafka',
    ],
  ],
  ['Frontend/Desktop', ['React', 'Astro', 'Expo', 'Tauri', 'CSS', 'Accessibility']],
  ['Systems/Infra', ['SDL2', 'OpenGL', 'Direct3D 12', 'Lua', 'sol2', 'CMake', 'Docker', 'NGINX', 'GitHub Actions']],
  ['AI/Automation', ['OpenAI API', 'llama.cpp', 'Ollama', 'Whisper ASR', 'Python scripting']],
];

export const projectDates = new Map([
  ['Pokemon Go Nexus', 'September 2023 - Present'],
  ['WinRift', '2026 - Present'],
  ['Pokemon Autochess', 'April 2025 - Present'],
]);

export const projectBullets = new Map([
  [
    'Pokemon Go Nexus',
    [
      'Built Go services, Kafka-backed update flow, MySQL persistence, and SSE readers for live Pokemon GO collection updates.',
      'Implemented auth, geospatial Postgres/PostGIS search, React clients, Docker/NGINX deployment, backups, and frontend tests.',
    ],
  ],
  [
    'WinRift',
    [
      'Built Go API, Riot Games API collector worker, monitor, and patch archive tooling for League analytics workflows.',
      'Normalized match, timeline, rank, and static-data payloads into ClickHouse read models for champion guides and live scouting.',
    ],
  ],
  [
    'Pokemon Autochess',
    [
      'Built C++20 engine modules for app lifecycle, UI, camera/board rendering, model loading, animation, and render caches.',
      'Composed deterministic runtime systems with Lua tuning, OpenGL and Direct3D 12 paths, VFX tooling, and smoke tests.',
    ],
  ],
]);

export const experienceBullets = new Map([
  [
    'Software Developer Intern',
    [
      'Built Python image-processing and CLI scripts for AI video training-data preparation inside a Rust/Tauri/React desktop workflow.',
    ],
  ],
  [
    'Full-Stack Developer',
    [
      'Shipped React UI and REST APIs for a PDF study workspace, including upload/ingestion, OpenAI writing actions, Docker, and handoff.',
    ],
  ],
  [
    'IT Support Specialist Intern',
    [
      'Supported Windows, macOS, Linux, hardware, cloud, networking, Active Directory, VPN, Office 365, and Google Workspace environments.',
    ],
  ],
  [
    'Operations & Data Coordinator',
    [
      'Rebuilt music catalog and artist research data into QA-ready spreadsheet systems for royalty claims, placements, and follow-up.',
    ],
  ],
]);

export const additionalItems = [
  {
    label: 'CaptainMonkHD',
    text: 'YouTube creator with 200k+ subscribers, Riot Games Partner, analytics-driven production, and brand partnerships.',
  },
  {
    label: 'Recording engineer',
    text: 'Client-facing studio work, Pro Tools sessions, signal flow, live-floor tracking, and technical troubleshooting.',
  },
];
