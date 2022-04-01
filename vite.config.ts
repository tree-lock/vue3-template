import "dotenv/config";
import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";
import visualizer from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import styleImport, { ElementPlusResolve } from "vite-plugin-style-import";
/** 在非预发布(release)环境下，开启模块可视化打包
 * 1. npm run build 会生成一个html文件
 * 2. 会自动打开这个html文件，显示打包中各个模块所占的空间 */
const visualize: Plugin[] =
  process.env.NODE_ENV !== "release"
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
    // Vite+Vue3
    vue(),
    // 加载可视化打包模块插件
    ...visualize,
    // 加载“原生svg”插件
    // 它会默认读取"public/svg"文件夹中的.svg文件，并为全局添加`icon-文件夹-文件名`的`svg``href`地址，使用详情见`src/components/SvgIcon.vue`
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "public/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
    // 自动导入(意味着不需要主动import，全局默认import，所以本模板在ts和vue文件中ref、reactive等api都可以直接使用)
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        // 全局引入vue默认导出的所有api，例如ref
        "vue",
        // 全局引入vue-router默认导出的所有api，例如useRouter
        "vue-router",
        // 自定义全局引入
        {
          // 全局引入"src/api/index.ts"的`default`导出，注册为全局变量`api`
          // 相当于在每个ts/vue文件中执行了一次 `import api from "@/api/index"`;
          "@/api/index": [["default", "api"]],
          "@/config/index": [["default", "config"]],
          "@/service/index": [["default", "$"]],
        },
      ],
      // 全局引入element-plus默认导出的所有api，例如ElMessage
      resolvers: [ElementPlusResolver()],
      // 生成的声明文件的位置
      dts: "src/auto-imports.d.ts",
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // 全局自动引入了 Element-Plus 的组件，当在Vue文件中使用 <El-Button></El-Button> 的时候，
      // 就会自动注册 El-Button 的TS声明
      resolvers: [ElementPlusResolver()],
      // 自动引入了`src/components`文件夹中的组件
      dirs: ["src/components"],
      extensions: ["vue", "ts"],
      deep: false,
      dts: "src/components.d.ts",
    }),
    // 全局自动引入了 Element-Plus 的被使用到的样式文件
    styleImport({
      resolves: [ElementPlusResolve()],
    }),
  ],
  resolve: {
    // 设置别名 src => @
    // 注意：在tsconfig.json和本文件中都要设置
    alias: {
      "@": resolve(join(__dirname, "src")),
    },
  },
  server: {
    // 设置后端代理，以解决跨域问题
    proxy: {
      // 请求 "/api" 时，转为对 http://localhost:8080/ 发出请求，同时删除 /api 前缀
      // 所有配置可以在"src/config/project.ts"中进行修改
      [process.env.VITE_BASE_API_URL]: {
        target: process.env.VITE_BASE_API_URL_PREFIX,
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(RegExp("^" + process.env.VITE_BASE_API_URL), ""),
      },
      // 请求 "/bing" 时，转为对 https://cn.bing.com/ 发出请求，同时删除 /bing 前缀
      // 这一配置是外部不变的，所以不读取配置
      "/bing": {
        target: "https://cn.bing.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bing/, ""),
      },
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  define: {
    "process.env": {},
  },
});
