/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        gold: {
          100: "hsl(47, 95%, 85%)",
          200: "hsl(47, 95%, 75%)",
          300: "hsl(47, 95%, 65%)",
          400: "hsl(47, 95%, 55%)",
          500: "hsl(47, 95%, 45%)",
          600: "hsl(47, 95%, 35%)",
        },
        navy: {
          50: "hsl(217, 33%, 25%)",
          100: "hsl(217, 33%, 22%)",
          200: "hsl(217, 33%, 20%)",
          300: "hsl(217, 33%, 17%)",
          400: "hsl(222, 47%, 15%)",
          500: "hsl(222, 47%, 13%)",
          600: "hsl(222, 47%, 11%)",
          700: "hsl(225, 50%, 8%)",
          800: "hsl(225, 50%, 6%)",
          900: "hsl(225, 50%, 4%)",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
