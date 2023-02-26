/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
