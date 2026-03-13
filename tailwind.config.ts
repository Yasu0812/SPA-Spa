import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onsen: {
          steam: '#f1f5f9',
          water: '#0ea5a3',
          wood: '#8b5e34',
          deep: '#134e4a',
        },
      },
      keyframes: {
        steamRise: {
          '0%': { transform: 'translateY(0) scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'translateY(-140px) scale(1.15)', opacity: '0' },
        },
        splash: {
          '0%': { transform: 'scale(0.7)', opacity: '0.9' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        steam: 'steamRise 4s ease-out infinite',
        splash: 'splash 700ms ease-out forwards',
        shake: 'shake 250ms linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
