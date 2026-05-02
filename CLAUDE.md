# Yoga with Komal — agent handoff

A Next.js 15 marketing site for a yoga teacher in Siliguri, India. Static-generated, programmatic-SEO heavy.

## What this is

Real teacher: Komal, instructor of embodied Hatha-Vinyasa, based in Siliguri. Instagram is `@releaseandrealize` (https://www.instagram.com/releaseandrealize/). She runs **group classes** (₹5,000 online / ₹6,000 offline per month), **1:1 sessions** (₹1,000/session), and **themed sessions** (Yoga Nidra, full/new moon gatherings, etc.). Classes begin **May 5, 2026**. The original Canva source: https://yoga-with-komal.my.canva.site/yoga-with-komal.

The previous static single-file `index.html` build is preserved at git tag `static-v1` for rollback.

## Stack

- Next.js **15.5.15** (App Router, static SSG, no ISR)
- React 19 + TypeScript 5
- Tailwind 3 (palette mirrored as theme tokens; original CSS-variable system layered in `app/globals.css`)
- MDX content: `gray-matter` + `next-mdx-remote/rsc`
- No DB, no CMS — all content is local files

## Directory map

```
app/
  layout.tsx                  Root layout (Nav, Footer, LocalBusiness JSON-LD on every page)
  page.tsx                    Homepage
  globals.css                 Tailwind layers + the design system (palette, btn, placeholder, marquee, reveal, responsive)
  sitemap.ts / robots.ts      Auto-generated for all routes
  [slug]/page.tsx             Standalone SEO landings, driven by SEO_LANDINGS in lib/data.ts
  yoga/[type]/[city]/page.tsx Matrix pages: 6 classes × 13 cities = 78 routes

components/                   All UI components, including Reveal (client) and Placeholder (renders <img> if src given, else striped fallback)
  jsonld/                     LocalBusiness, FAQPage, Course schema components
  SeoLanding.tsx              Shared template used by both [slug] and matrix pages

content/seo/                  MDX bodies for each /[slug] page (front-matter is informational only)
content/matrix/               Optional MDX overrides per (type, city) — `${type}--${city}.mdx` or `${type}--default.mdx`. Falls back to a generated body if missing.

lib/
  data.ts                     Single source of truth: SITE, WA_NUMBER, IG_URL, CLASSES, CITIES, SEO_LANDINGS, OFFERINGS, FAQS
  content.ts                  loadDoc / listDocs for MDX
  seo.ts                      pageMetadata helper

public/img/                   Photos (4 IG-carousel slides currently)
```

## Common tasks

### Add a new SEO landing under `/<slug>`
1. Append an entry to `SEO_LANDINGS` in `lib/data.ts` (`slug`, `title`, `h1`, `description`, optional `classSlug` + `citySlug` for related-link generation).
2. Drop a matching MDX file at `content/seo/<slug>.mdx` with `## H2` headings (Tailwind Typography handles styling).
3. `npm run build` — page generates automatically via `generateStaticParams`.

### Add a new city or class
- City: append to `CITIES` in `lib/data.ts`. Matrix routes for it auto-generate (×6).
- Class: append to `CLASSES` in `lib/data.ts`. Matrix routes auto-generate (×13). Add an entry on the homepage `Classes` section if you want it surfaced there (it's already mapped from `CLASSES`).

### Override a matrix page with custom copy
Drop `content/matrix/<class-slug>--<city-slug>.mdx`. Example: `content/matrix/slow-flow--siliguri.mdx`. The MDX body replaces the generated default.

### Replace placeholder photos
Drop a real image into `public/img/` and update the `src` prop on the relevant `<Placeholder>` (Hero, Practice, Offerings, Instagram, OFFERINGS data). Class cards in `lib/data.ts > CLASSES[i].src` would surface a class-specific photo if added.

## Open TODOs (high signal)

- `WA_NUMBER` in `lib/data.ts` is still `919999999999` placeholder. Must be replaced before launch.
- `SITE.url` is `https://yogawithkomal.com` — verify the actual production domain when known and update (it feeds canonicals, JSON-LD, sitemap, OG).
- All hero/about/offerings photos are 4 IG carousel slides with text overlays baked in. Clean photography would let the design breathe.
- A `prenatal-yoga` SEO landing was deliberately skipped because liability requires RYT-certified prenatal training. Confirm Komal's certifications before adding.
- Matrix pages (78 of them) currently share a generated body. Google will tolerate this for a while but unique copy per page eventually wins. Add MDX overrides as time allows.

## Conventions / gotchas

- **No em dashes (—) anywhere**, in chat output or in code/copy. User feedback rule. Use commas, periods, colons, or middle dots. (Also stored in user memory; respect it across edits.)
- **Section numbering** in eyebrow labels (`02 · What this is`, `03 · Two ways in`, etc.) is hand-maintained. If you insert a new section, renumber downstream.
- **Reveal animations** rely on the `.reveal` className being present and the client-side `<Reveal />` IO observer (mounted in root layout). Server components can use `.reveal` freely.
- **Responsive system** uses utility class hooks (`hero-grid`, `about-grid`, `ways-grid`, `who-grid`, `classes-head`, `classes-grid`, `class-card`, `offer-grid`, `offer-card`, `ig-grid`, `ig-head`, `faq-grid`, `faq-q`, `faq-sticky`, `foot-grid`, `hero-bottom`, `hero-card`, `display-name`, `stats-grid`, `nav-row`, `nav-cta`, `nav-burger`). All defined in `app/globals.css` under `@media (max-width: 980px / 680px / 420px)`.
- **Tone**: warm, first-person ("I teach", "Komal teaches"), women-friendly (Komal is a woman; the practice is held with women in mind). Avoid clinical claims (no medical promises around postpartum, PCOS, menopause — copy already frames these as supportive, not therapeutic).
- **Pune was an earlier wrong guess.** Studio is in **Siliguri, West Bengal**, near the airport at Bagdogra. Don't reintroduce Pune.

## Build & deploy

```sh
npm install
npm run build     # generates 100 static pages (1 home + 16 landings + 78 matrix + 5 utility)
npm run dev       # local dev server
```

GitHub: `github.com/yogeba/yogawithkomal` under the `yogeba` account (gh CLI keyring; use `gh auth switch -u yogeba` if needed). Vercel deploy is wired manually by the user; default Next.js preset works (no custom build command needed).

## Recent history

- `static-v1` tag — the original single-file React-via-CDN `index.html` build, before Next.js migration.
- `8aff934` — Next.js 15 + Tailwind + pSEO migration (this is HEAD as of the handoff).
