import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, join } from 'path/posix';
import visualizer from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

const visualize: Plugin[] =
  process.env.NODE_ENV !== 'release'
    ? [
        visualizer({
          open: true,
          gzipSize: true,
        }),
      ]
    : [];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...visualize,
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'public/svg')],
      symbolId: 'icon-[dir]-[name]',
    }),
    // 全局自动引入了 Element-Plus 的组件
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '@/api/index': [['default', 'api']],
          '@/store/index': [['default', 'store']],
          '@/config/index': [['default', 'config']],
        },
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components/global'],
      extensions: ['vue', 'ts'],
      deep: false,
      dts: 'src/components.d.ts',
    }),
    styleImport({
      resolves: [ElementPlusResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(join(__dirname, 'src')),
    },
  },
  server: {},
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
