export default function Ways() {
  const ways = [
    {
      n: "01",
      title: "The Observer",
      lede: "You notice how you're showing up, your patterns, your roles, your habitual ways of being. And gently, you step back. You witness, without judgement.",
      body: "The ability to watch yourself, while still being in the experience, creates space.",
      list: [
        "See clearly.",
        "Release what no longer serves.",
        "Embrace authenticity & alignment.",
      ],
    },
    {
      n: "02",
      title: "The Immersion",
      lede: "At times you become fully absorbed in what you're doing. No overthinking. No separation. Just presence.",
      body: "Every moment of such movement:",
      list: [
        "Restores your energy.",
        "Nourishes your creativity.",
        "Brings you fully into the experience.",
      ],
    },
  ];

  return (
    <section
      className="section"
      style={{
        background: "#EDE3D2",
        borderTop: "1px solid rgba(43,38,32,0.12)",
      }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56 }}>
          <span>03 · Two ways in</span>
        </div>

        <h2
          className="h-serif reveal"
          style={{
            fontSize: "clamp(40px, 5.6vw, 72px)",
            maxWidth: 920,
            marginBottom: 64,
          }}
        >
          Two ways you begin to{" "}
          <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
            experience yourself
          </span>{" "}
          in this practice.
        </h2>

        <div
          className="ways-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 28,
          }}
        >
          {ways.map((w) => (
            <article
              key={w.n}
              className="reveal"
              style={{
                background: "#F5EFE6",
                borderRadius: 24,
                padding: 36,
                border: "1px solid rgba(43,38,32,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 12,
                  color: "#A85F40",
                  letterSpacing: "0.18em",
                }}
              >
                {w.n}
              </div>
              <h3
                style={{
                  fontFamily: '"Fraunces", serif',
                  fontSize: 44,
                  fontWeight: 350,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                {w.title}
              </h3>
              <p className="body-lede" style={{ fontSize: 22, fontStyle: "italic" }}>
                {w.lede}
              </p>
              <p style={{ fontSize: 16, color: "#4A4138" }}>{w.body}</p>
              <ul className="list-checks">
                {w.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 80,
            padding: "40px 0",
            borderTop: "1px solid rgba(43,38,32,0.12)",
            maxWidth: 880,
          }}
        >
          <p className="body-lede" style={{ fontSize: 24 }}>
            As awareness deepens, you begin to notice your patterns of moving,
            holding &amp; responding,
            <span style={{ color: "#2B2620", fontStyle: "normal" }}>
              {" "}not just on the mat, but in your everyday life.
            </span>
          </p>
          <ul className="list-checks" style={{ marginTop: 28, maxWidth: 560 }}>
            <li>Move with greater intention.</li>
            <li>Make conscious, aligned choices.</li>
            <li>Respond rather than react.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
