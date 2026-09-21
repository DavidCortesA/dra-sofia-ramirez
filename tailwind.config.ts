import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta plana "Bosque y Mostaza"
        sage: {
          50:  "#f1f4ec",
          100: "#dfe8d1",
          200: "#c0d3a4",
          300: "#9dbb76",
          400: "#7ba054",
          500: "#5c8339",
          600: "#496a2e",
          700: "#3c5726",
          800: "#33482a",
          900: "#22301c",
        },
        beige: {
          50:  "#f7f8f4",
          100: "#eef0e8",
          200: "#dfe3d6",
          300: "#c9d0bd",
          400: "#aab392",
          500: "#8b966d",
          600: "#707c54",
          700: "#5c6644",
          800: "#4a5238",
          900: "#3d442e",
        },
        terracota: {
          50:  "#fdf6e5",
          100: "#faeabf",
          200: "#f4d183",
          300: "#edb84a",
          400: "#e6a527",
          500: "#d99416",
          600: "#b77a10",
          700: "#916013",
          800: "#754e15",
          900: "#5f4014",
        },
        warm: {
          white: "#ffffff",
          cream: "#f7f8f4",
          sand:  "#eef0e7",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans:    ["'Instrument Sans'", "system-ui", "sans-serif"],
        display: ["'Sora'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
