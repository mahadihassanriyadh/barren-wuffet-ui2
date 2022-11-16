/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        ...colors.gray,
        light: "#33333f",
        dark: "#1c1b25",
        medium: "#282835",
      },
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        card: "#1C1C25",
        white: "#FFFFFF",
        banner: "#282835",
        dtext: "#9191A7",
        black: "#000000",
        otext: "#FB9B20",
        bcolor: "#282835",
        stab: "#FED519"
      },
    },
  },
  plugins: [],
};
