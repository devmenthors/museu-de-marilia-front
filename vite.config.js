import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // o próprio plugin só roda no "npm run dev"; não vai para o build de produção
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // "@" aponta para a pasta src (ex.: '@/Views/LoginView.vue')
    },
  },
  build: {
    sourcemap: false, // não publica os .map em produção, para não expor o código-fonte original
  },
})
