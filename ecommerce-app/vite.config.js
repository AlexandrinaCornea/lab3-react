import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs/promises'
import path from 'node:path'

const copySrcAssetsPlugin = {
  name: 'copy-src-assets-for-json-paths',
  apply: 'build',
  async closeBundle() {
    const from = fileURLToPath(new URL('./src/assets', import.meta.url))
    const to = fileURLToPath(new URL('./dist/src/assets', import.meta.url))

    await fs.rm(to, { recursive: true, force: true })
    await fs.mkdir(path.dirname(to), { recursive: true })
    await fs.cp(from, to, { recursive: true })
  },
}

export default defineConfig({
  plugins: [react(), copySrcAssetsPlugin],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
})
