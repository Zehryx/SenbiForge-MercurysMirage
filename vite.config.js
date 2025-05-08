import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SenbiForge-MercurysMirage/', // replace with your actual repo name
  plugins: [react()],
});
