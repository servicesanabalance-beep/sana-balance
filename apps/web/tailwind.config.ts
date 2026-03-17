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
          brown: '#6B5744', // Darkened from #8B7355 for better contrast (WCAG AA)
          'brown-dark': '#4A3F33', // Darkened from #6B5744 for even better contrast
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
