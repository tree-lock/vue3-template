# Xmo 的 Vue 3 开发模板

该模板提供了 Vue3+Vite+Typescript 的模块化开发的基础框架，Vue 文件使用`<script setup>`SFCs 语法。

## 推荐的 IDE

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - VSCode 提供了最佳的 Vue3 语法支持，搭配 Volar 插件(Vue Language Features (Volar))可以在`template`和`script`标签之间建立联系，同时为`props`定义的参数变量提供语法补充。前提是你使用`setup` + `composition api`而不是老旧的`component api`。

## 插件

> 本项目是系统开发而非组件或库的开发，因此除了质量管理插件之外，所有会影响打包的插件都默认视为`dependencies`。

### 开发依赖

- `vue-router` Vue 页面路由

- `element-plus` 默认外部公共组件库，可自由替换成其它例如 `ant-design-vue` 的组件库

- `Vite` 自动引入 - 使用详情可参照[本文](https://juejin.cn/post/7012446423367024676)

  - `unplugin-auto-import` 全局自动隐式 `import` 导出 - 通常用于导入 `vue` `vue-router` 的导出 - 已配置
  - `unplugin-vue-components` 全局自动隐式 `import` `Vue` 组件 - 通常用于导入 `element-plus` 等公共组件库的组件 - 默认配置 `element-plus`
  - `vite-plugin-style-import` 全局自动引入 `import` 样式文件 - 通常用于导入 `element-plus` 等公共组件库的样式文件
    > 注意 `v2.0.0` 版本存在 `bug` ，不要 `install` 最新版本。

  > `unplugin-auto-import` 和 `unplugin-vue-components` 会分别生成 `auto-imports.d.ts` 和 `components.d.ts` 声明文件，由于这两个声明文件会在开发阶段反复生成，容易产生`git`垃圾，因此他们被置入`.gitignore`中。然而缺少声明文件，有可能会导致无法`build`，因此在`build`之前，应当首先生成好完整的声明文件。
  > 如果需要在服务器`build`，则一个合适的解决办法是在`master`和`release`分支上，删除`.gitignore`中忽略的两个声明文件，这一行为最好用脚本来实现。

- `sass` css 样式语言

- `rollup-plugin-visualizer` 打包的时候生成各模块的可视化占用配比。

- `vite-plugin-svg-icons` - 引入 `svg` 原生图标 - 已配置，搭配 `SvgIcon` 组件使用

### 质量管理

- `husky` 劫持 `git` 事件，用于在 `git` 的各个阶段进行行为检测

- `commitlint` - git commit 管理，搭配 `git-cz` 实现格式规范化的 `git commit`

  - `@commitlint/cli`
  - `@commitlint/config-conventional"`
  - `cz-conventional-changelog`

- `lint-staged` + `prettier` 在 `git commit` 的时候对代码进行格式化，才用 `prettier` 的默认方案进行。

## HELP

### Api 请求模拟

可以在 `src/index.ts` 中开启或关闭 `mock` 模拟 `XHR` / `Axios` 请求;

### 项目打开 `ref`/`reactive` 等`vue`/`vue-router`变量爆红 | 生成完整的 `auto-imports.d.ts` 和 `components.d.ts`

1. 先进入项目开发模式 `npm run dev`
2. 再点击打开网页 `http://localhost:3000`
3. `vite` 会自动在 `src` 文件夹中生成`auto-imports.d.ts` 和 `components.d.ts`这两个文件

## 开发约束

1. 任意模块文件大小不能超过 500 行，对于大型模块应当拆分成多个小模块以减小复杂度。
2. 原则上不需要任何可复用的复杂组件，如果有相同相似功能的组件，应当直接拷贝成两个互不影响的组件。
   1. 对于可以复用的小组件，应当放在 `@/components` 文件夹中。在`@/components`中的文件会被全局注册，无需`import`即可直接使用。
