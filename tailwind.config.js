/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        odd: 'url("/img/bullet-odd.png")',
        even: 'url("/img/bullet-even.png")',
      },
      colors: {
        blue: '#788ae3',
        rose: '#EFB3DB',
        garden: '#8fd482',
        magic: '#A495DF',
        whitish: '#F5F6FE',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}
