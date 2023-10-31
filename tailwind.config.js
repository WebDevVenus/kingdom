/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        neoPink:'hsl(300, 100%, 50%)',
        electricBlue:'hsl(220, 90%, 60%)',
        vibrantPurple:'hsl(270, 80%, 50%)',
        darkVibrantPurple:'hsl(270, 80%, 40%)',
        radioactiveGreen: 'hsl(100, 80%, 40%)',
        glowingOrange: 'hsl(20, 100%, 50%)',
      },
      fontFamily: {
        'sans': ['Libre Bodoni', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

