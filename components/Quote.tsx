export default function Quote() {
  return (
    <section
      className="section"
      style={{
        background: "#EDE3D2",
        borderTop: "1px solid rgba(43,38,32,0.12)",
      }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 48 }}>
          <span>07 · A note</span>
        </div>
        <h2
          className="h-serif reveal"
          style={{ fontSize: "clamp(40px, 6vw, 84px)", maxWidth: 980 }}
        >
          Moving with awareness
          <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
            {" "}changes how you experience{" "}
          </span>
          life.
        </h2>
        <div
          className="reveal who-grid"
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {[
            "Make movement a part of your regime.",
            "Build a supportive relationship with your body & mind.",
            "Cultivate presence & awareness in your everyday life.",
          ].map((t, i) => (
            <div
              key={i}
              style={{
                padding: 24,
                borderRadius: 20,
                border: "1px solid rgba(43,38,32,0.12)",
                background: "#F5EFE6",
              }}
            >
              <div className="eyebrow">{String(i + 1).padStart(2, "0")}</div>
              <p
                style={{
                  marginTop: 12,
                  fontFamily: '"Fraunces", serif',
                  fontSize: 22,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                }}
              >
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
