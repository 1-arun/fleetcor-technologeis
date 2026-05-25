/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        cyanp: "#00C2FF",
        blue2: "#2563EB",
        glow: "#38BDF8",
        textsec: "#94A3B8",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['Inter', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,194,255,0.35)",
        glowsm: "0 0 20px rgba(56,189,248,0.4)",
      },
      backgroundImage: {
        "grad-ft": "linear-gradient(135deg,#00C2FF 0%,#2563EB 60%,#0B1437 100%)",
        "grad-text": "linear-gradient(90deg,#38BDF8,#00C2FF,#2563EB)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        shine: "shine 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
