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
  featuredHighlights?: string[];
  highlights: string[];
  technologies: string[];
};

export type ProjectEntry = {
  name: string;
  role: string;
  featured?: boolean;
  summary: string;
  proof: {
    label: string;
    text: string;
  }[];
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
  logo: {
    src: string;
  };
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
      title: 'DevOps Engineer Intern',
      company: 'LeVere Entertainment Inc. / Savepoint',
      location: 'Vancouver, BC (Remote)',
      period: 'January 2024 - April 2024',
      summary:
        "Worked on a 7-person team building internal desktop and data tooling for Savepoint's AI ad engine and digital-replica training workflows.",
      highlights: [
        'Designed Python image-processing and CLI scripts to automate dataset preparation and manipulation for model training.',
        'Contributed to a Rust, Tauri, TypeScript, and React desktop app for data preparation, PAGI.ai integration, and training-progress monitoring.',
        'Deployed and managed Azure VMs to run training jobs with different parameters and compare output quality.',
      ],
      technologies: ['Rust', 'Tauri', 'TypeScript', 'React', 'Python', 'PyTorch', 'Azure VMs', 'Image processing', 'CLI tools'],
    },
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
        'Prepared catalog and research data for royalty claims, placements, and follow-up by normalizing metadata, ownership notes, contacts, and status fields.',
      ],
      technologies: [
        'Music catalog operations',
        'Metadata QA',
        'Royalty claim readiness',
        'Spreadsheet systems',
        'Artist research',
      ],
    },
    {
      title: 'Recording Engineer',
      company: 'Hipposonic Studios',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Client-facing studio work spanning Pro Tools session management, live-floor recording support, signal flow, analog gear, and quality control.',
      highlights: [
        'Managed Pro Tools sessions with organized tracks, routing notes, file hygiene, takes, and backups so sessions could move cleanly from setup through handoff.',
        'Supported live-floor recording through microphone setup, signal flow, analog console routing, preamp and compressor workflows, headphone mixes, and real-time troubleshooting.',
        'Built practical audio production judgment before transitioning deeper into software engineering.',
      ],
      technologies: [
        'Pro Tools',
        'Session management',
        'Recording engineering',
        'Live floor tracking',
        'Signal flow',
        'Analog gear',
      ],
    },
    {
      title: 'YouTube Content Creator',
      company: 'CaptainMonkHD',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Built and operated a large gaming content channel through consistent delivery, analytics, audience awareness, and brand partnerships.',
      featuredHighlights: ['200k+ subscribers', 'Riot Games Partner', 'League of Legends Partner'],
      highlights: [
        'Built repeatable production workflows across planning, recording, editing, publishing, and audience feedback loops.',
        'Used analytics and audience signals to refine content formats, publishing cadence, and sponsor expectations.',
      ],
      technologies: ['Analytics', 'Production workflows'],
    },
  ],
  projects: [
    {
      name: 'Pokemon Go Nexus',
      role: 'Full-stack product system',
      featured: true,
      summary:
        'A full-stack Pokemon GO platform with React web/mobile clients, Go and Express services, Kafka event sync, geospatial search, and persistent storage.',
      proof: [
        {
          label: 'Architecture',
          text: 'Split the product into auth, Pokemon API, location, receiver/storage, search, users, and events services so each concern has a clear boundary.',
        },
        {
          label: 'Data flow',
          text: 'Designed frontend update batching through Kafka producers and Go consumers into MySQL persistence and SSE readers.',
        },
        {
          label: 'Clients',
          text: 'Built around a React web app, Expo mobile shell, shared contracts, shared UI tokens, IndexedDB state, and live update flows.',
        },
        {
          label: 'Delivery',
          text: 'Added Docker and NGINX service wiring, backups, shared frontend packages, Vitest coverage, and docs for local and deployment workflows.',
        },
      ],
      technologies: ['React', 'Go', 'Kafka', 'MySQL', 'Postgres/PostGIS', 'Node', 'MongoDB', 'Docker', 'NGINX', 'Vitest'],
      href: 'https://github.com/AdamWentworth/Go',
    },
    {
      name: 'Pokemon Autochess',
      role: 'C++ engine and game systems',
      summary:
        'An engine-first C++20 auto-battler prototype with app loop/window/input infrastructure, OpenGL and Direct3D 12 rendering, Lua gameplay, VFX tooling, and headless tests.',
      proof: [
        {
          label: 'Engine',
          text: 'Built reusable engine modules for app lifecycle, system registration, resources, UI, camera and board rendering, model loading, animation, and render caches.',
        },
        {
          label: 'Rendering',
          text: 'Maintained OpenGL and Direct3D 12 paths with shader/resource caches, runtime smoke tests, and optimized render hot paths.',
        },
        {
          label: 'Runtime',
          text: 'Composed placement and combat states with round, shop, movement, combat, bench, card, battle feed, health bar, and Lua tuning systems.',
        },
        {
          label: 'Tooling',
          text: 'Added VFX preview tools, JSON config validation, packaged content bundles, release scripts, installer support, and smoke/invariant tests.',
        },
      ],
      technologies: ['C++20', 'SDL2', 'OpenGL', 'Direct3D 12', 'Lua', 'sol2', 'CMake', 'JSON'],
      href: 'https://github.com/AdamWentworth/PokemonAutochess',
    },
    {
      name: 'Jarvin',
      role: 'Local AI assistant platform',
      summary:
        'A host-run personal AI assistant stack around local models, voice workflows, memory, tools, integrations, planning, and shared desktop/mobile clients.',
      proof: [
        {
          label: 'Local host',
          text: 'Connected llama.cpp and Ollama backends through FastAPI with conversation history, profile memory, reminders, routines, and safe host-side tools.',
        },
        {
          label: 'Voice',
          text: 'Built remote phone voice flows with phone microphone capture, host-side transcription, and phone speaker playback for replies.',
        },
        {
          label: 'Clients',
          text: 'Built a shared React client, Tauri desktop app, Tauri Android shell, and remote phone voice path over local network or WireGuard.',
        },
        {
          label: 'Integrations',
          text: 'Added Google Calendar CRUD, DuckDuckGo-backed research with page summarization, morning briefs, workspace actions, and pytest-backed backend validation.',
        },
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
      logo: {
        src: '/images/bcit-logo.svg',
      },
    },
    {
      institution: 'BCIT',
      credential: 'Diploma in Computer Information Technology',
      period: 'May 2024',
      icon: 'BCIT',
      logo: {
        src: '/images/bcit-logo.svg',
      },
    },
    {
      institution: 'SAE Institute',
      credential: 'Diploma in Audio Engineering & Music Production',
      period: 'June 2020',
      icon: 'SAE',
      logo: {
        src: '/images/sae-institute-logo.png',
      },
    },
  ],
} satisfies ResumeProfile;
