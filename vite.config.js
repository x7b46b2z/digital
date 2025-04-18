import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-router-dom']
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
})
