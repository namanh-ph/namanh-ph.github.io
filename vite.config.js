import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User-site repo (namanh-ph.github.io) -> base must be "/"
// For a project-site repo, this would be "/<repo-name>/"
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
