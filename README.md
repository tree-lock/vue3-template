# Xmo 的 Vue 3 开发模板

该模板提供了 Vue3+Vite+Typescript 的模块化开发的基础框架，Vue 文件使用`<script setup>`SFCs 语法。

[gitee 地址](https://gitee.com/dXmo/vue3-template)

**_！先运行项目开发模式！_**

> 请先`npm install`(或任何其它包管理工具)并`npm run dev`以自动生成所有的`ts`声明文件；

> 第一次加载可能会需要一点时间；

> 模块缺少的类型，开发模式下打开对应模块的页面之后会加载出来；

## 安装教程

```bash
npm install degit -g
degit github:darkXmo/vue3-template vue3-template
```

## 推荐的 IDE

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - VSCode 提供了最佳的 Vue3 语法支持，搭配 Volar 插件(Vue Language Features (Volar))可以在`template`和`script`标签之间建立联系，同时为`props`定义的参数变量提供语法补充。前提是你使用`setup` + `composition api`而不是老旧的`component api`。

## 插件

> 本项目是系统开发而非组件或库的开发，因此除了质量管理插件之外，所有会影响打包的插件都默认视为`dependencies`。

### 开发依赖

- `vue-router` Vue 页面路由

- `element-plus` 默认外部公共组件库，可手动替换成其它例如 `ant-design-vue` 的组件库

- `Vite` 自动引入 - 使用详情可参照[本文](https://juejin.cn/post/7012446423367024676)

  - `unplugin-auto-import` 全局自动隐式 `import` 导出 - 通常用于导入 `vue` `vue-router` 的导出 - 已配置
  - `unplugin-vue-components` 全局自动隐式 `import` `Vue` 组件 - 通常用于导入 `element-plus` 等公共组件库的组件 - 默认配置 `element-plus`

  > `unplugin-auto-import` 和 `unplugin-vue-components` 会分别生成 `auto-imports.d.ts` 和 `components.d.ts` 声明文件。

- `sass` css 样式语言

- `rollup-plugin-visualizer` 打包的时候生成各模块的可视化占用比例。

- `vite-plugin-svg-icons` - 引入 `svg` 原生图标 - 已配置，搭配 `SvgIcon` 组件使用

_`@types/lodash-es`和`rollup`这两个库事件上不需要安装，只不过不安装会提示`peerDependencies`错误，实际用不上_

### 质量管理

- `husky` 劫持 `git` 事件，用于在 `git` 的各个阶段进行行为检测

- `commitlint` - git commit 管理，搭配 `git-cz` 实现格式规范化的 `git commit`

  - `@commitlint/cli`
  - `@commitlint/config-conventional"`
  - `cz-conventional-changelog`

- `lint-staged` + `prettier` 在 `git commit` 的时候对代码进行格式化，才用 `prettier` 的默认方案进行。

- `git-cz` - 请使用 `npm run commit` 代替 `git` 命令，详情参照 `package.json` 中的 `scripts.commit`

## HELP

### Api 请求模拟

可以在 `src/index.ts` 中开启或关闭 `mock` 模拟 `XHR` / `Axios` 请求;

### 项目打开 `ref`/`reactive` 等`vue`/`vue-router`变量爆红 | 生成完整的 `auto-imports.d.ts` 和 `components.d.ts`

1. 先进入项目开发模式 `npm run dev`
2. 再点击打开网页 `http://localhost:3000`
3. `vite` 会自动在 `src` 文件夹中生成`auto-imports.d.ts` 和 `components.d.ts`这两个文件

### 为什么不用`store`(`vue-store`或`pinia`)？

`vue3`允许在外部`ts`文件中使用`ref`和`reactive`，可以直接使用`ref`在`ts`中，在保留变量响应式的前提下，定义全局变量然后在`vue`或`ts`文件中引用，不需要画蛇添足添加全局状态管理器。

### 为什么要单独设立`service`而不是在`vue`文件中直接写逻辑

1. 解耦合
2. 可复用
3. 缓存

## 开发约束

1. 任意模块文件大小不能超过 500 行，对于大型模块应当拆分成多个小模块以减小复杂度。
2. 原则上不需要任何可复用的复杂组件，如果有相同相似功能的组件，应当直接拷贝成两个互不影响的组件。
   1. 对于可以复用的小组件，应当放在 `@/components` 文件夹中。在`@/components`中的文件会被全局注册，无需`import`即可直接使用。
