/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080c10',
          darker: '#05070a',
          card: '#0f1722',
          surface: '#142030',
          border: 'rgba(255, 255, 255, 0.08)',
          gold: '#fbbd08',
          goldHover: '#eab308',
          goldMuted: 'rgba(251, 189, 8, 0.12)',
          accent: '#38bdf8',
          muted: '#94a3b8',
          subtle: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(251, 189, 8, 0.25)',
        'glow-subtle': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'app-dock': '0 -10px 25px -5px rgba(0, 0, 0, 0.5)'
      },
      screens: {
        'xs': '400px',
      }
    },
  },
  plugins: [],
}
