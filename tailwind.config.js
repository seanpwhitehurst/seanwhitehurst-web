module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // basic tree shaking
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DB0FF',
          light: '#C2EAFF',
          dark: '#1A5777',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#303136',
        },
        background: {
          DEFAULT: '#156064',
        },
        words: {
          DEFAULT: '#000',
          dark: '#CCC',
          sub: '#BEC0C5'
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
