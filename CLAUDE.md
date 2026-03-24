# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local dev server at http://localhost:3000
npm run build        # Production build (runs tsc + Next.js build)
npm run lint         # ESLint

npx tsc --noEmit     # Type-check without emitting files (run before committing)
ANALYZE=true npm run build  # Bundle analyzer — opens browser report of client chunks
```

There are no tests. Always run `npx tsc --noEmit && npm run build` before committing to verify nothing is broken.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=        # From resend.com/api-keys — required for contact form
NEXT_PUBLIC_SANITY_PROJECT_ID=   # From sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
```

## Architecture

**Next.js 16 App Router** site — all pages are in `src/app/`, all static, except `/api/contact` (Node.js runtime) and `/og` (dynamic OG image).

### Metadata system

All page metadata flows through `src/lib/metadata.ts`:

- `buildMetadata({ titleAbsolute, description, path, noIndex? })` — use `titleAbsolute` to set the full `<title>` string as-is (bypasses any template suffix). Never use a title template in the root layout — there isn't one.
- `siteConfig` — exported singleton with site URL, author, social links used in JSON-LD schemas.
- Every page exports `export const metadata: Metadata = buildMetadata({...})`. The exception is `src/app/blog/[slug]/page.tsx` which uses `export async function generateMetadata()` because it resolves slug at request time.

### Blog posts

Blog posts are **hardcoded** in `src/app/blog/[slug]/page.tsx` inside the `allPosts` array — not Sanity-driven. Each post has `slug`, `metaTitle`, `metaDescription`, `title`, `excerpt`, `date`, `dateISO`, `readTime`, and `body` (array of paragraph strings). The blog listing page metadata lives in `src/app/blog/layout.tsx`.

### Sanity Studio

Embedded at `/studio` — the route is `src/app/studio/[[...tool]]/page.tsx`. Sanity is currently only used for the studio interface; blog content is not yet fetched from Sanity (it's hardcoded). Sanity image CDN (`cdn.sanity.io`) is whitelisted in `next.config.ts`.

### Design system

`src/app/globals.css` defines all design tokens as CSS custom properties under `:root` (dark mode default) and `[data-theme="light"]`:

- Colors: `--color-bg`, `--color-surface`, `--color-surface-2`, `--color-border`, `--color-text-primary/secondary/muted`, `--color-accent` (`#6C63FF` violet), etc.
- Shadows: `--shadow-sm/md/lg/accent`
- Radii: `--radius-sm/md/lg/xl/full`
- Motion: `--ease` (250ms), `--ease-fast` (150ms)

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`: Sora (display/headings), DM Sans (body), JetBrains Mono (code). CSS variables `--font-sora`, `--font-dm-sans`, `--font-jetbrains` are injected and registered in `@theme inline` as `--font-display`, `--font-body`, `--font-mono`.

All styling uses CSS custom properties directly in `style={{}}` props — **not Tailwind utility classes** for component-level styles. Tailwind v4 is present primarily for layout utilities and the typography plugin (`@tailwindcss/typography`).

### SEO infrastructure

- `src/lib/schema.ts` — JSON-LD schema factories: `personSchema()`, `websiteSchema()`, `serviceSchema()`, `blogPostSchema()`, `faqSchema()`
- `src/components/seo/JsonLd.tsx` — renders JSON-LD `<script>` tags in `<head>` via `src/app/layout.tsx`
- `src/app/robots.ts` — disallows `/studio/` and `/api/`; crawling gated by `process.env.VERCEL_ENV === 'production'` in root layout
- `src/app/sitemap.ts` — hardcoded sitemap; update `lastModified` when pages change
- `src/app/og/route.tsx` — dynamic OG image generation endpoint

### Contact form

`src/app/api/contact/route.ts` — POST endpoint using Resend. Sends two emails: notification to site owner + confirmation to submitter. Gracefully degrades to 503 if `RESEND_API_KEY` is absent.

### Redirects

WWW → non-WWW redirect defined in **both** `next.config.ts` (for Next.js middleware) and `vercel.json` (for Vercel edge). Don't remove either — they serve different execution contexts.

### Favicon assets

All favicon files live in `public/`. The `src/app/favicon.ico` in the app directory takes highest priority in Next.js App Router and overrides `public/`. `scripts/generate-icons.mjs` regenerates PNG/ICO from `public/favicon.svg` using `sharp`.
