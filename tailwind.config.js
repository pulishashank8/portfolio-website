/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0d1117',
          light: '#161b22',
        },
        accent: {
          blue: '#3081f7',
          green: '#2dba73',
        },
        card: '#21262d',
        text: {
          primary: '#c9d1d9',
          secondary: '#8b949e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [],
};