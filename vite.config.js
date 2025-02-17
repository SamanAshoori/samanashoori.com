
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '3ee5f85a-f792-48c2-841d-7893d1d68ef0-00-76dujhavb5g1.janeway.replit.dev'
    ]
  }
})
