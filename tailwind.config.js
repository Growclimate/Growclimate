/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9eb',
          100: '#e3f2c4',
          200: '#c8e389',
          300: '#a8d04f',
          400: '#87ba28',
          500: '#67a20e',
          600: '#4e8308',
          700: '#3b6606',
          800: '#315108',
          900: '#2a4409',
        },
        dark: {
          800: '#1a2e1a',
          900: '#0f1f0f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
