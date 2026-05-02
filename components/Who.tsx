export default function Who() {
  const cols = [
    {
      h: "You may feel like",
      list: [
        "Your mind stays active, even when your body is tired.",
        "You're doing a lot, but not really in it.",
        "Something feels stuck, even when life is moving.",
      ],
    },
    {
      h: "You're looking for",
      list: [
        "More groundedness and clarity.",
        "Space to slow down and reconnect.",
        "Movement that feels sustainable & accessible.",
      ],
    },
    {
      h: "You're ready to",
      list: [
        "Move with awareness.",
        "Show up for yourself, gently.",
        "Build a supportive relationship with your body & mind.",
      ],
    },
  ];

  return (
    <section
      id="who"
      className="section"
      style={{ background: "#2B2620", color: "#F5EFE6", padding: "140px 0" }}
    >
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 56, color: "#EDE3D2" }}>
          <span style={{ color: "#EDE3D2" }}>04 · Who this is for</span>
        </div>

        <h2
          className="h-serif reveal"
          style={{
            fontSize: "clamp(40px, 5.6vw, 72px)",
            maxWidth: 920,
            marginBottom: 80,
            color: "#F5EFE6",
          }}
        >
          For those ready to{" "}
          <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
            live more consciously.
          </span>
        </h2>

        <div
          className="who-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {cols.map((c, i) => (
            <div
              key={c.h}
              className="reveal"
              style={{
                padding: 32,
                borderRadius: 20,
                border: "1px solid rgba(245,239,230,0.12)",
                background: "rgba(245,239,230,0.02)",
              }}
            >
              <div className="eyebrow" style={{ color: "#C97B5A" }}>
                {String(i + 1).padStart(2, "0")} · {c.h}
              </div>
              <ul className="list-checks" style={{ marginTop: 22 }}>
                {c.list.map((l) => (
                  <li key={l} style={{ color: "rgba(245,239,230,0.78)" }}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
