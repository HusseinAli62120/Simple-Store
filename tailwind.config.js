/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Simple/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs':'452px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    }
  },
  plugins: [],
};
