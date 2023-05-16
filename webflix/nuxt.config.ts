// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: [
      //adding the global scss file to nuxt
      '@/assets/scss/global.scss',
      'vuetify/lib/styles/main.sass',
      '@mdi/font/css/materialdesignicons.min.css'
   ],
   app: {
      head: {
         charset: 'utf-8',
         viewport: 'width=device-width, initial-scale=1',
      }
   },
   build: {
      transpile: ['vuetify'],
    },
   vite: {
      define: {
         'process.env.DEBUG': false,
      },
   }, 
})
