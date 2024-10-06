/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceDark: '#1a1a2e', // Dark background like a galaxy
        spacePurple: '#845EC2', // Purple for main theme
        pink: '#FF6F91', // Pink for accents
        'light-blue-400': '#3BA0D1', // Light blue color
        'light-purple-400': '#A77BCA', // Light purple color
      },
      keyframes: {
        pulseEffect: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 105, 180, 0.6)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)' },
        },
        thunderEffect: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        starEffect: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pulse: 'pulseEffect 1.5s ease-in-out infinite',
        thunder: 'thunderEffect 0.5s ease-in-out infinite',
        star: 'starEffect 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
