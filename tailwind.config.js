const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "screen-header": "80vh",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        branding: {
          dark: "#111111",
        },
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
