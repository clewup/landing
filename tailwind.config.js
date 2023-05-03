const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "screen-header": "90vh",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
