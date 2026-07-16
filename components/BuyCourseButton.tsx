"use client";
import { useState } from "react";

export default function BuyCourseButton({
  bundle,
  label,
  className,
  style,
}: {
  bundle: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bundle }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Checkout isn't ready yet.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={className}
        style={{ ...style, cursor: loading ? "wait" : "pointer" }}
      >
        {loading ? "One moment…" : label}
      </button>
      {error && (
        <p style={{ marginTop: 10, fontSize: 13, color: "#C97B5A" }}>{error}</p>
      )}
    </div>
  );
}
