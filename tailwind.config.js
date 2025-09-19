/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        akina: {
          purple: '#5B3A70',
          orange: '#E18B2B',
          brown: '#6B4B1A',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
