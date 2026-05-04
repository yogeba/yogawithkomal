export default function Marquee() {
  const phrases = ["Feel", "Sense", "Listen", "Embody", "Soften", "Breathe"];
  const items = [...phrases, ...phrases, ...phrases];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((p, i) => (
          <span key={i}>
            {p}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
