import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  plugins: [react()],
  server: {
    host: true,
  },
});
