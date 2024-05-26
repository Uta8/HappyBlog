/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
    screens: {
     sm: '576px',
     md: '768px',
     lg: '992px',
     xl: '1216px',
    },
    extend: {
     fontFamily: {
      sans: ['var(--font-plus-jakarta-sans)'], // this font-family is used for the footer
      work: ['var(--font-work-sans)'], // this font-family is used for the headings
      serif: ['var(--font-source-serif-pro)'], // this font-family is used for the body like ( p, li, etc. )
     },
    },
   },
  
   // add daisyUI plugin
   plugins: [require('daisyui')],
  
   // daisyUI config (optional)
   daisyui: {
    styled: true,
    themes: [
     'light',
     'dark',
     'bumblebee',
     'emerald',
     'corporate',
     'synthwave',
     'retro',
     'cyberpunk',
     'valentine',
     'halloween',
     'garden',
     'forest',
     'aqua',
     'lofi',
     'pastel',
     'fantasy',
     'wireframe',
     'black',
     'luxury',
     'dracula',
     'cmyk',
     'autumn',
     'business',
     'acid',
     'lemonade',
     'night',
     'coffee',
     'winter',
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
   },
  }