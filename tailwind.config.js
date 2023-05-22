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
          purple: "#9A4FD0",
        },
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
