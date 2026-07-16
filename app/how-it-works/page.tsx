import type { Metadata } from "next";
import Link from "next/link";
import { CHAIR_YOGA_COURSE, waLink } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CTA from "@/components/CTA";

export const metadata: Metadata = pageMetadata({
  title: "How It Works · Live Classes & AI-Assisted Form Review",
  description:
    "What's actually live, what's AI, and what's human-reviewed in a Yoga with Komal postpartum class. No overstatement, just how the pieces fit.",
  path: "/how-it-works",
});

const STEPS = [
  {
    n: 1,
    h: "The class is live, taught by Komal",
    p: "Every session is a real Zoom class with Komal teaching in real time, the same as any live online class. Nothing about the teaching itself is automated.",
  },
  {
    n: 2,
    h: "Between classes, you can record a short clip",
    p: "Pick a shape we've worked on, record 30 to 90 seconds of it on your phone, and send it in. This is optional and happens on your own time, not during class.",
  },
  {
    n: 3,
    h: "An AI pass reads the clip first",
    p: "Pose-detection software looks at the recording and drafts notes on alignment and possible corrections. This step is automated and it is a draft, not a verdict.",
  },
  {
    n: 4,
    h: "Komal reviews it before you see it",
    p: "The draft notes go to Komal, who checks them against what she knows about your practice and your week, before anything is sent back to you. You're never getting raw, unreviewed AI output.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 820 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              What&rsquo;s live, what&rsquo;s AI, what&rsquo;s Komal
            </div>
            <h1
              className="display"
              style={{ fontSize: "clamp(44px, 6.5vw, 92px)", marginBottom: 28 }}
            >
              How it actually works
            </h1>
            <p className="body-lede" style={{ maxWidth: 680 }}>
              We&rsquo;d rather explain this plainly than let you assume
              something we can&rsquo;t back up. Here&rsquo;s exactly what
              happens, in order.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="wrap">
          <div
            className="reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              maxWidth: 760,
              borderTop: "1px solid rgba(43,38,32,0.12)",
            }}
          >
            {STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(43,38,32,0.12)",
                }}
              >
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 13,
                    color: "#C97B5A",
                    flexShrink: 0,
                    paddingTop: 4,
                  }}
                >
                  {String(s.n).padStart(2, "0")}
                </span>
                <div>
                  <h2
                    className="h-serif"
                    style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
                  >
                    {s.h}
                  </h2>
                  <p style={{ marginTop: 10, fontSize: 15, color: "#4A4138", lineHeight: 1.7, maxWidth: 560 }}>
                    {s.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we won't claim */}
      <section
        className="section"
        style={{ background: "#EDE3D2", borderTop: "1px solid rgba(43,38,32,0.12)" }}
      >
        <div className="wrap">
          <div
            className="reveal"
            style={{
              background: "#F5EFE6",
              borderRadius: 20,
              padding: "32px 36px",
              maxWidth: 760,
              border: "1px solid rgba(43,38,32,0.12)",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              What we won&rsquo;t claim
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "That the AI corrects you in real time, during class. It doesn't, today.",
                "That a form review replaces your OB-GYN, midwife, or pelvic floor physiotherapist. It doesn't.",
                "That this treats or cures any condition. It's a supportive practice alongside your care team.",
              ].map((t) => (
                <li key={t} style={{ fontSize: 15, color: "#4A4138", paddingLeft: 20, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#C97B5A" }}>—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="reveal" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={waLink(CHAIR_YOGA_COURSE.waMsg)}
              target="_blank"
              rel="noopener"
              className="btn btn-wa"
            >
              <WhatsAppIcon />
              Ask a question first
            </a>
            <Link href={`/${CHAIR_YOGA_COURSE.slug}`} className="btn btn-ghost">
              See Chair Yoga Foundations →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
