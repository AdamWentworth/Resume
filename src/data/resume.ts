export type ResumeLink = {
  label: string;
  href: string;
  external?: boolean;
  prominent?: boolean;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type ProjectEntry = {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  href?: string;
};

export type SkillGroup = {
  name: string;
  summary: string;
  items: string[];
};

export type EducationEntry = {
  institution: string;
  credential: string;
  period: string;
  icon: string;
};

export type ResumeProfile = {
  name: string;
  role: string;
  location: string;
  siteUrl: string;
  email: string;
  portrait: {
    src: string;
    alt: string;
  };
  summary: string;
  intro: string;
  impact: string[];
  resumePdf: {
    label: string;
    href: string;
  };
  links: ResumeLink[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillGroup[];
  education: EducationEntry[];
};

export const resume = {
  name: 'Adam Wentworth',
  role: 'Software Engineer / Computer Science',
  location: 'Vancouver, BC',
  siteUrl: 'https://adamwentworth.ca',
  email: 'adamjohnwentworth@gmail.com',
  portrait: {
    src: '/images/adam-portrait.jpg',
    alt: 'Adam Wentworth smiling',
  },
  summary:
    'Software engineer and BCIT Applied Computer Science student building ambitious full-stack, systems, games, and AI projects.',
  intro:
    'I care about useful results: designing clear systems, shipping working software, and using modern tools thoughtfully to move faster without giving up ownership of quality.',
  impact: [
    'I am seeking Summer 2026 software engineering internships while completing my Bachelor of Science in Applied Computer Science.',
    'I work well in teams and take initiative through projects that force real architecture, deployment, and testing decisions.',
    'I use AI to accelerate implementation when I understand the problem well enough to evaluate the result and deliver value faster.',
  ],
  resumePdf: {
    label: 'Download resume',
    href: '/resume.pdf',
  },
  links: [
    {
      label: 'Email',
      href: 'mailto:adamjohnwentworth@gmail.com',
      prominent: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adam-john-wentworth/',
      external: true,
      prominent: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/AdamWentworth',
      external: true,
      prominent: true,
    },
  ],
  experience: [
    {
      title: 'Full-Stack Developer',
      company: 'Innota Client Project / BCIT',
      location: 'Burnaby, BC',
      period: 'September 2023 - December 2023',
      summary:
        'Contributed to a semester-long client project for a PDF-based study workspace with AI writing tools, deployment work, and handoff responsibilities.',
      highlights: [
        'Refactored and shipped React UI and REST APIs through peer review and changing client requirements.',
        'Implemented PDF upload, ingestion, and AI actions including summarize, paraphrase, bullets, translate, and elaborate through the OpenAI API.',
        'Containerized the app with Docker and supported production deployment and handoff for the client team.',
      ],
      technologies: ['MongoDB', 'Express', 'React', 'Node', 'Docker', 'OpenAI API'],
    },
    {
      title: 'IT Support Specialist Intern',
      company: 'Firefly Systems IT Support',
      location: 'Vancouver, BC',
      period: 'May 2023 - August 2023',
      summary:
        'Provided end-to-end technical support across desktop, mobile, cloud, networking, and account administration environments.',
      highlights: [
        'Troubleshot Windows, macOS, Linux, hardware, networking, cloud services, and security issues for on-site and remote users.',
        'Administered access and infrastructure across Active Directory, VPNs, routers, switches, Office 365, and Google Workspace.',
        'Maintained backups, asset inventory, and helpdesk ticket workflows in a practical production support setting.',
      ],
      technologies: ['Windows', 'macOS', 'Linux', 'Active Directory', 'Office 365', 'Google Workspace'],
    },
    {
      title: 'Operations & Data Coordinator',
      company: 'Reliant Music',
      location: 'Vancouver, BC',
      period: 'August 2020 - February 2023',
      summary:
        'Built cleaner data workflows for music catalog operations, royalty claim readiness, and targeted research.',
      highlights: [
        'Rebuilt a disorganized song-management catalog into a standardized dataset with schemas, conventions, and validation checks.',
        'Designed and maintained a DJ research database tracking social metrics, contact information, and placement status.',
      ],
      technologies: ['Data QA', 'Spreadsheet systems', 'Research workflows', 'Process design'],
    },
    {
      title: 'Recording Engineer',
      company: 'Hipposonic Studios',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Client-facing studio work combining technical troubleshooting, communication, and quality control in a production environment.',
      highlights: [
        'Supported recording sessions where reliability, fast problem solving, and clear communication mattered in real time.',
        'Built practical audio production judgment before transitioning deeper into software engineering.',
      ],
      technologies: ['Client work', 'Audio production', 'Troubleshooting', 'Quality control'],
    },
    {
      title: 'YouTube Content Creator',
      company: 'CaptainMonkHD',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Built and operated a large gaming content channel through consistent delivery, analytics, audience awareness, and brand partnerships.',
      highlights: [
        'Grew the channel past 200k subscribers through repeatable production workflows and audience-informed iteration.',
        'Participated as a Riot Games Partner and managed the expectations that come with a public-facing creative platform.',
      ],
      technologies: ['YouTube', 'Riot Games', 'Analytics', 'Production workflows'],
    },
  ],
  projects: [
    {
      name: 'Pokemon Go Nexus',
      role: 'Full-stack developer',
      summary:
        'Full-stack Pokemon GO monorepo with a React frontend, Go and Node services, Kafka event sync, location intelligence, and multiple persistence layers.',
      highlights: [
        'Built an event flow from frontend update ingestion to Kafka, Go consumers, MySQL persistence, and SSE readers.',
        'Implemented auth and service boundaries across Node/Express, Go APIs, MongoDB, MySQL, and PostGIS.',
        'Added NGINX routing, Dockerized services, automated backups, frontend tests, and local development runbooks.',
      ],
      technologies: ['React', 'Go', 'Kafka', 'MySQL', 'Postgres/PostGIS', 'Node', 'MongoDB', 'Docker', 'NGINX', 'Vitest'],
      href: 'https://github.com/AdamWentworth/Go',
    },
    {
      name: 'Pokemon Autochess',
      role: 'Systems developer',
      summary:
        'Engine-first C++20 auto-battler prototype with placement and combat states, 3D board rendering, VFX tooling, tests, and a data pipeline.',
      highlights: [
        'Built engine core systems for the app loop, windowing, input mapping, UI, rendering, and resource caches.',
        'Implemented game runtime systems for placement, combat, shops, movement, cards, units, and scripted rules.',
        'Added headless tests, data validation, JSON config cooking, packaged content bundles, and release tooling.',
      ],
      technologies: ['C++20', 'SDL2', 'OpenGL', 'Direct3D 12', 'Lua', 'sol2', 'CMake', 'JSON'],
      href: 'https://github.com/AdamWentworth/PokemonAutochess',
    },
    {
      name: 'Jarvin',
      role: 'Software engineer',
      summary:
        'Host-run personal AI assistant built around local models, voice processing, memory, tools, integrations, and shared desktop/mobile clients.',
      highlights: [
        'Connected llama.cpp and Ollama backends with FastAPI services, conversation memory, reminders, and routines.',
        'Built React and Tauri clients for desktop, mobile shell, host-served UI, and remote phone voice workflows.',
        'Added Google Calendar actions, DuckDuckGo-backed research, morning briefs, workspace tools, and backend tests.',
      ],
      technologies: ['Python', 'FastAPI', 'React', 'Tauri', 'SQLite', 'llama.cpp', 'Ollama', 'DuckDuckGo', 'Google Calendar', 'pytest'],
      href: 'https://github.com/AdamWentworth/Jarvin',
    },
  ],
  skills: [
    {
      name: 'Full-Stack Product Systems',
      summary: 'Building interfaces, APIs, service boundaries, and product flows that can actually be used.',
      items: ['React', 'TypeScript', 'Node/Express', 'FastAPI', 'Go', 'REST APIs'],
    },
    {
      name: 'Data & Infrastructure',
      summary: 'Designing persistence, event flows, deployment paths, reverse proxies, and CI-ready workflows.',
      items: ['PostgreSQL/PostGIS', 'MySQL', 'MongoDB', 'SQLite', 'Kafka', 'Docker', 'NGINX', 'GitHub Actions'],
    },
    {
      name: 'Engine & Game Systems',
      summary: 'Working close to runtime behavior: rendering, systems, data pipelines, and deterministic gameplay.',
      items: ['C++20', 'SDL2', 'OpenGL', 'Direct3D 12', 'Lua', 'sol2', 'CMake', 'JSON'],
    },
    {
      name: 'Computer Science',
      summary: 'Coursework and project practice in the fundamentals behind maintainable software.',
      items: ['Data structures', 'Algorithms', 'OOP', 'Networking', 'Operating systems', 'Testing'],
    },
    {
      name: 'AI & Automation',
      summary: 'Using AI tools where I can evaluate the output and turn them into reliable software workflows.',
      items: ['OpenAI API', 'Whisper ASR', 'llama.cpp', 'Ollama', 'Local LLMs', 'Tool execution'],
    },
    {
      name: 'Delivery & Collaboration',
      summary: 'Keeping the work grounded in communication, documentation, handoff, and useful outcomes.',
      items: ['Team projects', 'Client handoff', 'Documentation', 'Code review', 'Product thinking', 'Outcome focus'],
    },
  ],
  education: [
    {
      institution: 'BCIT',
      credential: 'Bachelor of Science in Applied Computer Science',
      period: 'Expected May 2027',
      icon: 'BCIT',
    },
    {
      institution: 'BCIT',
      credential: 'Diploma in Computer Information Technology',
      period: 'May 2024',
      icon: 'BCIT',
    },
    {
      institution: 'SAE Institute',
      credential: 'Diploma in Audio Engineering & Music Production',
      period: 'June 2020',
      icon: 'SAE',
    },
  ],
} satisfies ResumeProfile;
