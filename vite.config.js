import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' }), tailwindcss()],

  // Optimize dependencies
  optimizeDeps: {
    include: ['@supabase/supabase-js', 'lucide-react']
  },

  // Build optimizations
  build: {
    // Enable tree shaking and minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },

    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'aos'],
          'routing': ['react-router-dom'],
          'icons': ['lucide-react'],
          'supabase': ['@supabase/supabase-js']
        }
      }
    },

    // Chunk size warnings
    chunkSizeWarningLimit: 500,

    // Source maps for production debugging
    sourcemap: false,

    // Target modern browsers
    target: 'es2020'
  },

  // Development optimizations
  server: {
    hmr: true
  }
})
