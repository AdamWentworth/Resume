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
  items: string[];
};

export type ResumeProfile = {
  name: string;
  role: string;
  location: string;
  siteUrl: string;
  email: string;
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
  education: string[];
};

export const resume = {
  name: 'Adam Wentworth',
  role: 'Software Engineer / BCIT Applied CS',
  location: 'Metro Vancouver, BC',
  siteUrl: 'https://adamwentworth.ca',
  email: 'adamjohnwentworth@gmail.com',
  summary:
    'Software engineer and BCIT Applied Computer Science student building ambitious full-stack, systems, game, and local-AI projects.',
  intro:
    'I care about useful results: designing clear systems, shipping working software, and using modern tools thoughtfully to move faster without giving up ownership of quality.',
  impact: [
    'Internship candidate for Summer 2026; expected BSc Applied Computer Science graduation in May 2027.',
    'Strongest work comes from self-directed projects with real architecture, deployment, and testing concerns.',
    'Uses AI as an accelerator while staying accountable for system design, code quality, and outcomes.',
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
      title: 'Recording Engineer & Content Creator',
      company: 'Hipposonic Studios / CaptainMonkHD',
      location: 'Vancouver, BC',
      period: 'Earlier experience',
      summary:
        'Client-facing technical and creative work that shaped a strong bias for delivery, iteration, and audience-aware output.',
      highlights: [
        'Worked in studio environments requiring technical troubleshooting, communication, and quality control.',
        'Built a YouTube channel past 200k subscribers and participated as a Riot Games Partner through consistent, analytics-informed production.',
      ],
      technologies: ['Client work', 'Audio production', 'Analytics', 'Content systems'],
    },
  ],
  projects: [
    {
      name: 'Pokemon Go Nexus',
      role: 'Full-stack developer',
      summary:
        'Event-driven platform for Pokemon GO players with microservice boundaries, live updates, geospatial search, and production-style deployment concerns.',
      highlights: [
        'Built Kafka-backed Go producer and consumer services with MySQL and streamed live updates to frontend clients through SSE.',
        'Implemented a Node/Express auth service with JWT access and refresh tokens in secure cookies backed by MongoDB.',
        'Added Postgres/PostGIS geospatial search using spatial indexes and polygon queries.',
        'Containerized with Docker and NGINX, including reverse proxying, rate limiting, security headers, frontend tests, and automated backups.',
      ],
      technologies: ['React', 'Go', 'Kafka', 'MySQL', 'Postgres/PostGIS', 'Node', 'MongoDB', 'Docker'],
      href: 'https://github.com/AdamWentworth/Go',
    },
    {
      name: 'Pokemon Autochess',
      role: 'Systems developer',
      summary:
        'Custom C++20 engine and game layer for an autobattler prototype with deterministic combat, movement, and data-driven gameplay rules.',
      highlights: [
        'Designed an engine/game boundary with GameLoop and GameContext to decouple gameplay from SDL and avoid global singletons.',
        'Implemented deterministic Lua movement with A*, priority, reservations, and swap prevention for reproducible simulations.',
        'Created a modular Lua rules layer through sol2 to iterate on gameplay without recompiling C++.',
      ],
      technologies: ['C++20', 'SDL2', 'OpenGL', 'Lua', 'sol2'],
      href: 'https://github.com/AdamWentworth/PokemonAutochess',
    },
    {
      name: 'Jarvin',
      role: 'Software engineer',
      summary:
        'Fully local offline voice assistant that connects speech recognition, local LLM inference, text-to-speech, observability, and testable service design.',
      highlights: [
        'Integrated Whisper-based speech-to-text with a local GGUF LLM runtime through llama.cpp for offline chat responses.',
        'Implemented real-time audio capture with adaptive noise-gate voice activity detection for more reliable utterance handling.',
        'Auto-provisioned and loaded the local model at startup, with a Gradio UI mounted in FastAPI for control, observability, and testing.',
      ],
      technologies: ['Python', 'FastAPI', 'llama.cpp', 'asyncio', 'pytest', 'GitHub Actions'],
      href: 'https://github.com/AdamWentworth/Jarvin',
    },
    {
      name: 'Innota',
      role: 'Full-stack developer',
      summary:
        'Student-team PDF study workspace with AI writing tools, production features, deployment handoff, and client-driven iteration.',
      highlights: [
        'Refactored and shipped React UI and REST APIs through peer review and changing client requirements.',
        'Implemented PDF upload, ingestion, and AI actions including summarize, paraphrase, bullets, translate, and elaborate through the OpenAI API.',
        'Containerized the app with Docker and supported production deployment and handoff.',
      ],
      technologies: ['MongoDB', 'Express', 'React', 'Node', 'Docker', 'OpenAI API'],
    },
    {
      name: 'Phlosion',
      role: 'Independent product lab',
      summary:
        'Planned company and project hub for production-level tools, experiments, demos, changelogs, and future monetization.',
      highlights: [
        'Keeps AdamWentworth.ca focused on the person, resume, and hiring story.',
        'Gives larger projects a branded home where they can stand on their own as products.',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Product pages'],
    },
  ],
  skills: [
    {
      name: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'C++'],
    },
    {
      name: 'Frameworks',
      items: ['React', 'Node/Express', 'FastAPI', 'Fiber', 'Astro'],
    },
    {
      name: 'Data & Infrastructure',
      items: ['PostgreSQL/PostGIS', 'MySQL', 'MongoDB', 'Docker', 'NGINX', 'Kafka', 'GitHub Actions'],
    },
    {
      name: 'Computer Science',
      items: ['Data structures', 'Algorithms', 'OOP', 'Networking', 'Operating systems', 'Testing'],
    },
    {
      name: 'AI & Media',
      items: ['OpenAI API', 'Whisper ASR', 'llama.cpp', 'Local LLMs', 'Audio engineering'],
    },
    {
      name: 'Working Style',
      items: ['Self-directed projects', 'Product thinking', 'Documentation', 'Agile/Scrum', 'Outcome focus'],
    },
  ],
  education: [
    'BSc Applied Computer Science, British Columbia Institute of Technology, expected May 2027.',
    'Diploma in Computer Information Technology, British Columbia Institute of Technology, May 2024.',
    'Diploma in Audio Engineering & Music Production, SAE Institute, June 2020.',
  ],
} satisfies ResumeProfile;
