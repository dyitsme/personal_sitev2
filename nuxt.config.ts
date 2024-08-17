// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/content", "@nuxt/icon", "@nuxt/image"],
  content: {
    highlight: {
      theme: 'github-light'
      // theme: 'github-dark',
      // preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})