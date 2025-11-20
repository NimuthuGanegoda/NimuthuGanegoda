/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#82c4ff',
          400: '#45a8ff',
          500: '#0d8dff',
          600: '#0070d6',
          700: '#0057a3',
          800: '#004276',
          900: '#002945'
        }
      }
    }
  },
  plugins: []
};
