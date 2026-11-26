import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
