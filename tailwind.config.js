/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 1.5s infinite",
        typing: "typing 3s steps(20) infinite, blink 0.75s step-end infinite",
        blink: "blink 0.75s step-end infinite",
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 25px #00FF00" },
          "50%": { boxShadow: "0 0 40px #00FF00" },
          "100%": { boxShadow: "0 0 25px #00FF00" },
        },
        typing: {
          "0%": { width: "0%" },
          "25%": { width: "100%" },
          "50%": { width: "0%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" }, 
          "100%": { transform: "translateX(-100%)" }, 
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
