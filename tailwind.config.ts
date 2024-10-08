/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#3B82F6'
        // 'primary':'#111827'
        'primary': '#1F2937'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

