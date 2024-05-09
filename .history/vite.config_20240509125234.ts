import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input:'src/index.html',
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include:['react', 'react-dom']
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
  base: "/minna",
})
