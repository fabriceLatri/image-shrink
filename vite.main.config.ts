import { defineConfig } from 'vite';

import { resolve } from 'path';

const ROOT_DIR = resolve(__dirname, 'src');

// https://vitejs.dev/config
export default defineConfig({
  plugins: [],
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      '@electron': resolve(ROOT_DIR, 'electron'),
      '@domain': resolve(ROOT_DIR, 'domain'),
      '@infrastructure': resolve(ROOT_DIR, 'infrastructure'),
    },
  },
});
