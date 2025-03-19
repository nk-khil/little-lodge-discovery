/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#282829',
          coral: '#f37543',
          yellow: '#e5c83d',
          mint: '#73c9bd',
          grey: '#f1eeed',
          peach: '#fbd5c6',
          cream: '#f7eec4',
          'light-mint': '#d5eeeb'
        }
      }
    },
  },
  plugins: [],
};