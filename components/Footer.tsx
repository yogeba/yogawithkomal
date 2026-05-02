import { IG_URL, waLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#2B2620", color: "#EDE3D2", padding: "80px 0 32px" }}>
      <div className="wrap">
        <div
          className="foot-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#C97B5A",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5EFE6",
                  fontFamily: '"Fraunces", serif',
                  fontStyle: "italic",
                }}
              >
                k
              </span>
              <span style={{ fontFamily: '"Fraunces", serif', fontSize: 22 }}>
                Yoga with Komal
              </span>
            </div>
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                color: "rgba(245,239,230,0.65)",
                maxWidth: 320,
              }}
            >
              A space to move with awareness and come back home to yourself.
              Embodied Hatha-Vinyasa, online & in person.
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "#C97B5A" }}>
              Practice
            </div>
            <ul
              style={{
                listStyle: "none",
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 14,
              }}
            >
              <li>
                <a href="/#practice">What this is</a>
              </li>
              <li>
                <a href="/#who">Who this is for</a>
              </li>
              <li>
                <a href="/#classes">Classes</a>
              </li>
              <li>
                <a href="/#offerings">Offerings</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "#C97B5A" }}>
              Find me
            </div>
            <ul
              style={{
                listStyle: "none",
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 14,
              }}
            >
              <li>
                <a href={IG_URL} target="_blank" rel="noopener">
                  Instagram · @releaseandrealize
                </a>
              </li>
              <li>
                <a href={waLink("Hi Komal!")} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="/yoga-in-siliguri">Yoga in Siliguri</a>
              </li>
              <li>
                <a href="/online-yoga-india">Online classes</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "#C97B5A" }}>
              Begin
            </div>
            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                color: "rgba(245,239,230,0.7)",
                lineHeight: 1.6,
              }}
            >
              Classes begin May 5.
              <br />
              Offline in Siliguri + online.
              <br />
              Message to reserve your spot.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid rgba(245,239,230,0.1)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 12,
            color: "rgba(245,239,230,0.5)",
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          <span>© 2026 Yoga with Komal · All rights reserved</span>
          <span>Made slowly.</span>
        </div>
      </div>
    </footer>
  );
}
