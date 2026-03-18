# Luxury-Tech Portfolio

Next.js + TypeScript portfolio built to feel client-ready, fast, and product-led.

## Stack

- Next.js App Router
- TypeScript
- Framer Motion
- Data-driven content model
- Lazy-loaded Labs demos
- Mock-safe AI route handlers
- Vitest + Playwright scaffolding
- GitHub Actions CI

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

## Hosting note

Because this version includes Next.js route handlers for the Labs demos, it needs a serverless-friendly host such as Vercel or Netlify rather than GitHub Pages.

## Key folders

- `app/`: routes, metadata, API handlers
- `components/`: primitives, sections, and Labs demos
- `content/`: case studies, profile data, skills, testimonials, fixtures
- `lib/`: tokens, helpers, site config
- `docs/`: QA checklist and visual direction notes

## Environment variables

Optional:

```bash
OPENAI_API_KEY=your-key
OPENAI_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

If `OPENAI_API_KEY` is missing, the AI chat demo automatically runs in deterministic mock mode.

## Personalise it

Update:

- `content/profile.ts`
- `content/case-studies.ts`
- `content/testimonials.ts`
- `public/images/profile-placeholder.svg`
- `public/resume/senior-software-engineer-resume.pdf`

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```
