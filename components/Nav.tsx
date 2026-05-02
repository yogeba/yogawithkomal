"use client";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: [string, string][] = [
    ["The practice", "/#practice"],
    ["For you", "/#who"],
    ["Classes", "/#classes"],
    ["Offerings", "/#offerings"],
    ["FAQ", "/#faq"],
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: scrolled || open ? "blur(14px) saturate(120%)" : "none",
        background: scrolled || open ? "rgba(245,239,230,0.85)" : "transparent",
        borderBottom:
          scrolled || open
            ? "1px solid var(--line-soft)"
            : "1px solid transparent",
        transition: "all .35s ease",
      }}
    >
      <div
        className="wrap nav-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
        }}
      >
        <a
          href="/#top"
          onClick={() => setOpen(false)}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "var(--terracotta, #C97B5A)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5EFE6",
              fontFamily: '"Fraunces", serif',
              fontSize: 16,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            k
          </span>
          <span
            style={{
              fontFamily: '"Fraunces", serif',
              fontSize: 19,
              letterSpacing: "-0.01em",
            }}
          >
            Yoga with Komal
          </span>
        </a>

        <div
          className="nav-right"
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          <nav
            style={{ display: "flex", gap: 28, alignItems: "center" }}
            className="nav-links"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{ fontSize: 14, color: "var(--ink-soft, #4A4138)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={waLink("Hi Komal, I'd like to join your practice.")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary nav-cta"
            style={{ padding: "10px 18px", fontSize: 14 }}
          >
            Join via WhatsApp
            <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="nav-burger"
            aria-label="Menu"
            style={{
              display: "none",
              width: 44,
              height: 44,
              borderRadius: 999,
              border: "1px solid rgba(43,38,32,0.12)",
              alignItems: "center",
              justifyContent: "center",
              background: open ? "#2B2620" : "transparent",
              color: open ? "#F5EFE6" : "#2B2620",
              transition: "all .25s ease",
            }}
          >
            <div style={{ width: 18, height: 12, position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 1.5,
                  background: "currentColor",
                  top: open ? 5 : 0,
                  transform: open ? "rotate(45deg)" : "none",
                  transition: "all .3s ease",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 1.5,
                  background: "currentColor",
                  bottom: open ? 5 : 0,
                  transform: open ? "rotate(-45deg)" : "none",
                  transition: "all .3s ease",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className="nav-drawer"
        style={{
          maxHeight: open ? "80vh" : 0,
          overflow: "hidden",
          transition: "max-height .4s cubic-bezier(.2,.6,.2,1)",
        }}
      >
        <div
          style={{
            padding: "8px 32px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Fraunces", serif',
                fontSize: 32,
                fontWeight: 350,
                letterSpacing: "-0.01em",
                padding: "12px 0",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={waLink("Hi Komal, I'd like to join your practice.")}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="btn btn-wa"
            style={{ marginTop: 20, justifyContent: "center" }}
          >
            Join via WhatsApp →
          </a>
        </div>
      </div>
    </header>
  );
}
