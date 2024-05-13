import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        baijam: ["Bai Jamjuree", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          100: "#EBEFFF",
          200: "#B9C4FF",
          300: "#8FA0FF",
          400: "#6E82FE",
          500: "#556AEB",
          600: "#354ACB",
          700: "#1D2F99",
          800: "#0C1A66",
          900: "#020A33",
        },
        secondary: "#F9FAFC",
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          700: "#8D8D8D",
        },
        "accent-dark-blue": "#021024",
      },
    },
  },
  plugins: [],
};
