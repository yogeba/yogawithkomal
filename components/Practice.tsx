import Eyebrow from "./Eyebrow";
import Placeholder from "./Placeholder";

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
            <Placeholder
              src="/img/home-to-yourself.jpg"
              alt="A space to move with awareness, come back home to yourself"
              aspect="4/5"
            />
            <Placeholder
              className="ph-secondary"
              src="/img/awareness-life.jpg"
              alt="Awareness changes how you experience life"
              aspect="1/1"
              style={{ marginTop: 16, marginLeft: 60 }}
            />
          </div>

          <div className="reveal">
            <Eyebrow n={2}>Yoga, beyond the mat</Eyebrow>
            <h2
              className="h-serif"
              style={{ fontSize: "clamp(40px, 5.6vw, 72px)", marginTop: 24 }}
            >
              The focus is not on how it looks,
              <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
                {" "}but on how you feel.
              </span>
            </h2>

            <div
              style={{
                marginTop: 40,
                display: "flex",
                flexDirection: "column",
                gap: 22,
                fontSize: 17,
                color: "#4A4138",
                maxWidth: 580,
              }}
            >
              <p>
                This is a movement practice where you are guided to feel,
                sense, and listen to your body from within, to allow your body
                to lead, instead of controlling it.
              </p>
              <p>
                Not chasing perfect postures. Not forcing your body into shapes.
                Noticing what the mind offers, without clinging or judgment.
              </p>
            </div>

            <ul className="list-checks" style={{ marginTop: 36, maxWidth: 560 }}>
              <li>Move with gentle focus.</li>
              <li>Feel, sense, and listen to your body from within.</li>
              <li>Allow your body to lead, instead of controlling it.</li>
              <li>Notice what the mind offers, without clinging or judgment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
