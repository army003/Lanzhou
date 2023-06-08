const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        warning: 'var(--text-warning)'
      },
      borderColor: {}
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-pseudo-selectors'),
    require('tailwind-scrollbar-hide')
  ]
};
