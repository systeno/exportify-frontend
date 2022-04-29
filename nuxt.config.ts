import {defineNuxtConfig} from 'nuxt'
import {fileURLToPath} from "url";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/base.scss"],
  alias: {
    "images": fileURLToPath(new URL('./assets/images', import.meta.url)),
    "styles": fileURLToPath(new URL('./assets/styles', import.meta.url)),
    "data": fileURLToPath(new URL('./assets/other/data', import.meta.url))
  }
})
