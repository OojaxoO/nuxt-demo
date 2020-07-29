module.exports = {
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'iview/dist/styles/iview.css'
    'view-design/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  //  '@nuxtjs/dotenv' 
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    plugins: [  { src: '~/plugins/axios', ssr: false }, '~/plugins/auth.js' ],
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/o/token/',
            method: 'post',
            auth: {
              username: 'gh38jpyaYO0skI7QoAtB0qXHTPCBjAEgHsoNCLCo',
              password: 'KnxgWzNDednxRDHM83E1zbd8WijWMcGqgUW8ppWcJpl5GJWuHKUYuzpJWILWvA6hvtK3TxsPH1YTNCQuOtuHUiYMuIkC1dW6vmEkLzopThi1ANWXc0IePVihM6e5DSMa'
            },
            propertyName: 'access_token',
          },
          logout: false,
          user: { 
            url: '/user/user/userinfo/', 
            method: 'get',
            propertyName: 'data',
          }
        },
        //tokenRequired: false,
        //tokenType: false,

      }
    },
    redirect: {
      logout: '/login',
      login: '/login',
      home: '/',
    },
    rewriteRedirects: true,
  },

  axios: {
    baseURL: 'http://172.16.90.230:10000', 
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['@nuxtjs/auth'],
    extend (config, ctx) {
    }
  },
  router: {
    middleware: ['auth'],
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  },
  dev: (process.env.NODE_ENV !== 'production')
}
