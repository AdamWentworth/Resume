import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { resume } from './resume';
import { customIconMap, customIconShapes, iconMap, imageIconMap } from './techIcons';

const publicPath = (href: string) => join(process.cwd(), 'public', href.replace(/^\//, ''));

const collectBadgeLabels = () =>
  new Set([
    ...resume.projects.flatMap((project) => project.technologies),
    ...resume.experience.flatMap((entry) => [...entry.technologies, ...(entry.featuredHighlights ?? [])]),
    ...resume.skills.flatMap((group) => group.items),
  ]);

const allHrefValues = () => [
  resume.siteUrl,
  resume.resumePdf.href,
  resume.portrait.src,
  ...resume.links.map((link) => link.href),
  ...resume.projects.flatMap((project) => (project.href ? [project.href] : [])),
  ...resume.experience.flatMap((entry) => (entry.companyHref ? [entry.companyHref] : [])),
  ...resume.education.map((entry) => entry.logo.src),
  ...Object.values(imageIconMap).map((icon) => icon.src),
];

describe('resume content contract', () => {
  it('keeps primary identity and contact fields populated', () => {
    expect(resume.name).toBe('Adam Wentworth');
    expect(resume.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(resume.siteUrl).toBe('https://adamwentworth.ca');
    expect(resume.resumePdf.href).toBe('/resume.pdf');
    expect(resume.links.map((link) => link.label)).toEqual(['Email', 'LinkedIn', 'GitHub']);
    expect(resume.links.filter((link) => link.prominent)).toHaveLength(3);
  });

  it('uses only supported href protocols and local absolute asset paths', () => {
    for (const href of allHrefValues()) {
      expect(href).toMatch(/^(https:\/\/|mailto:|\/)/);
    }

    for (const link of resume.links.filter((item) => item.external)) {
      expect(link.href).toMatch(/^https:\/\//);
    }
  });

  it('points local asset references at files in public', () => {
    const localAssets = [
      resume.resumePdf.href,
      resume.portrait.src,
      ...resume.education.map((entry) => entry.logo.src),
      ...Object.values(imageIconMap).map((icon) => icon.src),
    ];

    expect(localAssets).not.toHaveLength(0);
    for (const asset of localAssets) {
      expect(existsSync(publicPath(asset)), asset).toBe(true);
    }
  });

  it('keeps project case studies complete enough to render the expanded details UI', () => {
    expect(resume.projects.length).toBeGreaterThanOrEqual(3);

    for (const project of resume.projects) {
      expect(project.name).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.href).toMatch(/^https:\/\/github\.com\/AdamWentworth\//);
      expect(project.proof.length).toBeGreaterThanOrEqual(3);
      expect(new Set(project.proof.map((item) => item.label)).size).toBe(project.proof.length);
    }
  });

  it('has badge icon coverage for every visible tech or highlight label', () => {
    const missingIcons = [...collectBadgeLabels()].filter(
      (label) => !(label in iconMap) && !(label in customIconMap) && !(label in imageIconMap),
    );

    expect(missingIcons).toEqual([]);
  });

  it('has render data for each custom icon mapping', () => {
    const missingRenderData = Object.entries(customIconMap)
      .filter(([label, icon]) => !customIconShapes[icon.kind]?.length && !(label in imageIconMap))
      .map(([label, icon]) => `${label} (${icon.kind})`);

    expect(missingRenderData).toEqual([]);
  });

  it('keeps header anchors backed by sections on the page', () => {
    const headerSource = readFileSync(join(process.cwd(), 'src/components/SiteHeader.astro'), 'utf8');
    const renderedSectionSources = [
      'src/components/Hero.astro',
      'src/components/ContactFooter.astro',
      'src/pages/index.astro',
    ].map((path) => readFileSync(join(process.cwd(), path), 'utf8'));
    const sectionSource = renderedSectionSources.join('\n');
    const navAnchors = [...headerSource.matchAll(/href: '(#[a-z-]+)'/g)].map((match) => match[1]);

    expect(navAnchors).toEqual(['#summary', '#projects', '#skills', '#education', '#experience', '#contact']);
    for (const anchor of navAnchors) {
      expect(sectionSource).toContain(`id="${anchor.slice(1)}"`);
    }
  });
});
