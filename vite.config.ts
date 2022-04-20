import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
          manifest: {
              name: 'Toolkit',
              short_name: 'Toolkit',
              description: '',
              theme_color: '#000000',
              icons: [
                  {
                      src: 'android-chrome-192x192.png',
                      sizes: '192x192',
                      type: 'image/png',
                  },
                  {
                      src: 'android-chrome-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                  },
                  {
                      src: 'android-chrome-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                      purpose: 'any maskable',
                  }
              ]
          }
      }),
  ],
    base: "/ToolkitPWA/"
})
