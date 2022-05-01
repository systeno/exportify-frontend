import {defineNuxtConfig} from 'nuxt'
import {fileURLToPath} from "url";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // This includes the css file in every component, causing the build time to increase drastically.
  //css: ["@/assets/styles/custom.scss"],
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: '/assets/styles/custom.scss' }
      ],
    }
  }
})
