import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          // UPSC app chunks for code splitting
          upsc: ['./src/components/upsc/XploarPhase1', './src/components/upsc/XploarPhase2'],
          // UI components chunk
          ui: ['./src/components/ui'],
          // Animation libraries
          animations: ['framer-motion', 'aos'],
          // Routing
          routing: ['react-router-dom']
        }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Target modern browsers for better performance
    target: 'es2020'
  },
  // Development optimizations
  server: {
    // Enable HMR for better development experience
    hmr: true,
    // Optimize file watching
    watch: {
      usePolling: false,
      interval: 100
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'zustand'],
    exclude: ['@supabase/supabase-js'] // Exclude to avoid bundling issues
  }
})
