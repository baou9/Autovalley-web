/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './plugins/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b90504',
        dark: '#333333',
        light: '#f2f2f2',
        text: '#222222',
        mute: '#666666',
        white: '#ffffff'
      },
      borderRadius: {
        md: '12px',
        xl: '20px'
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,.08)'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
