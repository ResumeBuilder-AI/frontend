import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  optimizeDeps: {
    include: ['ckeditor5-custom-build'],
  },
  build: {
    commonjsOptions: {
      include: [/ckeditor5-custom-build/, /node_modules/],
    }
  }
})
