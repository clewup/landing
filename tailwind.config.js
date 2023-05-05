const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-header": "90vh",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        branding: {
          black: "#111111",
          purple: "#D8B4FE",
        },
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
