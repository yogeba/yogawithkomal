# Handoff prompt

Paste this as the opening message of a fresh session (new agent, or a developer) to continue this work with no prior context needed beyond what's in the repo.

---

You're continuing work on `yogawithkomal.com` (Next.js 15, App Router), the site for Komal, a real Hatha-Vinyasa yoga teacher in Siliguri, India. Read `CLAUDE.md` first (repo conventions, tone rules, directory map), then `docs/growth-plan.md` (the full decision log for a second product line — read this before touching anything related to the US market work, it explains *why*, not just *what*).

**One-paragraph state of play**: alongside the existing India-market site (78 city×class matrix pages + 16 SEO landings, all live and unchanged), a second line was scoped and partly built: paid online yoga for Western (US) customers who can't get to a studio. After five rounds of research and advisory passes, the live decision is: **chair-yoga-for-homebound-seniors ships as the flagship** ($49 self-paced course + checkout, live and building clean), **POTS/dysautonomia is a validated but gated future growth bet** (real demand, but Komal needs to self-study and teach free sessions to real patients before any paid POTS page goes live), and **postpartum was retired** (redirects to `/`) after being deprioritized twice. A hard operating constraint shapes everything: Komal caps herself at 2 live sessions/day, capping live-teaching revenue at ~$2,480/mo — which is why the $49 course, not live classes, is the actual growth lever, and why real MRR requires a low-cost async-review subscription tier ("Chair Yoga Club," not yet built) decoupled from her live hours.

**What's live in the repo right now**: `/chair-yoga-foundations` (course sales page, Stripe Checkout + webhook + payment-verified access page), `/chair-yoga-for-seniors` (hand-written pillar SEO page, not matrix-generated), `/how-it-works` (honest live-class + async-AI-review explainer — the AI is real but async/human-reviewed, never claim real-time), `/terms` `/privacy` `/refund-policy`. Data models: `CHAIR_YOGA_COURSE`, `SENIORS_MEMBERSHIP` in `lib/data.ts`.

**The one thing blocking real revenue**: a Stripe account exists but its registration country and international-charge history have never been confirmed, despite being asked repeatedly. This determines whether the built Stripe Checkout code actually works for a US customer, or whether it needs to route through a merchant-of-record (Paddle) instead. Resolve this before assuming anything downstream works. See `.env.example` for the env vars the checkout code needs (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and two Stripe Price IDs).

**Standing rules that came out of hard-won corrections, don't re-litigate these**:
- No manufactured urgency/hype in marketing copy ("founding cohort," fake headcounts) — this audience (a 45-60 year old daughter buying for a homebound parent) converts on trust, not FOMO. Confirmed by two independent advisory passes.
- Never overclaim the AI as real-time — it's async, human-reviewed. This is a real constraint of the underlying tech (`/Users/yogeba/Code/Bee`), not just a legal hedge.
- Any new condition/population-specific page needs an honest, explicit comparison against existing free alternatives (SilverSneakers, nonprofit live-Zoom programs, etc.) — every niche checked so far had free competition that was initially underestimated.
- No new ICP gets evaluated before the POTS waitlist test (gated, see above) resolves. This was an explicit stopping point after five strategy passes — the risk at this stage is never shipping, not picking the wrong niche.

**Immediate next actions, in order**: (1) resolve the Stripe question, (2) if resolved cleanly, wire real Stripe Price IDs and test a real checkout end to end, (3) build the "Chair Yoga Club" async-review recurring tier (the actual MRR lever, currently unbuilt), (4) do not touch POTS until Komal has completed her self-study gate (see `docs/growth-plan.md` section 5a for the exact checklist).
