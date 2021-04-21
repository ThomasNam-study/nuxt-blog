const bodyParser = require('body-parser')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/date-filter.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  axios: {
    Credential: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8888'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
/*  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        components: resolve(__dirname, 'pages/index.vue')
      });
    }
  }*/
  // rootDir: '/my-app'
  ,
  serverMiddleware: [
    bodyParser.json(),
    "~/api"
  ]
}
