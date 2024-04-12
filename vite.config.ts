import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ToDo: look for automated solution
  // only activate on github pages deploy
  // base: process.env.NODE_ENV === 'production' ? '/nintendo-switch/' : '/'
})
