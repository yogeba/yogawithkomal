import type { Metadata } from "next";
import Link from "next/link";
import { CHAIR_YOGA_COURSE, SENIORS_MEMBERSHIP, waLink } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import BuyCourseButton from "@/components/BuyCourseButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import CourseLd from "@/components/jsonld/Course";
import FAQPageLd from "@/components/jsonld/FAQPage";

export const metadata: Metadata = pageMetadata({
  title: "Chair Yoga Foundations · A Gentle Start, Taught Seated",
  description:
    "A self-paced chair yoga course for gentler mornings, no floor work required. $49, with an optional props-pack add-on.",
  path: `/${CHAIR_YOGA_COURSE.slug}`,
});

const course = CHAIR_YOGA_COURSE;
const membership = SENIORS_MEMBERSHIP;

const FAQ_ITEMS = [
  {
    q: "Do I need to get down on the floor for any of this?",
    a: "No. Every module is taught seated in a sturdy chair. If a shape has a standing option, it's always optional and always chair-supported.",
  },
  {
    q: "Is this safe if I have arthritis, balance issues, or I'm recovering from surgery?",
    a: "Please check with your own doctor before starting, this course (like anything on this site) isn't medical advice. That said, it's built slowly on purpose: breath and seated setup first, standing work only as an optional, supported add-on later.",
  },
  {
    q: "What's the difference between this course and the live membership?",
    a: course.upsell,
  },
  {
    q: "What's in the Props Pack add-on?",
    a: course.bundle.note,
  },
  {
    q: "Is this really taught by a real person?",
    a: "Yes. Komal teaches every session herself, from Siliguri, India. See her practice on Instagram, linked in the footer.",
  },
];

export default function ChairYogaFoundationsPage() {
  return (
    <>
      <CourseLd name={course.name} description={course.sub} />
      <FAQPageLd items={FAQ_ITEMS} />
      <section className="section" style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 860 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Self-paced · seated · start today
            </div>
            <h1
              className="display"
              style={{ fontSize: "clamp(44px, 6.5vw, 92px)", marginBottom: 28 }}
            >
              {course.name}
            </h1>
            <p className="body-lede" style={{ maxWidth: 660, marginBottom: 32 }}>
              {course.sub} Four short modules, watch them whenever your
              morning has room, no live class required.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="wrap">
          <div
            className="offer-grid reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            <div
              className="offer-card"
              style={{
                background: "#F5EFE6",
                border: "1px solid rgba(43,38,32,0.12)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <h2 className="h-serif" style={{ fontSize: "clamp(26px, 3vw, 32px)" }}>
                Course only
              </h2>
              <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: '"Fraunces", serif', fontSize: 40, color: "#C97B5A" }}>
                  {course.price}
                </span>
                <span style={{ fontSize: 14, color: "#7A6F62" }}>one time</span>
              </div>
              <p style={{ marginTop: 18, fontSize: 15, color: "#4A4138" }}>
                All four modules, yours to keep, watch at your own pace.
              </p>
              <BuyCourseButton
                bundle={false}
                label={`Get the course · ${course.price}`}
                className="btn btn-wa"
                style={{ marginTop: 28, width: "100%", justifyContent: "center" }}
              />
            </div>

            <div
              className="offer-card"
              style={{
                background: "#EDE3D2",
                border: "1px solid rgba(43,38,32,0.2)",
                borderRadius: 24,
                padding: 36,
              }}
            >
              <h2 className="h-serif" style={{ fontSize: "clamp(26px, 3vw, 32px)" }}>
                Course + {course.bundle.name}
              </h2>
              <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: '"Fraunces", serif', fontSize: 40, color: "#C97B5A" }}>
                  {course.bundle.bundlePrice}
                </span>
                <span style={{ fontSize: 14, color: "#7A6F62" }}>one time</span>
              </div>
              <p style={{ marginTop: 18, fontSize: 15, color: "#4A4138" }}>
                {course.bundle.note}
              </p>
              <BuyCourseButton
                bundle={true}
                label={`Get course + pack · ${course.bundle.bundlePrice}`}
                className="btn btn-wa"
                style={{ marginTop: 28, width: "100%", justifyContent: "center" }}
              />
            </div>
          </div>

          <p className="reveal" style={{ marginTop: 28, fontSize: 13, color: "#7A6F62", maxWidth: 620 }}>
            Prefer a gift? Message on WhatsApp and we&rsquo;ll send a
            printable card to go along with it.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section
        className="section"
        style={{ background: "#EDE3D2", borderTop: "1px solid rgba(43,38,32,0.12)", paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="wrap">
          <div className="rule reveal" style={{ marginBottom: 32 }}>
            <span>What&rsquo;s inside</span>
          </div>
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", maxWidth: 760, borderTop: "1px solid rgba(43,38,32,0.12)" }}
          >
            {course.modules.map((m) => (
              <div
                key={m.n}
                style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(43,38,32,0.12)" }}
              >
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: "#C97B5A", paddingTop: 4 }}>
                  {String(m.n).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="h-serif" style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}>
                    {m.h}
                  </h2>
                  <p style={{ marginTop: 8, fontSize: 15, color: "#4A4138" }}>{m.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership upsell mention, honest framing, no hype */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
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
              Want live classes too?
            </div>
            <p style={{ fontSize: 16, color: "#4A4138", lineHeight: 1.7, marginBottom: 8 }}>
              {membership.schedule} {membership.introNote}
            </p>
            <p style={{ fontSize: 13, color: "#7A6F62", marginBottom: 20 }}>
              {membership.totalMemberCapNote}
            </p>
            <a
              href={waLink(membership.waMsg)}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost"
            >
              Ask about the membership →
            </a>
          </div>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} number="FAQ" />

      <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <div className="reveal" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={waLink(course.waMsg)}
              target="_blank"
              rel="noopener"
              className="btn btn-wa"
            >
              <WhatsAppIcon />
              Ask a question first
            </a>
            <Link href="/how-it-works" className="btn btn-ghost">
              How the AI review works →
            </Link>
            <Link href="/chair-yoga-for-seniors" className="btn btn-ghost">
              Is this right for my parent? →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
