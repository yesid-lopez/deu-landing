import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Brand: Sage
        sage: {
          50: "#f4f6ef",
          100: "#e8edde",
          200: "#d3ddc0",
          300: "#b5c697",
          400: "#9ab274",
          500: "#7d9956",
          600: "#627a42",
          700: "#4c5e35",
          800: "#3f4d2e",
          900: "#364229",
        },

        // Brand: Navy
        navy: {
          50: "#f0f2f7",
          100: "#dde2ee",
          200: "#c1c9de",
          300: "#97a4c6",
          400: "#7080ab",
          500: "#516493",
          600: "#414f7a",
          700: "#384264",
          800: "#323a54",
          900: "#1b2332",
        },

        // Accent colors (originally articles in reference design — used here as brand accents)
        "accent-blue": "#3b82f6",
        "accent-pink": "#e84393",
        "accent-emerald": "#10b981",

        // Surfaces
        cream: "#fafaf5",
        "warm-white": "#f8f7f2",

        // Bento card backgrounds
        feature: {
          indigo: "#6C7EB7",
          rose: "#B4748B",
          eucalyptus: "#5D9E82",
          honey: "#C49A52",
          terra: "#B87B65",
          graphite: "#4B5563",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
