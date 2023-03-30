import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";
import visualizer from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    // Vite+Vue3
    vue(),
    // 加载可视化打包模块插件
    mode !== "production"
      ? visualizer({
          open: true,
          gzipSize: true,
        })
      : undefined,
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
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
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
      // 只在开发模式有效，打包之后需要在Nginx中配置路由转发
      [process.env.VITE_BASE_API_URL as string]: {
        target: process.env.VITE_BASE_API_URL_PREFIX as string,
        changeOrigin: true,
        rewrite: (path) => {
          console.log(process.env.VITE_BASE_API_URL);
          return path.replace(RegExp("^" + process.env.VITE_BASE_API_URL), "");
        },
      },
    },
  },
}));
