/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "rgb(6 182 212)",
        tertiary: "black",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "black",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/w.png')",
      },
    },
  },
  plugins: [],
};

