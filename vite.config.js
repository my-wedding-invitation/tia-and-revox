import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
  base: '/tia-and-revox/',
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: './',
  optimizeDeps: {
    include: ['map-promisified']
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
})
