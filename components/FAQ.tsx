"use client";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { FAQS, waLink } from "@/lib/data";

export default function FAQ({
  items = FAQS,
  number = "09",
}: {
  items?: { q: string; a: string }[];
  number?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="section"
      style={{ background: "#F5EFE6" }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56 }}>
          <span>{number} · Questions</span>
        </div>

        <div
          className="faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 80,
          }}
        >
          <div
            className="reveal faq-sticky"
            style={{ position: "sticky", top: 110, alignSelf: "start" }}
          >
            <h2 className="h-serif" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
              Things people ask{" "}
              <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
                before they begin.
              </span>
            </h2>
            <p
              style={{ marginTop: 24, color: "#4A4138", maxWidth: 380 }}
            >
              Don't see your question? Message me directly, I read every note.
            </p>
            <a
              href={waLink("Hi Komal, I have a question.")}
              target="_blank"
              rel="noopener"
              className="btn btn-wa"
              style={{ marginTop: 24 }}
            >
              <WhatsAppIcon />
              Ask on WhatsApp →
            </a>
          </div>

          <div
            className="reveal"
            style={{ borderTop: "1px solid rgba(43,38,32,0.12)" }}
          >
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid rgba(43,38,32,0.12)" }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="faq-q"
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "26px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 24,
                      fontFamily: '"Fraunces", serif',
                      fontSize: 22,
                      letterSpacing: "-0.01em",
                      color: "#2B2620",
                    }}
                  >
                    <span style={{ flex: 1, textWrap: "balance" }}>{f.q}</span>
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1px solid rgba(43,38,32,0.12)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        fontWeight: 300,
                        transition:
                          "transform .3s ease, background .3s ease, color .3s ease",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        background: isOpen ? "#2B2620" : "transparent",
                        color: isOpen ? "#F5EFE6" : "#2B2620",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows .35s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          paddingBottom: 28,
                          color: "#4A4138",
                          fontSize: 16,
                          maxWidth: 620,
                        }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
