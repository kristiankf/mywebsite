/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    
    extend: {
      fontFamily: {
        'fortitle': ['"Archivo Black"', 'cursive'],
        'forbody': ['Caveat', 'cursive'],
        'alternate': ['"Noto Sans Mono"', 'monospace']
      },
      colors: {
        'forbg': '#01141d',
        'highlights': '#144b94',
        'odd': '#e6d409',
        'skill-bg': "#24292f"
      },
      screens: {
        'xs': '480px'
      },
      animation: {
        'ping-fast': 'ping .3s linear infinite'
      }
    },
  },
  plugins: [],
}
