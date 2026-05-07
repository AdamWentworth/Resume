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
  role: 'Software Engineer',
  location: 'Canada',
  siteUrl: 'https://adamwentworth.ca',
  email: 'hello@adamwentworth.ca',
  summary:
    'Software engineer focused on building dependable, user-centered web products with clean interfaces, strong fundamentals, and maintainable systems.',
  intro:
    'I turn ambiguous product goals into practical software, with an eye for clear architecture, responsive interfaces, and calm delivery.',
  impact: [
    'Builds accessible, fast, and maintainable web experiences.',
    'Connects product intent, technical tradeoffs, and implementation details.',
    'Keeps systems readable so future work is easier to ship.',
  ],
  resumePdf: {
    label: 'Download resume',
    href: '/resume.pdf',
  },
  links: [
    {
      label: 'Email',
      href: 'mailto:hello@adamwentworth.ca',
      prominent: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adamwentworth/',
      external: true,
      prominent: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/adamwentworth',
      external: true,
      prominent: true,
    },
  ],
  experience: [
    {
      title: 'Software Engineer',
      company: 'Current or recent company',
      location: 'Remote / Canada',
      period: 'Dates to add',
      summary:
        'Replace this draft entry with the role, company, dates, and concise impact statement from the final resume.',
      highlights: [
        'Add a measurable product, platform, or customer outcome.',
        'Add a technical ownership highlight, such as architecture, performance, accessibility, or reliability.',
        'Add a collaboration highlight that shows how the work shipped.',
      ],
      technologies: ['TypeScript', 'Astro', 'Web Platform'],
    },
    {
      title: 'Software Engineering Project Work',
      company: 'Selected client, team, or personal work',
      location: 'Canada',
      period: 'Dates to add',
      summary:
        'Use this entry for another role, contract, internship, open-source contribution, or production project.',
      highlights: [
        'Describe the problem, your responsibility, and the result.',
        'Mention the stack only where it clarifies the engineering judgment.',
      ],
      technologies: ['JavaScript', 'APIs', 'Responsive UI'],
    },
  ],
  projects: [
    {
      name: 'AdamWentworth.ca',
      role: 'Designer and developer',
      summary:
        'A fast static resume and portfolio site built with Astro, structured content, semantic HTML, and production metadata.',
      highlights: [
        'Centralized resume data so profile updates stay simple.',
        'Static-first implementation with no client JavaScript required for V1.',
      ],
      technologies: ['Astro', 'TypeScript', 'CSS'],
      href: 'https://adamwentworth.ca',
    },
    {
      name: 'Featured project',
      role: 'Software engineer',
      summary:
        'Replace this with a strong project that demonstrates product thinking, technical execution, and measurable impact.',
      highlights: [
        'State the user or business problem.',
        'Describe the technical approach and shipped outcome.',
      ],
      technologies: ['Technology', 'Framework', 'Outcome'],
    },
    {
      name: 'Technical case study',
      role: 'Owner or contributor',
      summary:
        'Use this slot for a deeper engineering story: migration, automation, integration, performance work, or a full-stack build.',
      highlights: [
        'Explain the before and after state.',
        'Include a concrete result when final resume details are available.',
      ],
      technologies: ['Systems', 'Testing', 'Delivery'],
    },
  ],
  skills: [
    {
      name: 'Frontend',
      items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Accessibility', 'Responsive UI'],
    },
    {
      name: 'Product Engineering',
      items: ['Technical scoping', 'API integration', 'Performance', 'Testing', 'Documentation'],
    },
    {
      name: 'Tools',
      items: ['Git', 'Node.js', 'Astro', 'Vercel', 'CI-ready workflows'],
    },
  ],
  education: ['Add degree, certification, bootcamp, or relevant professional learning here.'],
} satisfies ResumeProfile;
