// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/styles/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    // highlight: {
    //   theme: {
    //     default: 'min-light',
    //     dark: 'min-dark'
    //   }
    // }
  }
})
