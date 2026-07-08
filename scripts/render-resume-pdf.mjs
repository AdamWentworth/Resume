import { execFile } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';

const execFileAsync = promisify(execFile);
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { resume } = await import(pathToFileURL(resolve(repoRoot, 'src/data/resume.ts')).href);

const outputPath = resolve(repoRoot, 'public/resume.pdf');
const artifactDir = resolve(repoRoot, '.artifacts/resume-pdf');
const htmlPath = resolve(artifactDir, 'resume.html');

const phone = '604-726-7888';
const github = 'github.com/AdamWentworth';
const linkedIn = 'linkedin.com/in/adam-john-wentworth';

const projectDates = new Map([
  ['Pokemon Go Nexus', 'September 2023 - Present'],
  ['WinRift', '2026 - Present'],
  ['Pokemon Autochess', 'April 2025 - Present'],
]);

const projectBullets = new Map([
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

const experienceBullets = new Map([
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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function textList(items) {
  return items.map(escapeHtml).join(', ');
}

function section(title, content) {
  return `<section><h2>${escapeHtml(title)}</h2>${content}</section>`;
}

function entry({ title, meta, stack, bullets }) {
  return `
    <article class="entry">
      <div class="entry-head">
        <h3>${escapeHtml(title)}</h3>
        <span>${escapeHtml(meta)}</span>
      </div>
      ${stack ? `<p class="stack">${escapeHtml(stack)}</p>` : ''}
      <ul>${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
    </article>
  `;
}

const skills = [
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

const projectEntries = resume.projects
  .map((project) =>
    entry({
      title: `${project.name} - ${project.role}`,
      meta: projectDates.get(project.name) ?? 'Selected project',
      stack: textList(project.technologies),
      bullets: projectBullets.get(project.name) ?? project.proof.slice(0, 2).map((proof) => proof.text),
    }),
  )
  .join('');

const visibleExperience = resume.experience.slice(0, 4);
const experienceEntries = visibleExperience
  .map((item) =>
    entry({
      title: `${item.title} - ${item.company}`,
      meta: `${item.location} | ${item.period}`,
      stack: textList(item.technologies),
      bullets: experienceBullets.get(item.title) ?? item.highlights.slice(0, 1),
    }),
  )
  .join('');

const educationEntries = resume.education
  .slice(0, 3)
  .map(
    (item) => `
      <div class="education-row">
        <strong>${escapeHtml(item.institution)}</strong>
        <span>${escapeHtml(item.credential)}</span>
        <span>${escapeHtml(item.period)}</span>
      </div>
    `,
  )
  .join('');

const contactLine = [
  'Vancouver, BC',
  phone,
  `<a href="mailto:${escapeHtml(resume.email)}">${escapeHtml(resume.email)}</a>`,
  `<a href="${escapeHtml(resume.siteUrl)}">${escapeHtml(resume.siteUrl.replace('https://', ''))}</a>`,
  `<a href="https://${escapeHtml(github)}">${escapeHtml(github)}</a>`,
  `<a href="https://${escapeHtml(linkedIn)}">${escapeHtml(linkedIn)}</a>`,
].join(' | ');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Adam Wentworth Resume</title>
    <style>
      @page {
        size: Letter;
        margin: 0.38in 0.42in;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #111827;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 8.55pt;
        line-height: 1.24;
      }

      header {
        text-align: center;
        border-bottom: 1.4px solid #111827;
        padding-bottom: 5px;
      }

      h1 {
        margin: 0 0 2px;
        font-size: 17pt;
        letter-spacing: 1.8px;
      }

      .headline,
      .contact-line {
        margin: 0;
      }

      .headline {
        font-weight: 700;
      }

      .contact-line {
        color: #374151;
        font-size: 8pt;
      }

      section {
        margin-top: 7px;
      }

      h2 {
        margin: 0 0 3px;
        border-bottom: 1px solid #9ca3af;
        color: #0f172a;
        font-size: 9.8pt;
        letter-spacing: 0.6px;
        text-transform: uppercase;
      }

      .summary {
        margin: 4px 0 0;
      }

      .skill-grid {
        display: grid;
        grid-template-columns: 116px 1fr;
        gap: 2px 8px;
      }

      .skill-grid strong {
        color: #0f172a;
      }

      .entry {
        margin-top: 4px;
      }

      .entry-head {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: baseline;
      }

      h3 {
        margin: 0;
        font-size: 9pt;
      }

      .entry-head span {
        color: #374151;
        font-size: 7.8pt;
        text-align: right;
        white-space: nowrap;
      }

      .stack {
        margin: 1px 0 0;
        color: #374151;
        font-size: 7.75pt;
        font-style: italic;
      }

      ul {
        margin: 1px 0 0 14px;
        padding: 0;
      }

      li {
        margin: 1px 0;
      }

      .education-row {
        display: grid;
        grid-template-columns: 82px 1fr auto;
        gap: 8px;
        margin-top: 2px;
      }

      .education-row span:last-child {
        color: #374151;
        white-space: nowrap;
      }

      .additional {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>${escapeHtml(resume.name)}</h1>
      <p class="headline">Software Engineer | Go Backends | C++ Systems | Full-Stack Products</p>
      <p class="contact-line">${contactLine}</p>
      <p class="contact-line">BCIT BSc Applied Computer Science, expected May 2027 | Seeking 2027 software engineering roles</p>
    </header>

    ${section(
      'Profile',
      `<p class="summary">Software engineer and BCIT Applied Computer Science student building full-stack products, Go services, C++ game systems, and AI-adjacent tooling. I use modern AI coding workflows to move faster while keeping ownership of design, testing, and production quality.</p>`,
    )}

    ${section(
      'Skills',
      `<div class="skill-grid">${skills
        .map(([label, items]) => `<strong>${escapeHtml(label)}</strong><span>${textList(items)}</span>`)
        .join('')}</div>`,
    )}

    ${section('Selected Projects', projectEntries)}

    ${section('Experience', experienceEntries)}

    ${section('Education', educationEntries)}

    ${section(
      'Additional',
      `<div class="additional">
        <span><strong>CaptainMonkHD:</strong> YouTube creator with 200k+ subscribers, Riot Games Partner, analytics-driven production, and brand partnerships.</span>
        <span><strong>Recording engineer:</strong> Client-facing studio work, Pro Tools sessions, signal flow, live-floor tracking, and technical troubleshooting.</span>
      </div>`,
    )}
  </body>
</html>`;

await mkdir(artifactDir, { recursive: true });
await writeFile(htmlPath, html, 'utf8');

await execFileAsync('google-chrome', [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  `--print-to-pdf=${outputPath}`,
  pathToFileURL(htmlPath).href,
]);

console.log(`Wrote ${outputPath}`);
