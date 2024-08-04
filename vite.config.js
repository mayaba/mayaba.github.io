import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist' // Output directory for the built files
  },
  server: {
    port: 3000 // Port for the development server
  }
});
