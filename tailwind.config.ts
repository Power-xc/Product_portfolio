import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-rgb) / <alpha-value>)",
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        raised: "rgb(var(--raised-rgb) / <alpha-value>)",
        fg: "rgb(var(--fg-rgb) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-rgb) / 0.62)",
        "fg-faint": "rgb(var(--fg-rgb) / 0.42)",
        line: "rgb(var(--fg-rgb) / 0.10)",
        "line-strong": "rgb(var(--fg-rgb) / 0.16)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
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
        card: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
}

export default config
