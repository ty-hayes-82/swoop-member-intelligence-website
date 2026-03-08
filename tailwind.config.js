/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'swoop-green': '#4ADE80',
        'swoop-green-hover': '#43C872',
        'swoop-dark': '#1F2F24',
        'swoop-accent': '#F3922D',
        'swoop-bg': '#F8F9FA',
        'swoop-card': '#FFFFFF',
        'swoop-border': '#E4E4E7',
        'swoop-text': '#1F2F24',
        'swoop-muted': '#6B7280',
        'lens-briefing': '#6BB8EF',
        'lens-operations': '#4ADE80',
        'lens-fb': '#F97316',
        'lens-members': '#A78BFA',
        'lens-staffing': '#F59E0B',
        'lens-pipeline': '#34D399',
        'lens-agents': '#22D3EE',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
