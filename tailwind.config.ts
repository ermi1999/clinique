import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#0D0D0D",
        "off-dark": "#3C3D40",
        "grey-dark": "#BFBFBF",
        brown: "#260101",
        "off-brown": "#402A1E",
        "grey-white": "#D9D9D9",
        "off-white": "#E7E6E9",
        white: "#fdfdfd",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: {
        "radial-gradient": {
          background: "radial-gradient(at center, #000000, #848484)",
        },
      },
      fontFamily: {
        regular: ["var(--cabinet-regular)"],
        bold: ["var(--cabinet-bold)"],
        thin: ["var(--cabinet-thin)"],
        light: ["var(--cabinet-light)"],
        medium: ["var(--cabinet-medium)"],
        black: ["var(--cabinet-black)"],
        italic: ["var(--italic)"],
        "medium-italic": ["var(--medium-italic)"],
        "semibold-italic": ["var(--semibold-italic)"],
        "bold-italic": ["var(--bold-italic)"],
        "general-sans": ["var(--generalsans-regular)"],
        "general-sans-bold": ["var(--generalsans-bold)"],
        "general-sans-semibold": ["var(--generalsans-semibold)"],
        "general-sans-medium": ["var(--generalsans-medium)"],
        "general-sans-light": ["var(--generalsans-light)"],
        "general-sans-variable": ["var(--generalsans-variable)"],
        tanker: ["var(--tanker)"],
      },
      fontSize: {
        "5xl": ["3.25rem", "1"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "3rem",
        "5xl": "4rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        fadeinup: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 40%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
        fadeindown: {
          from: {
            opacity: "0",
            transform: "translate3d(0%, -40%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
        fadeinleft: {
          from: {
            opacity: "0",
            transform: "translate3d(-10%, 0%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
        "fadeinleft-fast": {
          from: {
            opacity: "0",
            transform: "translate3d(-5%, 0%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
        fadeinright: {
          from: {
            opacity: "0",
            transform: "translate3d(10%, 0%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
        "fadeinright-fast": {
          from: {
            opacity: "0",
            transform: "translate3d(5%, 0%, 0)",
          },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spin: "spin 3s linear 1",
        fadeinup: "fadeinup 1s",
        fadeindown: "fadeindown 1s",
        fadeinleft: "fadeinleft 1s",
        "fadeinleft-fast": "fadeinleft-fast 1s",
        fadeinright: "fadeinright 1s",
        "fadeinright-fast": "fadeinright-fast 1s",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.47,1.64,.38,.87)",
      },
      backgroundImage: {
        "fade-in":
          "linear-gradient(0turn,rgba(103,103,103,1) 0%,rgba(234,234,234,0) 100%)",
        "fade-out":
          "linear-gradient(to bottom, rgba(103,103,103,1) 0%, rgba(234,234,234,0) 100%)",
        "fade-out-white":
          "linear-gradient(0turn,rgba(234,234,234,1) 0%,rgba(234,234,234,0) 100%)",
        "fade-in-white":
          "linear-gradient(to bottom,rgba(234,234,234,1) 0%,rgba(234,234,234,0) 100%)",
      },
      screens: {
        "2xl": { min: "1400px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
