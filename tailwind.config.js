const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      primary: '#C1D12E', 
      'primary-dark': '#9AA725',
      'primary-light': '#CAD84D',
      secundary: '#414F0A',
      third: '#FD7E14',
      'third-light': '#FD9137',
      grey: '#D4D4D4',
      'grey-light': '#F8F9FA',
      black: '#000',
      white: '#FFF', 
      red: '#FF0000',
      translucent: 'rgba(212,212,212, 0.2)',
      modal: 'rgba(000, 000, 000, 0.6)',
      success: 'lch(81% 132 130)',
      error: 'lch(50% 132 36)'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      logo: ['"Bungee Inline"', 'sans-serif'],
      title: ['Bungee', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
      'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      text: ['"Titillium Web"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
      'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    },

    fontSize: {
      'h1': 'calc(1.375rem + 1.5vw)',
      'h2': 'calc(1.325rem + .9vw)',
      'h3': 'calc(1.3rem + .6vw)',
      'h4': 'calc(1.275rem + .3vw)', 
      'h5': '1.25rem'
    },
    extend: {
      margin: {
        'container-top': '50px',
        'container-bottom': '70px'
      },
      gridTemplateColumns: {
        'about-origin': '35% 60%'
      },
      flex: {
        'col-2': '0 1 calc(50% - 2vw)',
        'col-3': '0 1 calc(33% - 2vw)'
      },
      keyframes: {
        'loader-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'checkmark': {
          '0%': {
            width: 0,
            height: 0,
            opacity: 1,
          },
          '20%': {
            width: 'calc((calc(10dvh / 2)) / 2)',
            height: 0,
            opacity: 1,
          },        
          '40%': {
            width: 'calc((calc(10dvh / 2)) / 2)',
            height: '(calc(10dvh / 2))',
            opacity: 1,
          },        
          '100%': {
            width: 'calc((calc(10dvh / 2)) / 2)',
            height: '(calc(10dvh / 2))',
            opacity: 1,
          }
        },
        'crossmark': {
          '0%': { transform: 'scale(0%)' },
          '60%': { transform: 'scale(110%)' },
          '100%': { transform: 'scale(100%)' },
        }
      },
      animation: {
        'loader-spinner': 'loader-spin 1s linear infinite',
        'checkmark': 'checkmark 1.2s ease',
        'crossmark': 'crossmark 1.2s ease'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ]
}