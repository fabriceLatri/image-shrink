import { defineConfig } from 'vite';

import { resolve } from 'path';

const ROOT_DIR = resolve(__dirname, 'src');

// https://vitejs.dev/config
export default defineConfig({
  build: { sourcemap: true },
  plugins: [],
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      '@domain': resolve(ROOT_DIR, 'domain'),
      '@infrastructure': resolve(ROOT_DIR, 'infrastructure'),
      '@presentation': resolve(ROOT_DIR, 'presentation'),
    },
  },
});
