import { execFile } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  additionalItems,
  availability,
  experienceBullets,
  github,
  headline,
  linkedIn,
  phone,
  profile,
  projectBullets,
  projectDates,
  skills,
} from './resume-document.mjs';

const execFileAsync = promisify(execFile);
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { resume } = await import(pathToFileURL(resolve(repoRoot, 'src/data/resume.ts')).href);

const outputPath = resolve(repoRoot, 'public/resume.pdf');
const artifactDir = resolve(repoRoot, '.artifacts/resume-pdf');
const htmlPath = resolve(artifactDir, 'resume.html');

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
      <p class="headline">${escapeHtml(headline)}</p>
      <p class="contact-line">${contactLine}</p>
      <p class="contact-line">${escapeHtml(availability)}</p>
    </header>

    ${section('Profile', `<p class="summary">${escapeHtml(profile)}</p>`)}

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
        ${additionalItems
          .map((item) => `<span><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.text)}</span>`)
          .join('')}
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
