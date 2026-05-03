import WhatsAppIcon from "./WhatsAppIcon";
import { IG_URL, waLink } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="section"
      style={{ paddingTop: 140, paddingBottom: 40 }}
    >
      <div className="wrap">
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 56,
            alignItems: "end",
          }}
        >
          <div className="reveal">
            <h1
              className="display"
              style={{ fontSize: "clamp(56px, 8.4vw, 132px)" }}
            >
              Move with{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#C97B5A",
                  fontWeight: 300,
                }}
              >
                awareness.
              </span>
            </h1>

            <div
              className="hero-bottom"
              style={{
                marginTop: 36,
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 40,
                alignItems: "end",
              }}
            >
              <p className="body-lede" style={{ maxWidth: 520 }}>
                Embodied Hatha-Vinyasa, a practice that meets you where you
                are.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={waLink("Hi Komal, I'd like to join your practice.")}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                >
                  <WhatsAppIcon />
                  Join via WhatsApp
                </a>
                <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-ghost">
                  Explore on Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "3/4",
                borderRadius: 20,
                overflow: "hidden",
                background: "#EDE3D2",
              }}
            >
              <video
                src="/video/herovideo.mp4"
                poster="/img/bring-awareness.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Komal moving through a slow Hatha-Vinyasa sequence"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 13,
                color: "#7A6F62",
                fontFamily: '"JetBrains Mono", monospace',
                letterSpacing: "0.04em",
                textAlign: "center",
              }}
            >
              Group · 1:1 · Themed sessions
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
