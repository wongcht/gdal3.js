import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const gdal3LibPath = fileURLToPath(new URL('../../build/package/gdal3.js', import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      'gdal3-lib': gdal3LibPath
    }
  },
  optimizeDeps: {
    include: ['gdal3-lib']
  },
  plugins: [
    vue2(),
    viteStaticCopy({
      targets: [
        { src: '../../build/package/gdal3.js', dest: 'package', rename: { stripBase: true } },
        { src: '../../build/package/gdal3WebAssembly.wasm', dest: 'package', rename: { stripBase: true } },
        { src: '../../build/package/gdal3WebAssembly.data', dest: 'package', rename: { stripBase: true } }
      ]
    })
  ],
  build: {
    outDir: '../../build/app',
    emptyOutDir: true,
    commonjsOptions: {
      include: [/build\/package\/gdal3\.js/, /node_modules/]
    }
  }
})
