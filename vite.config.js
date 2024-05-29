import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@p': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, './packages/index.js'),
      name: 'UiDemo',
      fileName: 'ui-demo',
      formats: ['es','umd','cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
