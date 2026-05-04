export default function Practice() {
  return (
    <section id="practice" className="section">
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 64 }}>
          <span>02 · What this is</span>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div
            className="reveal about-portrait"
            style={{ position: "sticky", top: 110 }}
          >
            <div
              style={{
                aspectRatio: "4/5",
                borderRadius: 20,
                overflow: "hidden",
                background: "#EDE3D2",
              }}
            >
              <video
                src="/video/whatthisis.mp4"
                poster="/img/home-to-yourself.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="A glimpse of the practice: slow movement, breath, and quiet attention"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          <div className="reveal">
            <h2
              className="h-serif"
              style={{ fontSize: "clamp(40px, 5.6vw, 72px)" }}
            >
              The focus is not on how it looks,
              <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
                {" "}but on how you feel.
              </span>
            </h2>

            <p
              style={{
                marginTop: 40,
                fontSize: 17,
                color: "#4A4138",
                maxWidth: 580,
              }}
            >
              This is a movement practice where you are guided to:
            </p>

            <ul className="list-checks" style={{ marginTop: 24, maxWidth: 560 }}>
              <li>Feel, sense, and listen to your body from within.</li>
              <li>Move with gentle focus.</li>
              <li>Allow your body to lead, instead of controlling it.</li>
            </ul>

            <p
              style={{
                marginTop: 36,
                fontSize: 17,
                color: "#4A4138",
                maxWidth: 580,
              }}
            >
              This is not about chasing perfect postures or forcing your body
              into shapes. It's about noticing what the mind offers, without
              clinging or judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
