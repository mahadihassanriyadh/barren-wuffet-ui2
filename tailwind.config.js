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
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
