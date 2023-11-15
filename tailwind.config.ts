import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "cm-icons": "1.50rem",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)"],
      },
      colors: {
        "cm-white": "#F4F4F4",
        "cm-black": "#17181D",
      },
      keyframes: {
        "cm-scale-to-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0)" },
        },
        "cm-fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(40%)" },
        },
        "cm-fade-in-top": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "cm-fade-in-left": {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(0%))" },
        },
        "cm-dissapear": {
          "0%": { opacity: "30%" },
          "100%": { opacity: "0%" },
        },
      },
      animation: {
        "cm-scale-top": "cm-scale-to-top 1s",
        "cm-fade-out-down": "cm-fade-out-down 1s ease-out",
        "cm-fade-in-top": "cm-fade-in-top 1s linear forwards",
        "cm-fade-in-left": "3s cm-fade-in-left linear backwards ",
        "cm-translate-to-left": "1s cm-translate-to-left linear move forwards",
        "cm-dissapear": "1s cm-dissapear linear forwards",
      },
      boxShadow: {
        "left-bottom": "-20px 17px 60px 0px",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline:scroll())",
      },
      screens: {
        "cm-2xl": { max: "1500px" },
        "cm-1xl": { max: "1000px" },
        "cm-lg": { max: "600px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
