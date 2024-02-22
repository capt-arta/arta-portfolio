/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'artiysx-smoke': '#989898 ',
        'artiysx-blusky': '#38bdf8',
        'artiysx-blu': '#147efb',
        // 'artiysx-blu': '#d9b29e',
        'artiysx-black': '#2d2e32',
        'artiysx-bg': '#050c15',
        'artiysx-gray': '#131e2f',
        'navbg': '#272829',
      },
      keyframes: {
        scale: {
          '0%' : { transform: 'scale(1)' },
          '90%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1.25)' },
        }
      },
      animation: {
        scale: 'scale .5s ease-in-out',
      }
      // screens: {
      //   'mobile': '380px',
      // },
    },
  },
  plugins: [],
}
