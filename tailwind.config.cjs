module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bobanad: {
          DEFAULT: '#b57fac',
          dark: '#654864'
        }
      },
      boxShadow: {
        'purple-glow': '0 10px 30px rgba(181,127,172,0.25), 0 2px 6px rgba(101,72,100,0.12)'
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: []
}
