import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('Starting app: ', env.VITE_APP_TITLE)
  return {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      VitePWA({
        registerType: 'prompt',
        injectRegister: 'auto',
        workbox: {
          cleanupOutdatedCaches: true,
        },
        pwaAssets: {
          disabled: false,
          config: true,
        },
        manifest: {
          name: 'todo',
          short_name: 'todo',
          description: 'This is TODO',
          theme_color: '#0000ff',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
