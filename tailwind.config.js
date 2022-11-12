/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        main: 'url(/images/main.jpg)',
        section_second: 'url(/images/section_2.jpg)',
      },
      colors: {
        amberlike: '#E2A03F',
      },
      backgroundColor: {
        'section-one': '#E3A443',
      },
    },
  },
  plugins: [],
};
