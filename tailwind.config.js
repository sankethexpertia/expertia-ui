/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      primary1:'#6D5DE7',
      primary2:'#574ab8',
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
    }
  },
  plugins: [],
}
