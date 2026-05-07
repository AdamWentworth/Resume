# adamwentworth.ca

Personal resume and portfolio website for Adam Wentworth. The site is a static Astro build with a polished one-page resume layout, anchor navigation, SEO metadata, sitemap generation, and a downloadable resume PDF link.

## Tech Stack

- Astro
- TypeScript
- Plain CSS
- Vercel-ready static output

## Content Editing

Primary profile content lives in `src/data/resume.ts`.

Update that file to replace the draft resume copy with Adam's final:

- contact email and social URLs
- resume summary and profile highlights
- work experience entries
- selected projects
- skill groups
- education or credentials

Replace `public/resume.pdf` with the final PDF resume before launch.

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Deployment

Deploy the repo to Vercel and point `adamwentworth.ca` at the project. Astro sitemap output is configured with `site: "https://adamwentworth.ca"` in `astro.config.mjs`, and `public/robots.txt` points crawlers at the generated sitemap index.
