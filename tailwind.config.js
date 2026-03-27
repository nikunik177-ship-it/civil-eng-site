/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        civil: {
          navy: '#000080',
          slate: '#708090',
          orange: '#FF5F15'
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
