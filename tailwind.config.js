module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink': '#CC0099'
      },
      letterSpacing: {
        wider: '.1em',
        widest: '.3em',
      },
      fontFamily: {
        'default': ['GADUGI', 'ui-sans-serif', 'system-ui]'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
