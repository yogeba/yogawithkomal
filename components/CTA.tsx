import WhatsAppIcon from "./WhatsAppIcon";
import { IG_URL, waLink } from "@/lib/data";

export default function CTA() {
  return (
    <section
      className="section"
      style={{ background: "#C97B5A", color: "#F5EFE6", padding: "140px 0" }}
    >
      <div className="wrap" style={{ textAlign: "center" }}>
        <div
          className="reveal eyebrow"
          style={{ color: "rgba(245,239,230,0.7)" }}
        >
          The practice begins here
        </div>
        <h2
          className="display reveal"
          style={{
            fontSize: "clamp(56px, 9vw, 140px)",
            marginTop: 24,
            color: "#F5EFE6",
          }}
        >
          You don't have to
          <br />
          figure it all out.
          <br />
          <span style={{ fontStyle: "italic" }}>You just have to begin.</span>
        </h2>
        <p
          className="body-lede reveal"
          style={{
            color: "rgba(245,239,230,0.85)",
            margin: "32px auto 0",
            maxWidth: 560,
          }}
        >
          Classes begin May 5. Message me to reserve your spot or to ask anything.
        </p>
        <div
          className="reveal"
          style={{
            marginTop: 40,
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={waLink("Hi Komal, I'd like to begin.")}
            target="_blank"
            rel="noopener"
            className="btn"
            style={{
              background: "#F5EFE6",
              color: "#2B2620",
              padding: "16px 26px",
              fontSize: 16,
            }}
          >
            <WhatsAppIcon />
            Join via WhatsApp
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener"
            className="btn"
            style={{
              background: "transparent",
              color: "#F5EFE6",
              border: "1px solid rgba(245,239,230,0.45)",
              padding: "16px 26px",
              fontSize: 16,
            }}
          >
            Explore on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
