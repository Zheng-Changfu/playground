import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    vue(), 
    // analyzer()
  ],
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
})
