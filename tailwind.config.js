module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // basic tree shaking
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#156064',
        },
        primary: {
          DEFAULT: '#FFFFFA',
        }
      },
      fontFamily: {
        app: ['Roboto Mono']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
