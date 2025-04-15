/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'first': 'var(--animate-first)',
        'second': 'var(--animate-second)',
        'third': 'var(--animate-third)',
        'fourth': 'var(--animate-fourth)',
        'fifth': 'var(--animate-fifth)',
        'shimmer': 'shimmer 2s linear infinite',
        'blink': 'blink 1s steps(1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from var(--conic-position), var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 