/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      HeroBackgroundColor:"#DADBF1",
      bottonColor:"#4C5FD5"
     },

     fontSize :{
      bottonFontSize:"24px",
      h1Size:"80px"
     },

     fontFamily: {
      'gt-america': ['GT America Standard', 'sans-serif'],
    },
    screens: {
      'xs': '500px',   // Custom breakpoint at 375px
      // 'md': '768px',
      // 'lg': '1024px',
      // ... other breakpoints
    },

    },
  },
  plugins: [],
}
