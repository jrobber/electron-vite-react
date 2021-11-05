import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import twstyled from 'vite-plugin-twstyled'
import commonjsExternals from 'vite-plugin-commonjs-externals'
import builtinModules from 'builtin-modules'

const commonjsPackages = [
  'typescript',
  'electron',
  'electron/main',
  'electron/common',
  'electron/renderer',
  'original-fs',
  ...builtinModules
] as const

export default defineConfig({
  plugins: [
    twstyled(),
    reactRefresh(),
    commonjsExternals({ externals: commonjsPackages })
  ],
  base: './',
  root: resolve('./src/renderer'),
  build: {
    outDir: resolve('./dist/src/main'),
    emptyOutDir: true
    // commonjsOptions: {

    // }
  },
  resolve: {
    alias: [
      {
        find: '@/renderer',
        replacement: resolve(__dirname, 'src/renderer')
      },
      {
        find: '@/common',
        replacement: resolve(__dirname, 'src/common')
      }
    ]
  }
})
