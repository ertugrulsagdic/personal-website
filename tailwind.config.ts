import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3EEE5",
          deep: "#EBE4D6",
        },
        ink: {
          DEFAULT: "#15130F",
          soft: "#2A2722",
          muted: "#6B645A",
        },
        graphite: {
          DEFAULT: "#151413",
          soft: "#1E1C1A",
        },
        cream: {
          DEFAULT: "#F3EEE5",
          muted: "#A59E8F",
        },
        vermilion: {
          DEFAULT: "#C8321E",
          deep: "#9B2615",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade": "fade 0.5s ease-in-out",
        "wire-print": "wire-print 1.4s steps(28, end) forwards",
        "settle": "settle 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "rule-draw": "rule-draw 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "blink": "blink 1.1s steps(2, end) infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "wire-print": {
          "0%": { width: "0", opacity: "0.4" },
          "100%": { width: "100%", opacity: "1" },
        },
        settle: {
          "0%": { opacity: "0", transform: "translateY(14px) rotate(0.3deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0)" },
        },
        "rule-draw": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
