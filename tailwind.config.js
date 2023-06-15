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
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        landing: {
          primary: "#FCA311",
          secondary: "#FF1654",
          accent: "#1FB2A5",
          neutral: "#CCCCCC",
          "base-100": "#111111",
          info: "#3ABFF8",
          success: "#198754",
          warning: "#FBBD23",
          error: "#d9534f",
        },
      },
    ],
  },
};
