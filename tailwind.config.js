const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#5555ff",
      },
    },
  },
  plugins: [],
};
