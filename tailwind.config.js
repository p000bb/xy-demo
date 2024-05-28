/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
      '3xl': "1920px",
    },
    extend: {
      // fontSize: {
      //   base: "1.25rem",
      // }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".text-ellipsis": {
          overflow: "hidden",
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
        },
        ".big-text": {
          fontSize: "3rem",
        }
      });
    })
  ],
};
