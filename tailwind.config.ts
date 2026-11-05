import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F8FC',
        brand: {
          50: '#EEF2FF',
          100: '#E4EAFF',
          200: '#CAD4FF',
          500: '#3548ED',
          600: '#2B3CD2',
          700: '#2230A8',
        },
        ink: {
          900: '#202B40',
          700: '#46536B',
          600: '#5B6880',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(53, 72, 237, 0.09)',
        card: '0 12px 35px rgba(32, 43, 64, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 500ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
