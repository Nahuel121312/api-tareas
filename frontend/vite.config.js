import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1234',  // pon el puerto de tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
