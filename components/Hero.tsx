import Eyebrow from "./Eyebrow";
import Placeholder from "./Placeholder";
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
            <Placeholder
              src="/img/bring-awareness.jpg"
              alt="Komal, riverside in Siliguri, holding a yoga mat"
              aspect="3/4"
            />
            <div
              className="hero-card"
              style={{
                position: "absolute",
                bottom: -30,
                left: -30,
                background: "#F5EFE6",
                padding: "16px 18px",
                borderRadius: 14,
                border: "1px solid rgba(43,38,32,0.12)",
                boxShadow: "0 14px 40px rgba(43,38,32,0.06)",
                maxWidth: 240,
              }}
            >
              <div className="eyebrow">A space to</div>
              <div
                className="display-name"
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontSize: 22,
                  marginTop: 6,
                  lineHeight: 1.2,
                }}
              >
                Move with awareness
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#7A6F62",
                  marginTop: 4,
                }}
              >
                Group · 1:1 · Themed sessions
              </div>
            </div>
          </div>
        </div>

        <div
          className="reveal stats-grid"
          style={{
            marginTop: 100,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            paddingTop: 32,
            borderTop: "1px solid rgba(43,38,32,0.12)",
          }}
        >
          {(
            [
              ["Make movement a part of your regime.", "Show up, gently, sustainably."],
              ["Build a supportive relationship with your body & mind.", "Listen rather than override."],
              ["Cultivate presence & awareness in your everyday life.", "Beyond the mat, into your day."],
            ] as const
          ).map(([h, s]) => (
            <div key={h}>
              <div
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontSize: 22,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                }}
              >
                {h}
              </div>
              <div style={{ fontSize: 13, color: "#7A6F62", marginTop: 8 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
