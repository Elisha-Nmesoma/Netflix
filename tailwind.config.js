/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}"
],
  theme: {
    screens: {
      'sm': '600px',
      '830':'800px',
      'md': '960px',
      'lg': '1020px',
      'xl': '1280px',
      'xxl': '1440px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'red': '#E50914',
        'red2': '#b91c1c',
        'gray': '#2d2d2d',
        'semi-white': '#9b9b9b',
        'dim' : 'rgb(0 0 0 / 40%)',
        'input' : '#00000080',
        'lightblack': '#333333',
        'milk': '#737373',
        'semi-white1':'#F3F3F3',
        'semi-brown':'#6D6D6EB3',
        'home-black' :'#111'
        
      },
      screens: {
        '3xl': '1600px',
        '3xxl': '1930px',
       '4xl': '2400px'
      },
    },
  },
  plugins: [],
}

