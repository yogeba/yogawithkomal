import Placeholder from "./Placeholder";
import { IG_URL } from "@/lib/data";

const IG_POSTS = [
  {
    src: "/img/home-to-yourself.jpg",
    alt: "A space to move with awareness, come back home to yourself",
  },
  {
    src: "/img/bring-awareness.jpg",
    alt: "Bring awareness to how you move, breathe, and respond",
  },
  {
    src: "/img/awareness-life.jpg",
    alt: "Awareness changes how you experience life",
  },
  {
    src: "/img/announce-may5.jpg",
    alt: "Group + 1:1 sessions, offline in Siliguri & online. Classes begin May 5.",
  },
];

export default function Instagram() {
  return (
    <section id="ig" className="section">
      <div className="wrap">
        <div className="rule reveal" style={{ marginBottom: 48 }}>
          <span>08 · Field notes · @releaseandrealize</span>
        </div>

        <div
          className="reveal ig-head"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "end",
            marginBottom: 48,
          }}
        >
          <h2 className="h-serif" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Notes from practice,
            <span style={{ fontStyle: "italic", color: "#C97B5A" }}>
              {" "}the morning floor, the breath.
            </span>
          </h2>
          <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-ghost">
            Explore on Instagram →
          </a>
        </div>

        <div
          className="ig-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {IG_POSTS.map((p, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener"
              className="reveal ig-tile"
              style={{
                position: "relative",
                display: "block",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Placeholder
                src={p.src}
                alt={p.alt}
                aspect="1/1"
                style={{ borderRadius: 12 }}
              />
              <div
                className="ig-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(43,38,32,.6) 100%)",
                  opacity: 0,
                  transition: "opacity .3s ease",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
