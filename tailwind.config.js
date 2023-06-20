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
      fontSize: {
        s30: ['1.875rem', { lineHeight: '1.2em', letterSpacing: '-.0117em' }],
        s24: ['1.5rem', { lineHeight: '1.166667em', letterSpacing: '-0.015em' }],
        s18: ['1.125rem', { lineHeight: '1.333333em', letterSpacing: '-0.01333em' }],
        s16: ['1rem', { lineHeight: '1.25em', letterSpacing: '-0.015em' }],
        s14: ['0.875rem', { lineHeight: '1.28em', letterSpacing: '-0.011em' }],
        s12: ['0.75rem', { lineHeight: '1.1667em', letterSpacing: '-0.0125em' }],
        s10: ['0.625rem', { lineHeight: '1.4em' }]
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
