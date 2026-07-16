import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { CLASSES, CITIES, FAQS, IG_URL, waLink } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";
import Marquee from "./Marquee";
import FAQ from "./FAQ";
import CTA from "./CTA";
import FAQPageLd from "./jsonld/FAQPage";
import CourseLd from "./jsonld/Course";
import type { ReactNode } from "react";

type Props = {
  h1: string;
  kicker?: string;
  description: string;
  body?: string;
  classSlug?: string;
  citySlug?: string;
  related?: { href: string; label: string }[];
  ctaHref?: string;
  ctaLabel?: string;
  faqItems?: { q: string; a: string }[];
  children?: ReactNode;
};

export default function SeoLanding({
  h1,
  kicker,
  description,
  body,
  classSlug,
  citySlug,
  related,
  ctaHref,
  ctaLabel,
  faqItems,
}: Props) {
  const klass = classSlug ? CLASSES.find((c) => c.slug === classSlug) : null;
  const city = citySlug ? CITIES.find((c) => c.slug === citySlug) : null;
  const faqs = faqItems || FAQS.slice(0, 6);

  return (
    <>
      <CourseLd
        name={klass ? klass.seoH1 || klass.name : h1}
        description={description}
        city={city ? city.name : undefined}
      />
      <FAQPageLd items={faqs} />

      {/* Hero */}
      <section
        className="section"
        style={{ paddingTop: 140, paddingBottom: 60 }}
      >
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 920 }}>
            {kicker && (
              <div className="start-pill" style={{ marginBottom: 24 }}>
                <span className="pulse" />
                {kicker}
              </div>
            )}
            <h1
              className="display"
              style={{ fontSize: "clamp(48px, 7vw, 108px)", marginBottom: 32 }}
            >
              {h1}
            </h1>
            <p className="body-lede" style={{ maxWidth: 720, marginBottom: 28 }}>
              {description}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {ctaHref ? (
                <Link href={ctaHref} className="btn btn-wa">
                  {ctaLabel || "Get started"}
                </Link>
              ) : (
                <a
                  href={waLink(`Hi Komal, I'm interested in ${h1.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                >
                  <WhatsAppIcon />
                  Join via WhatsApp
                </a>
              )}
              <Link href="/" className="btn btn-ghost">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Body MDX */}
      {body ? (
        <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="wrap">
            <article
              className="prose prose-lg reveal"
              style={{
                maxWidth: 760,
                fontFamily: '"Inter Tight", sans-serif',
              }}
            >
              <MDXRemote source={body} />
            </article>
          </div>
        </section>
      ) : null}

      {/* If a class is associated, show its card-style summary */}
      {klass ? (
        <section
          className="section"
          style={{
            background: "#EDE3D2",
            borderTop: "1px solid rgba(43,38,32,0.12)",
          }}
        >
          <div className="wrap">
            <div className="rule reveal" style={{ marginBottom: 40 }}>
              <span>The class</span>
            </div>
            <div
              className="reveal"
              style={{
                background: "#F5EFE6",
                borderRadius: 24,
                padding: 36,
                border: "1px solid rgba(43,38,32,0.12)",
                maxWidth: 760,
              }}
            >
              <div className="eyebrow">{klass.tag} · {klass.duration}</div>
              <h2
                className="h-serif"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", marginTop: 14 }}
              >
                {klass.name}
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 17,
                  color: "#4A4138",
                  maxWidth: 600,
                }}
              >
                {klass.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 20,
                }}
              >
                {klass.good.map((g) => (
                  <span
                    key={g}
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 11,
                      color: "#7A6F62",
                      border: "1px solid rgba(43,38,32,0.12)",
                      padding: "5px 9px",
                      borderRadius: 999,
                    }}
                  >
                    {g}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={waLink(`Hi Komal, I'd like to book ${klass.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                >
                  <WhatsAppIcon />
                  Book {klass.name}
                </a>
                <Link href="/#classes" className="btn btn-ghost">
                  See all six classes →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Related links */}
      {related && related.length > 0 ? (
        <section className="section" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="wrap">
            <div className="rule reveal" style={{ marginBottom: 32 }}>
              <span>Related</span>
            </div>
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{
                    padding: "18px 20px",
                    borderRadius: 14,
                    border: "1px solid rgba(43,38,32,0.12)",
                    background: "#F5EFE6",
                    transition: "transform .25s ease, background .25s ease",
                    fontSize: 15,
                    fontFamily: '"Fraunces", serif',
                    letterSpacing: "-0.005em",
                  }}
                >
                  {r.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQ items={faqs} number="FAQ" />
      <CTA />
    </>
  );
}
