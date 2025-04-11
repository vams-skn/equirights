/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-pink": "#FFC7C7",
        "blush": "#FFE2E2",
        "off-white": "#F6F6F6",
        "lavender": "#8785A2",
      },
    },
  },
  plugins: [],
};