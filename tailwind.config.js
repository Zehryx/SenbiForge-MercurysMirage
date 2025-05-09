/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold:   '#D4AF37',
        silver: '#C0C0C0',
      },
      fontFamily: {
        // Replace these names with whatever your font files are called
        title:     ['"YourTitleFont"', 'serif'],
        inter:     ['Inter', 'sans-serif'],
        'space-mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}