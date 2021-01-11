const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
        "blue-gray": colors.blueGray,
        primary: "var(--color-primary)", // direct #5c6ac4
        secondary: "var(--color-secondary)", // direct #5c6ac4
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', ],   
      fontSize: ['responsive', 'hover'],
      borderColor: ['active'],
  },
  plugins: [],
};
