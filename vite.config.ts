import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://<user>.github.io/ProductTrainingVideos/ on GitHub Pages
  base: process.env.GITHUB_ACTIONS ? '/ProductTrainingVideos/' : '/',
  plugins: [react()],
});
