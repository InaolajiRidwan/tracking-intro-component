/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        reddd: "hsl(0, 100%, 68%)",
        VeryDarkBlue: "hsl(230, 29%, 20%)",
        DarkGrayishBlue: "sl(230, 11%, 40%)",
        LightGrayishBlue: "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
