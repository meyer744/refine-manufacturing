export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Refine Manufacturing | Custom Wood Manufacturing and Fabrication",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "From low volume custom productions, to high volume OEM standard production, we can cover it all. We didn’t invent wood manufacturing, but we’re here to Refine it." }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],

fontawesome: {
  icons: {
    solid: true,
    brands: true,
    regular: true
  }
},

googleAnalytics: {
    id: 'UA-192511197-1'
},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "uNS5la6WAi7KKrjtg8vapwtt",
        cacheProvider: "memory"
      }
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
