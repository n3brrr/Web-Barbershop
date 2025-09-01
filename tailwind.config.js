/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#D4AF37',  // Gold
        'secondary': '#F5F5DC', // Beige
        'dark': '#000000',     // Black
      },
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        normal: '500',
      }
    },
  },
  plugins: [],
}