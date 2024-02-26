import { resolve } from 'path';
import { defineConfig } from 'vite';

const ROOT_DIR = resolve(__dirname, 'src');

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@presentation': resolve(ROOT_DIR, 'presentation'),
    },
  },
});
