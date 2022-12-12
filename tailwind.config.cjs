/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.js'],
  theme: {
    fontFamily: {
      main: ['League Spartan', 'sans-serif'],
    },
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 63%)',
        veryDarkGray: 'hsl(0, 0%, 27%)',
      },
    },
  },
  plugins: [],
};
