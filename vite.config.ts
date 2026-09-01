import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://training.digitalpaani.com/ — a custom domain serves from
  // the root, so there is no project-path prefix any more. Everything that
  // builds a link (auth redirects, equipment share links, demo share links)
  // reads import.meta.env.BASE_URL, so they all follow from this one value.
  base: '/',
  plugins: [react()],
});
