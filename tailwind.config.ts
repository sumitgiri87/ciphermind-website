import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Brand color palette
      colors: {
        brand: {
          // Deep navy — primary background
          950: "#050d1a",
          900: "#0a1628",
          800: "#0f2040",
          // Cyan-teal — accent / highlight
          accent: "#00c8a0",
          "accent-dim": "#00a882",
          // Muted slate for secondary text
          muted: "#8b9ab0",
        },
      },
      fontFamily: {
        // Primary: sharp, technical display font (loaded via next/font)
        display: ["var(--font-display)", "monospace"],
        // Body: clean, readable
        body: ["var(--font-body)", "sans-serif"],
        // Mono: code snippets, labels
        mono: ["var(--font-mono)", "monospace"],
      },
      // Subtle grid texture for backgrounds
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(rgba(0,200,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,160,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
