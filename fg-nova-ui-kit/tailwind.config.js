/** @type {import('tailwindcss').Config} */
module.exports = {
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
        neutral: {
          50: "#F8F8FA",
          70: "#F2F2F5",
          100: "#DEDEE5",
          200: "#A1A0A9",
          300: "#78777F",
          400: "#4E4F57",
          500: "#45464E",
          600: "#3D3E46",
          700: "#303137",
          800: "#1F1F23",
          900: "#131316",
        },
        primary: {
          50: "#F8F9FE",
          70: "#F1F3FB",
          100: "#E0E3F5",
          200: "#C6CBEA",
          300: "#A1A8D5",
          400: "#7D85B9",
          500: "#57619B",
          600: "#47518F",
          700: "#2D3775",
          800: "#161F53",
          900: "#040B37",
        },
        destructive: {
          50: "#FEF2F2",
          70: "#FFECEC",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
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
};
