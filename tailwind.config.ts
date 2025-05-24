import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      backgroundColor: {
        "blue-main": "#0155C6",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(90deg, #0D57C6 0%, #37CFFF 50%, #0F5ED6 100%)",
        "gradient-warning": "linear-gradient(90deg, #FFD666 0%, #FFAB00 100%)",
      },
      colors: {
        blue: {
          main: "#0155C6",
          shadow: "#0375F329",
          shadowBrand: "#E6F1FF",
        },
        yellow: {
          main: "#FACA4A",
        },
        brand: {
          main: "#0155C6",
          shadow: "#0375F329",
          shadowBrand: "#E6F1FF",
          z8: "  #919EAB29",
          50: "#E6F1FF",
          500: "#0373F3",
          600: "#025FCA",
          700: "#024897",
          800: "#013065",
        },
        medium: {
          stroke: " #919EAB3D",
        },
        textPrimary: "#1C252E",
        textSecondary: "#637381",
        disabled: "#919EAB",
        errorMain: "#FF5630",
        error: "#7A0916",
        errorDark: "#B71D18",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0066ff",
          foreground: "hsl(var(--primary-foreground))",
          dark: "#1C252E",
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
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
