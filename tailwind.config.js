/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['var(--font-exo)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      keyframes: {
        subtleFade: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(5px)'  // Reduced from 10px to 5px for subtlety
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        subtleFade: 'subtleFade 0.7s ease-out forwards'  // Increased duration for smoother effect
      }
    
    },
  },
  plugins: [],
}