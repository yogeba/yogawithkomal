"use client";
import { useState } from "react";
import Placeholder from "./Placeholder";
import { CLASSES, waLink, type ClassEntry } from "@/lib/data";

export default function Classes() {
  return (
    <section
      id="classes"
      className="section"
      style={{
        background: "#EDE3D2",
        borderTop: "1px solid rgba(43,38,32,0.12)",
      }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56 }}>
          <span>05 · Classes</span>
        </div>

        <div
          className="reveal classes-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 60,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
          <h2 className="h-serif" style={{ fontSize: "clamp(40px, 5.6vw, 76px)" }}>
            Six ways in.
            <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
              {" "}One practice.
            </span>
          </h2>
          <p className="body-lede" style={{ fontSize: 19 }}>
            Whether you've never touched a mat or you've been holding crow for a
            decade, there's a shape of practice here that meets you where today
            actually is.
          </p>
        </div>

        <div
          className="classes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 28,
          }}
        >
          {CLASSES.map((c, i) => (
            <ClassCard key={c.slug} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassCard({ c, i }: { c: ClassEntry; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="reveal class-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#F5EFE6",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(43,38,32,0.12)",
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 24,
        transition: "transform .35s ease, box-shadow .35s ease",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover
          ? "0 22px 50px rgba(43,38,32,0.08)"
          : "0 1px 0 rgba(43,38,32,0.02)",
      }}
    >
      <Placeholder caption={c.img} src={c.src} aspect="4/5" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span className="eyebrow">
            {String(i + 1).padStart(2, "0")} · {c.tag}
          </span>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              color: "#7A6F62",
            }}
          >
            {c.duration}
          </span>
        </div>

        <h3
          style={{
            fontFamily: '"Fraunces", serif',
            fontSize: 40,
            fontWeight: 350,
            letterSpacing: "-0.02em",
            marginTop: 12,
            lineHeight: 1.05,
          }}
        >
          {c.name}
        </h3>

        <p style={{ fontSize: 15, color: "#4A4138", marginTop: 12, flex: 1 }}>
          {c.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {c.good.map((g) => (
            <span
              key={g}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 10.5,
                letterSpacing: "0.04em",
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
            marginTop: 22,
            paddingTop: 18,
            borderTop: "1px solid rgba(43,38,32,0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "#7A6F62" }}>{c.level}</span>
          <a
            href={waLink(`Hi Komal, I'd like to book ${c.name}.`)}
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "#2B2620",
              fontWeight: 500,
            }}
          >
            Book on WhatsApp
            <span
              style={{
                transition: "transform .25s ease",
                transform: hover ? "translateX(4px)" : "none",
              }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
