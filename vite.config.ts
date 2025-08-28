import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    middlewareMode: false,
    headers: {
      'Content-Security-Policy':
        'default-src \'self\'; frame-src \'self\' blob:; script-src \'self\' https://eu-assets.i.posthog.com \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.googleapis.com https://fonts.gstatic.com; img-src \'self\' data:; connect-src \'self\' https://eu-assets.i.posthog.com https://eu.i.posthog.com https://*.ingest.de.sentry.io;',
    },
  },
})
