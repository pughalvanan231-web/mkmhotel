/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          bg: '#FAF6F0',
          cream: '#F4EDE4',
          ivory: {
            DEFAULT: '#F5EFE6',
            light: '#FAF6F0',
            dark: '#ECE3D5',
            muted: '#DDD1BF'
          },
          // Royal Red / Crimson (Inspired by MKM Rich logo)
          red: {
            DEFAULT: '#720E12', // Rich royal crimson
            dark: '#420608',    // Deep regal maroon
            deep: '#2B0305',    // Midnight wine / near black
            light: '#8F171B',   // Vibrant ruby crimson
            subtle: '#58090C'   // Velvet maroon
          },
          // Mapping green to royal red for complete theme transformation
          green: {
            DEFAULT: '#720E12',
            dark: '#420608',
            light: '#8F171B',
            subtle: '#58090C'
          },
          // Regal Gold palette
          gold: {
            DEFAULT: '#C5A059',
            light: '#DFC48B',
            dark: '#A37E33',
            muted: '#B8934A',
            pale: '#F6ECD7'
          },
          charcoal: {
            DEFAULT: '#1F1A1B',
            light: '#362E2F',
            dark: '#141011'
          },
          muted: '#736566'
        }
      },
      borderColor: {
        'mkm': 'rgba(114, 14, 18, 0.14)',
        'mkm-light': 'rgba(114, 14, 18, 0.08)',
        'mkm-gold': 'rgba(197, 160, 89, 0.35)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(66, 6, 8, 0.12)',
        'luxury-lg': '0 30px 60px -20px rgba(66, 6, 8, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.35)',
        'red-glow': '0 0 25px rgba(114, 14, 18, 0.35)',
      }
    },
  },
  plugins: [],
}
