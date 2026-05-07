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
    'I am seeking Summer 2026 software engineering internships while completing my Applied Computer Science degree.',
    'I learn fastest through self-directed projects with real architecture, deployment, and testing concerns.',
    'I use AI as an accelerator, while staying accountable for system design, code quality, and outcomes.',
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
        'Event-driven platform for Pokemon GO players with microservice boundaries, live updates, geospatial search, and production-style deployment concerns.',
      highlights: [
        'Built Kafka-backed Go services and streamed live updates to frontend clients through SSE.',
        'Implemented secure JWT authentication with Node/Express and MongoDB.',
        'Added PostGIS geospatial search, Dockerized deployment, NGINX proxying, tests, and automated backups.',
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
        'Separated engine and game layers with GameLoop and GameContext boundaries.',
        'Implemented deterministic Lua movement with A*, reservations, priority, and swap prevention.',
        'Used sol2 to iterate on gameplay rules without recompiling C++.',
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
        'Connected Whisper speech-to-text with local GGUF LLM inference through llama.cpp.',
        'Built real-time audio capture with adaptive noise-gate voice activity detection.',
        'Mounted a Gradio control UI in FastAPI with startup provisioning, observability, and tests.',
      ],
      technologies: ['Python', 'FastAPI', 'llama.cpp', 'asyncio', 'pytest', 'GitHub Actions'],
      href: 'https://github.com/AdamWentworth/Jarvin',
    },
  ],
  skills: [
    {
      name: 'Languages',
      summary: 'Comfortable moving between application code, services, scripting, and systems-level projects.',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'C++'],
    },
    {
      name: 'Frameworks',
      summary: 'Used across full-stack apps, APIs, static sites, and project UIs.',
      items: ['React', 'Node/Express', 'FastAPI', 'Fiber', 'Astro'],
    },
    {
      name: 'Data & Infrastructure',
      summary: 'Experience with persistence, messaging, deployment, reverse proxies, and CI-ready workflows.',
      items: ['PostgreSQL/PostGIS', 'MySQL', 'MongoDB', 'Docker', 'NGINX', 'Kafka', 'GitHub Actions'],
    },
    {
      name: 'Computer Science',
      summary: 'Coursework and project practice in the fundamentals behind maintainable software.',
      items: ['Data structures', 'Algorithms', 'OOP', 'Networking', 'Operating systems', 'Testing'],
    },
    {
      name: 'AI & Media',
      summary: 'Practical use of AI APIs, local model tooling, speech systems, and audio production experience.',
      items: ['OpenAI API', 'Whisper ASR', 'llama.cpp', 'Local LLMs', 'Audio engineering'],
    },
    {
      name: 'Working Style',
      summary: 'I bias toward shipping useful software, learning quickly, and keeping enough structure for future work.',
      items: ['Self-directed projects', 'Product thinking', 'Documentation', 'Agile/Scrum', 'Outcome focus'],
    },
  ],
  education: [
    'Bachelor of Science in Applied Computer Science, British Columbia Institute of Technology, expected May 2027.',
    'Diploma in Computer Information Technology, British Columbia Institute of Technology, May 2024.',
    'Diploma in Audio Engineering & Music Production, SAE Institute, June 2020.',
  ],
} satisfies ResumeProfile;
