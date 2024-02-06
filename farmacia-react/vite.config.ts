// vite.config.ts

import { defineConfig } from 'vite';

export default defineConfig({
  // Adicione uma configuração específica para lidar com arquivos de imagem
  resolve: {
    alias: {
      // Defina um alias para a pasta de assets
      '@assets': '/src/assets',
    },
  },
});
