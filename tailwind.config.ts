import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "cm-icons": "1.50rem",
      },
      colors: {
        "cm-white": "#F1F1EF" /* #FAFAFA */,
        "cm-black": "#17181D" /* #101010 */,
        "cm-gray": "#18181B",
        "cm-primary": "#A594FD",
        "cm-secondary": "#5940D4",
        "cm-orange": "#F3AF37",
        "light-green": "#31b970",
        "dark-green": "#53c14f",
        "cm-yellow": "#f8bd4d",
        "cm-blue": "#409fd4",
      },
      backgroundImage: {
        "cm-square":
          "linear-gradient(#cc00ff 1.4000000000000001px, transparent 1.4000000000000001px), linear-gradient(to right, #cc00ff 1.4000000000000001px, #000000 1.4000000000000001px);",
        // opacity: 1;
        // background-size: 28px 28px;'
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
      },
      animation: {
        "cm-scale-top": "cm-scale-to-top 1s",
        "cm-fade-out-down": "cm-fade-out-down 1s ease-out",
        "cm-fade-in-top": "cm-fade-in-top 1s linear forwards",
        "cm-fade-in-left": "3s cm-fade-in-left linear backwards ",
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
