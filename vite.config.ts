import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Worldwie_Tourism/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})