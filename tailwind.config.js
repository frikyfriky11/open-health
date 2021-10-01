module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: 'Roboto Slab',
        sans: 'Titillium Web',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
