import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure assets are handled correctly
    assetsDir: 'assets',
    // Rollup options for better compatibility
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})