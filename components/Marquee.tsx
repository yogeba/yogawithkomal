export default function Marquee() {
  const phrases = ["Move with awareness", "Soften", "Breathe", "Listen", "Return", "Begin"];
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
