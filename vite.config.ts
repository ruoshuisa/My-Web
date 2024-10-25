import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SSYUI",
      fileName: "ssy-ui",
      formats: ["es", "umd", "iife"],
    },
  },
});