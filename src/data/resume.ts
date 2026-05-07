export type ResumeLink = {
  label: string;
  href: string;
  external?: boolean;
  prominent?: boolean;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  companyHref?: string;
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
  profileFacts: string[];
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
  profileFacts: ['BCIT Applied CS', 'Summer 2026 internships'],
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
      title: 'Software Developer Intern',
      company: 'Savepoint Client Project / BCIT',
      companyHref: 'https://mysavepoint.com/',
      location: 'Vancouver, BC',
      period: 'January 2024 - April 2024',
      summary:
        "Contributed to a BCIT student client project building a desktop tool for Savepoint's AI video workflow, focused on preparing training and learning datasets.",
      highlights: [
        'Worked in a 7-student team on a Rust, Tauri, TypeScript, and React desktop app for coordinating data-prep scripts and monitoring workflow progress.',
        'Collaborated in a 2-person subgroup to build Python image-processing and CLI scripts that prepared and manipulated source media into model training and learning sets.',
        'Connected lower-level Python automation beneath the Tauri frontend and helped integrate third-party tooling including PAGI.ai.',
      ],
      technologies: ['Rust', 'Tauri', 'TypeScript', 'React', 'Python', 'Image processing', 'CLI tools'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Innota Client Project / BCIT',
      companyHref: 'https://innota.ai/',
      location: 'Vancouver, BC',
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
        'Provided end-to-end technical support for a now-closed IT support company across desktop, mobile, cloud, networking, and account administration environments.',
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
      companyHref: 'https://www.reliantmusic.com/',
      location: 'Vancouver, BC',
      period: 'August 2020 - February 2023',
      summary:
        'Built cleaner data workflows for music catalog operations, royalty claim readiness, and targeted research.',
      highlights: [
        'Rebuilt a disorganized song-management catalog into a standardized dataset with schemas, conventions, and validation checks.',
        'Designed and maintained an artist research database tracking social metrics, contact information, and placement status.',
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
      companyHref: 'https://www.hipposonicstudio.com/',
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
      companyHref: 'https://www.youtube.com/@captainmonkhd',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Built and operated a large gaming content channel through consistent delivery, analytics, audience awareness, and brand partnerships.',
      featuredHighlights: ['200k subscribers', 'Riot Games Partner', 'League of Legends Partner'],
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
      name: 'Languages',
      summary: 'Core implementation languages used across web, backend, systems, and automation work.',
      items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'C++20', 'Rust', 'SQL'],
    },
    {
      name: 'Frontend & Desktop',
      summary: 'Interfaces and client shells for practical product workflows.',
      items: ['React', 'Tauri', 'Astro', 'Expo', 'CSS', 'Accessibility'],
    },
    {
      name: 'Backend & APIs',
      summary: 'API design, microservice boundaries, auth, and real-time product flows.',
      items: ['net/http', 'Fiber', 'chi', 'Node/Express', 'FastAPI', 'Microservices', 'JWT auth', 'SSE'],
    },
    {
      name: 'Data & Infrastructure',
      summary: 'Persistence, event flow, deployment, and operational wiring.',
      items: ['PostgreSQL/PostGIS', 'MySQL', 'MongoDB', 'SQLite', 'Kafka', 'Docker', 'NGINX', 'Git', 'GitHub Actions'],
    },
    {
      name: 'Systems & Games',
      summary: 'Runtime systems, rendering paths, scripting, and build tooling.',
      items: ['SDL2', 'OpenGL', 'Direct3D 12', 'Lua', 'sol2', 'CMake', 'Engine architecture'],
    },
    {
      name: 'AI & Automation',
      summary: 'Model-adjacent software, local AI tooling, and automation I can evaluate and own.',
      items: ['OpenAI API', 'llama.cpp', 'Ollama', 'Whisper ASR', 'Python scripting', 'Tool workflows'],
    },
    {
      name: 'Fundamentals',
      summary: 'Computer science fundamentals and habits that keep work useful to teams.',
      items: ['Data structures', 'Algorithms', 'OOP', 'Networking', 'Operating systems', 'Testing', 'Documentation'],
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
