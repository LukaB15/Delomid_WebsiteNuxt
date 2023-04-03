// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
      modules: [
            '@nuxtjs/tailwindcss',
            '@vueuse/nuxt',
            '@nuxt/image-edge',
          ],
          image: {
            // Options
          },
          postcss: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
          css: [
            '@fortawesome/fontawesome-free/css/all.css',
            '~/assets/css/main.css'
          ],
          app: {
            head: {
              title: 'Delomid Digital Data experts',
              meta: [
                {name: 'description', content: 'Delomid Digital Data experte en gestion et traitement des données et dans la conception d’applications web et mobiles'}
              ],
              script:[
                {
                  src:'https://kit.fontawesome.com/d6da04fe60.js',
                  crossorigin:'anonymous',
                }
              ]
            }
          }
          
})
