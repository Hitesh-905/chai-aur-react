import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import tailwind

// https://vite.dev/config/
export default defineConfig({
plugins: [
    react(),
    tailwindcss(), // 2. Add it to the plugins array
  ],
})