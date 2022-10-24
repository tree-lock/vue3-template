<template>
  <div class="layout" :data-color-mode="darkMode">
    <el-container class="outer-container">
      <el-header><Header /></el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <Menu />
        </el-aside>
        <el-main
          ><router-view v-slot="{ Component }">
            <transition name="component-scale" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition> </router-view
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import Menu from "./layout-menu.vue";
import Header from "./layout-header.vue";
const darkMode = $.dark.mode ? "dark" : "light";
const asideWidth = $.collapse.asideWidth;
const headerBgColor = config.color.$headerBgColor;
const asideBgColor = config.color.$asideBgColor;
const mainBgColor = config.color.$mainBgColor;
const textColor = config.color.$textColor;
const borderColor = config.color.$borderColor;
const selectionBgColor = config.color.$selectionBgColor;
</script>

<style lang="less" scoped>
[data-color-mode="dark"] {
  color-scheme: dark;
}
div.layout {
  height: 100%;
  background-color: #333333;
  color: v-bind(textColor);

  > .outer-container {
    height: 100%;
    > .el-header {
      background-color: v-bind(headerBgColor);
      border-bottom: 1px v-bind(borderColor) solid;
    }
    > .el-container {
      // 将父容器设置为overflow: auto，让.outer-container, .el-container 和 .el-main 都成为 BFC ，使得 el-main 的 overflow: auto 生效
      overflow: auto;
      > .el-aside {
        background-color: v-bind(asideBgColor);
        transition: 1s;
      }
      > .el-main {
        background-color: v-bind(mainBgColor);
        min-width: 700px;
      }
    }
  }
}
</style>
<style lang="less">
[data-color-mode="dark"] {
  *::selection {
    background: v-bind(selectionBgColor);
  }
}
</style>
