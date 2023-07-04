const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          gray: colors.neutral,
        },
        fontFamily: {
          // to change, update font in _document.js
          sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
          serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
          stock: [defaultTheme.fontFamily.sans],
        },
        aspectRatio: {
          "4/3": "4 / 3",
          "3/2": "3 / 2",
          "2/3": "2 / 3",
          "9/16": "9 / 16",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
