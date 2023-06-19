const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "10xl": "15rem",
        "11xl": "25rem",
      },
      height: {
        "screen-header": "85vh",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ff4d01",
        base: "#111111",
      },
    },
  },
};
