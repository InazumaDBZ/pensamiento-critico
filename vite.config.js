import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';  

export default defineConfig({
  // 🏠 Ruta raíz para GH Pages
  base: '/pensamiento-critico/',
  plugins: [
    react(),        // plugin de React
    tailwindcss(),  // plugin de Tailwind  ← añadido
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
