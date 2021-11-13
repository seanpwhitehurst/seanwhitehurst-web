module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // basic tree shaking
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#be5959',
          secondary: '#70C1B3'
        },
        primary: {
          DEFAULT: '#FFFFFA',
        },
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
