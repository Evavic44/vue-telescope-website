import 'dotenv/config'

export default {
  mode: 'universal',
  head: {
    title: 'Vue Telemetry | Discover websites made with Vue.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'With Vue Telemetry, reveal the Vue technologies used on any website'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'font-body antialiased overflow-x-hidden overflow-y-scroll text-grey-900'
      ]
    }
  },
  loading: { color: '#fff' },
  css: [],
  env: {
    ICONS_URL: 'https://nuxt-company.github.io/vue-telemetry-analyzer/',
    API_HASURA_URL: process.env.API_HASURA_URL,
    // TODO: remove before production
    HASURA_ADMIN_SECRET_KEY: process.env.HASURA_ADMIN_SECRET_KEY
  },
  plugins: [
    '@/plugins/hasura.js',
    '@/plugins/infinite-loading.client.js',
    '@/plugins/redirect.client.js',
    '@/plugins/click-outside.client.js',
    '@/plugins/gsap.client'
  ],
  generate: {
    fallback: '404.html'
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxt/http'
  ],
  components: true,
  http: {
    browserBaseURL: '/'
  }
}
