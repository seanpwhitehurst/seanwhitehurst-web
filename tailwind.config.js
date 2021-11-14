module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // basic tree shaking
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#BE5959',
          secondary: '#70C1B3'
        },
        primary: {
          DEFAULT: '#FFFFFF',
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
