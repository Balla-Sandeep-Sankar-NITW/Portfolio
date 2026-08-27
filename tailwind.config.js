export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0F1117",
        surface: "#161B27",
        card: "#1A2035",
        border: "#2D3748",
        "border-light": "#3A4A63",
        cyan: { DEFAULT: "#22D3EE", dim: "#06B6D4" },
        green: { DEFAULT: "#4ADE80", dim: "#22C55E" },
        purple: { DEFAULT: "#A78BFA" },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
