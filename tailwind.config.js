/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#0a0a0a",
        "black-secondary": "#171717",
        "black-ultra-light": "#1f1f1f",
        "black-search-bar": "#141414",
        "black-search-bar-placeholder": "#717171",
        "white-text-main": "#fbfbfb",
        "pink-primary": "#fc3c44", // fd4cea fc3c44
        "pink-secondary": "#f94c57", // ff95f4 f94c57
      },
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      backgroundImage: {
        test: `url('https://cdn.apollo.audio/one/media/64a4/3c11/c1f5/ac05/9e04/4904/tate-mcrae.jpg')`,
        test1: `url('https://celebwell.com/wp-content/uploads/sites/2/2023/01/GettyImages-1450181414.jpg?quality=82&strip=1&w=640&crop=0%2C0%2C640px%2C360px')`,
      },
    },
  },
  plugins: [],
};
