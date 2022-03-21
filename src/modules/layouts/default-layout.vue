<template>
  <div class="layout">
    <el-container class="outer-container">
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main
          ><router-view v-slot="{ Component }">
            <transition>
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
const headerBgColor = config.style.color.$headerBgColor;
const asideBgColor = config.style.color.$asideBgColor;
const mainBgColor = config.style.color.$mainBgColor;
const textColor = config.style.color.$textColor;
const borderColor = config.style.color.$borderColor;
</script>

<style lang="scss" scoped>
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
      > .el-aside {
        background-color: v-bind(asideBgColor);
      }
      > .el-main {
        background-color: v-bind(mainBgColor);
      }
    }
  }
}
</style>
