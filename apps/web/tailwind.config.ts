import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sana: {
          cream: '#F5F1ED',
          beige: '#E8DDD3',
          brown: '#8B7355',
          'brown-dark': '#6B5744',
          gold: '#C9A87C',
          white: '#FFFFFF',
          black: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sana': '2rem',
      },
      boxShadow: {
        'sana': '0 4px 20px rgba(139, 115, 85, 0.1)',
        'sana-lg': '0 10px 40px rgba(139, 115, 85, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
