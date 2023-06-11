// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: {
        lib: resolve(__dirname, 'src/lib.ts'),
        learnscape: resolve(__dirname, 'src/learnscapes.ts'),
        DevComponent: resolve(__dirname, 'src/DevComponent.ts')
      },
      formats: ["es", "cjs"]
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
})