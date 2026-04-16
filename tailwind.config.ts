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
        // Paleta "Cálido y Terroso"
        sage: {
          50:  "#f4f7f2",
          100: "#e6ede2",
          200: "#cddbc6",
          300: "#a8c19e",
          400: "#7da072",
          500: "#5a8252",
          600: "#466840",
          700: "#385335",
          800: "#2e432b",
          900: "#263824",
        },
        beige: {
          50:  "#fdfcf8",
          100: "#f9f6ef",
          200: "#f2ebdb",
          300: "#e8dbc3",
          400: "#d9c5a0",
          500: "#c9aa7c",
          600: "#b08e5a",
          700: "#937248",
          800: "#785c3d",
          900: "#624d35",
        },
        terracota: {
          50:  "#fdf4f0",
          100: "#fae5dc",
          200: "#f5ccbb",
          300: "#edaa90",
          400: "#e07f5d",
          500: "#d45f3a",
          600: "#c4472b",
          700: "#a43727",
          800: "#872f27",
          900: "#6f2a24",
        },
        warm: {
          white: "#fefcf8",
          cream: "#f7f3ec",
          sand:  "#ede5d8",
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
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans:  ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
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
