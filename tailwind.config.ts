import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080C",
        surface: "#111118",
        elevated: "#181823",
        border: "rgba(255,255,255,0.12)",
        muted: "rgba(255,255,255,0.64)",
        faint: "rgba(255,255,255,0.42)",
        accent: "#C9B6FF",
        "accent-blue": "#BBD7FF",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(143, 119, 255, 0.18)",
        card: "0 18px 60px rgba(0, 0, 0, 0.26)",
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
}

export default config
