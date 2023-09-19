const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  important: true,
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Satoshi"', ...fontFamily.sans],
        jakarta: ['"Satoshi"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
        xlg: "1400px",
      },
      colors: {
        primary: {
          DEFAULT:
            "rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)",
          100: "rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)",
          200: "rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)",
        },
        secondary: {
          DEFAULT:
            "rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)",
          1000: "rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)",
          900: "rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)",
          800: "rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)",
          700: "rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)",
        },
        text: {
          400: "rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)",
        },
        "cst-brand": {
          DEFAULT: "rgba(104, 82, 214, 1)",
        },
        "cst-black": {
          DEFAULT: "rgba(6, 5, 13, 1)",
        },
        "cst-white": {
          DEFAULT: "rgb(243, 243, 248)",
        },
        "cst-border": {
          DEFAULT: "rgba(20, 19, 29, 0.08)",
        },
        "cst-border-dark": {
          DEFAULT: "rgba(123, 122, 130, 0.5)",
        },
        "cst-card-bg": {
          DEFAULT: "rgba(250, 250, 255, 0.06)",
        },
        "cst-card-bg-dark": {
          DEFAULT: "rgba(20, 19, 29, 0.8)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
