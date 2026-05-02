import type { CSSProperties } from "react";

type Props = {
  caption?: string;
  aspect?: string;
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
  src?: string;
  alt?: string;
  objectPosition?: string;
};

export default function Placeholder({
  caption,
  aspect = "4/5",
  dark = false,
  className = "",
  style = {},
  src,
  alt,
  objectPosition = "center",
}: Props) {
  if (src) {
    return (
      <div
        className={className}
        style={{
          aspectRatio: aspect,
          borderRadius: 20,
          overflow: "hidden",
          background: "#EDE3D2",
          ...style,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || caption || ""}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            display: "block",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={`placeholder ${dark ? "dark" : ""} ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      {caption && <span className="ph-cap">{caption}</span>}
    </div>
  );
}
