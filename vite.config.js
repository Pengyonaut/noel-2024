import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/noel-2024/' // Remplacez "votre-repo" par le nom de votre dépôt
});