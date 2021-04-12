export default {
  target: 'static',
  components: true,

  buildModules: [
    '@nuxtjs/composition-api'
  ],

  modules: process.env.NO_NITRO ? [] : [
    '@nuxt/nitro/compat',
  ],
}
