import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Nintendo Switch',
        short_name: 'Nintendo Switch',
        description: 'Feel the Home Menu of the Nintendo Switch',
        theme_color: '#ffffff00',
        display: 'fullscreen',
        orientation: 'landscape',
        start_url: '.',
        icons: [
          {
            src: '/logo.svg',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});