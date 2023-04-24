/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circularSpinLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);',
        circularSpinDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 7px, #1b1b1b 100px);',
        circularSpinLightTablet: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 80px);',
        circularSpinDarkTablet: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 7px, #1b1b1b 80px);',
        circularSpinLightMiniTablet: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 60px);',
        circularSpinDarkMiniTablet: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px, #1b1b1b 60px);',
        circularSpinLightMobile: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 40px);',
        circularSpinDarkMobile: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 3px, #1b1b1b 40px);',
      },
      fontFamily: {
        mont: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': "spin 9s linear infinite",
      },
    },
    screens: {
      'desktop': { max: "1535px" },
      // => @media (max-width: 1535px) {...}
      'laptop': { max: "1280px" },
      // => @media (max-width: 1280px) {...}
      'tablet': { max: "1024px" },
      // => @media (max-width: 1024px) {...}
      'mini-tablet': { max: "768px" },
      // => @media (max-width: 768px) {...}
      'mobile': { max: "640px" },
      // => @media (max-width: 640px) {...}
      'mini-mobile': { max: "480px" },
      // => @media (max-width: 480px) {...}
    },
  },
  plugins: [],
  darkMode: 'class',
}
