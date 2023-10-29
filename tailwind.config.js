/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#0a0a0a",
        "black-search-bar": "#141414",
        "black-search-bar-placeholder": "#717171",
        "white-text-main": "#fbfbfb",
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
