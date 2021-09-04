export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title:  'کارخانه نوآوری شیراز',
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: 'کارخانه نوآوری شیراز | فضای کار برای فریلنسرها و کارآفرینان در شیراز'
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon2.ico"
      },
      {
        rel: "stylesheet",
        href: "https://unicons.iconscout.com/release/v2.1.5/css/unicons.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/variables.less", "~/assets/styles/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/animejs",
    "@/plugins/axios.js",
    "@/plugins/onReload.js",
    "@/plugins/jalali.js",
    {
      src: "~~/node_modules/vue-rellax/lib/nuxt-plugin",
      ssr: false
    }
    // {
    //   src: '~/plugins/vue-carousel',
    //   ssr: false
    // },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  }
};
