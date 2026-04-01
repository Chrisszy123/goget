import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090A",
        "electric-green": "#00E5A0",
        "deep-purple": "#7B61FF",
        "warm-orange": "#FF6B35",
        "text-primary": "#F0F0F0",
        "text-muted": "#8A8A9A",
        "card-bg": "#111214",
        "card-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        "count-up": "countUp 1s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
