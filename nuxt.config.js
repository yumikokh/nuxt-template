import { HEAD, BASE_DIR } from './constants'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: HEAD({}),

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['reset-css', '@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-mq.js',
    // '@/plugins/vue-prlx.js',
    // { src: '@/plugins/vue-inview.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    // https://typed-vuex.roe.dev
    'nuxt-typed-vuex',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  'google-analytics': {
    // id: 'UA-XX',
    // debug: {
    //   sendHitTask: process.env.NODE_ENV === 'production',
    //   trace: process.env.NODE_ENV === 'development',
    // },
  },

  styleResources: {
    scss: [
      '@/assets/scss/vars/_variables.scss',
      '@/assets/scss/vars/_easing.scss',
      '@/assets/scss/vars/_mixin.scss',
      '@/assets/scss/vars/_functions.scss',
      '@/assets/scss/vars/_keyframes.scss',
      '@/assets/scss/vars/_transition.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, _ctx) {
      // alias
      const alias = (config.resolve.alias = config.resolve.alias || {})
      alias['@img'] = '@/assets/images/'
    },
    postcss: {
      plugins: {
        'postcss-assets': { loadPaths: ['assets/images/'] },
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },

    // サードパーティ
    transpile: ['three', 'Typekit'],
  },

  server: {
    host: '0.0.0.0',
  },

  router: {
    base: BASE_DIR,
    linkPrefetchedClass: 'nuxt-link-prefetched',
  },
}
