import type { ReactNode } from "react";

export default function Eyebrow({ n, children }: { n?: number; children: ReactNode }) {
  return (
    <div className="eyebrow flex items-center" style={{ gap: 10 }}>
      {n != null && <span style={{ opacity: 0.55 }}>{String(n).padStart(2, "0")}</span>}
      <span style={{ width: 18, height: 1, background: "currentColor", opacity: 0.35 }} />
      {children}
    </div>
  );
}
