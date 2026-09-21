import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cervical-spondylosis-hub/',
  plugins: [react()],
  server: { port: 5176 },
})
