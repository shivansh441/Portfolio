import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files
    assetsDir: 'assets', // Directory for static assets
    rollupOptions: {
      external: [
        '**/*.png', 
        '**/*.jpg', 
        '**/*.jpeg', 
        '**/*.gif' // Only if you need to prevent bundling these file types
      ],
      output: {
        entryFileNames: '[name].js', // Ensures .js files, avoids .mjs issues
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]', // Ensure assets have the correct extension
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      format: 'cjs', // Force CommonJS format to avoid module issues
    },
  },
});
