import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        sand: "#EDE3D2",
        "sand-2": "#E2D5BE",
        terracotta: "#C97B5A",
        "terracotta-deep": "#A85F40",
        clay: "#8B5E3C",
        moss: "#6B7A4F",
        ink: "#2B2620",
        "ink-soft": "#4A4138",
        "ink-mute": "#7A6F62",
      },
      fontFamily: {
        display: ['"Fraunces"', '"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Inter Tight"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderColor: {
        DEFAULT: "rgba(43,38,32,0.12)",
        soft: "rgba(43,38,32,0.06)",
      },
      maxWidth: {
        wrap: "1240px",
      },
      animation: {
        slide: "slide 38s linear infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(201,123,90,.45)" },
          "70%": { boxShadow: "0 0 0 10px rgba(201,123,90,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(201,123,90,0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#4A4138",
            "--tw-prose-headings": "#2B2620",
            "--tw-prose-lead": "#4A4138",
            "--tw-prose-links": "#A85F40",
            "--tw-prose-bold": "#2B2620",
            "--tw-prose-counters": "#7A6F62",
            "--tw-prose-bullets": "#C97B5A",
            "--tw-prose-quotes": "#2B2620",
            "--tw-prose-quote-borders": "#C97B5A",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
