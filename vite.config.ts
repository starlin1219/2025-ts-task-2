import { fileURLToPath, resolve, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/2025-ts-task-2/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //   },
    //   output: {
    //     dir: resolve(__dirname, 'dist'),
    //   },
    // },
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      output: {
        dir: fileURLToPath(new URL('./dist', import.meta.url)),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['mixed-decls', 'import', 'color-functions', 'global-builtin'],
        verbose: false,
      },
    },
  },
})
