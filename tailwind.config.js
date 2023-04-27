const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'mobile': '360px',
      // => @media (min-width: 360px and max-width: 767px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px and max-width: 1439px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px and max-width: 1535px) { ... }
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
      },

    colors: {
      'washedOutRed': '#ce9797',
      'softRed': '#f96262',
      'darkGrayishRed': '#413a3a',
      'lavenderBlush': '#fff5f5',
      'spanishPink': '#f8bfbf',
      'ruddyPink': '#ee8c8c',
      'redM': '#F45050',
    },
    
    extend: {
      backgroundImage: {
        'bg-pattern': "url('images/bg-pattern-desktop.svg')",
      },
      fontFamily: {
          josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans]
      }     
    },
  },
  plugins: [],
}

