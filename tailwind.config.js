/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#040C18',
        blue: '#042c54',
        footer: '#031B34',
        blog: '#042c54',
        text: '#81AFDD',
        subtext: '#FF8A71',
        customBlue: 'rgba(129, 175, 221, 1)',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        'gradient-bar': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


