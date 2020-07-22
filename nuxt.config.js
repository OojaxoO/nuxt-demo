// export default 
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

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
    'iview/dist/styles/iview.css'
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    plugins: [  { src: '~/plugins/axios', ssr: true }, '~/plugins/auth.js' ],
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
          logout: { 
            url: '/o/token/', 
            method: 'post' 
          },
          user: { 
            url: '/user/user/userinfo/', 
            method: 'get',
            propertyName: 'data',
          }
        },
        //tokenRequired: false,
        //tokenType: false,

      }
    }
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
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  dev: (process.env.NODE_ENV !== 'production')
}
