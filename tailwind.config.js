/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'mainbg': '#00274e',
        'webinar': '#71beda',
        'inputboxbg': '#18395f',
        'inputbox': '#ccebff',
        'maintext': '#d7f2ff',
        'smallp': '#d7f2ff',
        'buttonbgdisabled': '#738aa1',
        'buttonbgenabled': '#3cdbc9',
        'buttoncolordisabled': '#dcf0ff',
        'buttoncolorenabled': 'black',


        'optionsbg': '#67D5C7',

      }
    },
  },
  plugins: [],
}