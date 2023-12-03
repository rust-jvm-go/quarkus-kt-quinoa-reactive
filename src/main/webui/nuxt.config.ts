// https://nuxt.com/docs/api/configuration/nuxt-config

/*import {fileURLToPath} from "url";*/

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    },
    plugins: [
      svgLoader()
    ]
  },
  css: [
    "~/assets/css/quinoa.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss"
  ],
  plugins: []
})
