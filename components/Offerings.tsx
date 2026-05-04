"use client";
import { useState } from "react";
import Placeholder from "./Placeholder";
import WhatsAppIcon from "./WhatsAppIcon";
import { OFFERINGS, waLink } from "@/lib/data";

export default function Offerings() {
  return (
    <section id="offerings" className="section">
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56 }}>
          <span>04 · Offerings</span>
        </div>

        <div
          className="reveal ways-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 60,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
          <h2 className="h-serif" style={{ fontSize: "clamp(40px, 5.6vw, 72px)" }}>
            Ways to{" "}
            <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
              practice together.
            </span>
          </h2>
          <p className="body-lede" style={{ fontSize: 19 }}>
            Three doors in: group classes, 1:1 sessions, and themed gatherings.
            All three meet you where today actually is.
          </p>
        </div>

        <div
          className="offer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {OFFERINGS.map((o, i) => (
            <OfferCard key={o.name} o={o} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Offering = (typeof OFFERINGS)[number];

function OfferCard({ o, i }: { o: Offering; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="reveal offer-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#F5EFE6",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(43,38,32,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "transform .35s ease, box-shadow .35s ease",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover
          ? "0 22px 50px rgba(43,38,32,0.08)"
          : "0 1px 0 rgba(43,38,32,0.02)",
      }}
    >
      <Placeholder
        caption={o.img}
        src={(o as Offering & { src?: string }).src}
        alt={o.name}
        aspect="5/3"
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="eyebrow">
          {String(i + 1).padStart(2, "0")} · Offering
        </span>
      </div>

      <h3
        style={{
          fontFamily: '"Fraunces", serif',
          fontSize: 34,
          fontWeight: 350,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        {o.name}
      </h3>

      <p style={{ fontSize: 15, color: "#4A4138", fontStyle: "italic" }}>{o.sub}</p>

      <ul className="list-checks" style={{ gap: 10 }}>
        {o.bullets.map((b) => (
          <li key={b} style={{ fontSize: 14 }}>
            {b}
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "auto",
          paddingTop: 18,
          borderTop: "1px solid rgba(43,38,32,0.12)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {o.pricing.map((p) => (
          <div
            key={p.mode}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span style={{ fontSize: 13, color: "#7A6F62" }}>{p.mode}</span>
            <span>
              <span
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.price}
              </span>
              <span style={{ fontSize: 12, color: "#7A6F62", marginLeft: 6 }}>
                {p.per}
              </span>
            </span>
          </div>
        ))}
        <div style={{ fontSize: 12, color: "#7A6F62", fontStyle: "italic" }}>
          {o.note}
        </div>
      </div>

      <a
        href={waLink(o.waMsg)}
        target="_blank"
        rel="noopener"
        className="btn btn-wa"
        style={{ justifyContent: "center" }}
      >
        <WhatsAppIcon />
        Join via WhatsApp
        <span
          style={{
            transition: "transform .25s ease",
            transform: hover ? "translateX(4px)" : "none",
          }}
        >
          →
        </span>
      </a>
    </article>
  );
}
