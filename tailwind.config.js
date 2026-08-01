/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg)",
        surface: "var(--panel)",
        surface2: "var(--panel-strong)",
        "emerald-glow": "var(--accent-strong)",
        "indigo-glow": "var(--accent-secondary)",
        line: "var(--line)",
        ink: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "glow-emerald":
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.15), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(16, 185, 129, 0.25)",
        "glow-indigo": "0 0 40px rgba(99, 102, 241, 0.25)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 4s linear infinite",
      },
    },
  },
  plugins: [],
};
