import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ["var(--cabinet-regular)"],
        bold: ["var(--cabinet-bold)"],
        thin: ["var(--cabinet-thin)"],
        light: ["var(--cabinet-light)"],
        medium: ["var(--cabinet-medium)"],
        black: ["var(--cabinet-black)"],
        italic: ["var(--generalsans-italic)"],
        "general-sans": ["var(--generalsans-regular)"],
        "general-sans-bold": ["var(--generalsans-bold)"],
        "general-sans-semibold": ["var(--generalsans-semibold)"],
        "general-sans-medium": ["var(--generalsans-medium)"],
        "general-sans-light": ["var(--generalsans-light)"],
        "general-sans-variable": ["var(--generalsans-variable)"],
        tanker: ["var(--tanker)"],
      },
      borderRadius: {
        "4xl": "3rem",
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        spin: "spin 3s linear 1",
      },
      // screens: {
      //   lg: "1100px",
      // },
      colors: {
        dark: "#0D0D0D",
        "off-dark": "#3C3D40",
        "grey-dark": "#BFBFBF",
        brown: "#260101",
        "off-brown": "#402A1E",
        "grey-white": "#D9D9D9",
        "off-white": "#E7E6E9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
