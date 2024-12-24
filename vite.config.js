import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Assurez-vous que la base est bien "/"
  build: {
    outDir: 'dist', // Les fichiers générés seront dans "dist"
    emptyOutDir: true,
  },
});