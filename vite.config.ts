import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: true,
      },
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components/autoImportComponents'],
      dts: 'src/components.d.ts',
    }),

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
