# Yoga with Komal — agent handoff

A Next.js 15 marketing site for a yoga teacher in Siliguri, India. Static-generated, programmatic-SEO heavy.

## What this is

Real teacher: Komal, instructor of embodied Hatha-Vinyasa, based in Siliguri. Instagram is `@releaseandrealize` (https://www.instagram.com/releaseandrealize/). She runs **group classes** (₹5,000 online / ₹6,000 offline per month), **1:1 sessions** (₹1,000/session), and **themed sessions** (Yoga Nidra, full/new moon gatherings, etc.). The original Canva source: https://yoga-with-komal.my.canva.site/yoga-with-komal.

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

## Western growth line (new, in progress)

A second product line is being scoped: paid live online yoga + AI-assisted form feedback, sold to US/Europe customers who can't get to a studio. This is additive to the existing India-market site, not a replacement for it. Full research, decision log, and revenue model live in `docs/growth-plan.md` — this section is just the pointer + current state.

- **Adjacent codebase**: `/Users/yogeba/Code/Bee` (MediaPipe + Gemini pose analysis). Current state is async only: record a clip, it goes to Gemini's Files API, a JSON review comes back later. No live/real-time correction, no multi-user session model exists yet. Never market this as "real-time AI correction," it isn't, today.
- **ICP**: started with postpartum, deprioritized (not a liability call, Komal doesn't have postnatal-specific teaching expertise yet; a self-study roadmap toward it is in `docs/growth-plan.md`). Current data-backed primary pick is **chair yoga for homebound seniors** (60,500-110,000/mo search volume on root terms vs 3,600/mo postnatal). Same caveat applies here: Komal isn't senior/adaptive-yoga certified either. That expertise gap, not the market, is the real recurring blocker across every ICP considered so far.
- **Payments**: unresolved. A Stripe account exists; its registration country and whether it's already processed international (non-INR) charges haven't been confirmed. That answer decides between using Stripe directly (Checkout + Billing + Tax) or routing through Paddle as merchant-of-record (India-registered Stripe accounts are invite-only, carry ~6% all-in cross-border fees, and lack native EU local payment methods like iDEAL).
- **Live now**: `/chair-yoga-foundations` ($49 course + $19 order-bump bundle, Stripe Checkout via `app/api/checkout`, webhook at `app/api/webhooks/stripe`, payment-verified access page), `/chair-yoga-for-seniors` (real pillar SEO page, not matrix-generated), `/how-it-works` (honest live-class + async-AI-review explainer), `/terms` `/privacy` `/refund-policy`. `/postpartum-yoga-online` is **retired** — permanent redirect to `/` in `next.config.mjs`; `/postpartum-yoga-diastasis-recti` stays as supportive SEO content only, no longer linked to a paid offer.
- **Growth bet, gated (not yet live)**: POTS/dysautonomia. Real market validated (durable multi-year paid competitors, ~5x post-COVID diagnosis growth) but gated behind Komal's self-study + teaching free sessions to real patients first — see `docs/growth-plan.md` section 5a. Do not build a POTS-specific page before that gate clears; when it does, reuse the existing Stripe/checkout infrastructure rather than building new.
- **Not yet built**: the `SENIORS_MEMBERSHIP` live-class checkout/Cal.com wiring (course ships first), the "Chair Yoga Club" async-review recurring tier (the actual MRR lever — see growth-plan.md section on MRR), any POTS-facing page (gated, see above).
- **Hard operating constraint**: Komal teaches at most 2 live sessions/day (1 group, 1 1:1) — caps live-teaching revenue at ~$2,480/mo fully booked. This is why recurring revenue has to come from a low-cost async-review subscription decoupled from live hours, not from live classes themselves. See `docs/growth-plan.md`.
- **Payments still unconfirmed**: a Stripe account exists; registration country and international-charge history have never been confirmed despite repeated asks. This blocks real checkout regardless of ICP — resolve before assuming the built checkout flow actually works for a real US customer.

## Open TODOs (high signal)

- `WA_NUMBER` in `lib/data.ts` is a real number now, no longer the placeholder — this line is stale, kept for history.
- `SITE.url` is now `https://www.komal.yoga` in `lib/data.ts` — this line is stale too, the domain question is resolved.
- All hero/about/offerings photos are 4 IG carousel slides with text overlays baked in. Clean photography would let the design breathe.
- A `prenatal-yoga` SEO landing was deliberately skipped because liability requires RYT-certified prenatal training. Confirm Komal's certifications before adding. The same open question now applies to postnatal and to any senior/adaptive-specific claim (see Western growth line above).
- Matrix pages (78 of them) currently share a generated body. Google will tolerate this for a while but unique copy per page eventually wins. Add MDX overrides as time allows.
- **Confirm the Stripe account's registration country and international-charge history** — blocks the Paddle-vs-direct-Stripe decision for the Western growth line.
- **Decide and build the seniors flagship page** once the above is resolved, and downgrade `/postpartum-yoga-online` to a waitlist page rather than the lead offer.

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
- 2026-07-16 — Western growth line scoped: full ICP/competitor/geo/payments/content research, two advisor ("Fable") passes, and the first-cut postpartum pages built before the ICP pivoted to chair-yoga-for-seniors on search-volume data. See `docs/growth-plan.md` for the full decision log and the pathway to the first $10k.
