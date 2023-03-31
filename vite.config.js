// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'lib',
      fileName: 'lib',
    },
    learnscapes: {
      entry: resolve(__dirname, 'src/learnscapes.ts'),
      name: 'learnscapes',
      fileName: 'learnscapes',
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
})