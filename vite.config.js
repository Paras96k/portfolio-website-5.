import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
  preview: {
    port: 4173,
    open: false,
    host: true,
  },
});
