<template>
  <el-menu
    :active-text-color="activeTextColor"
    :background-color="menuBgColor"
    default-active="2"
    :text-color="textColor"
  >
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
const menuBgColor = config.style.color.$asideBgColor;
const textColor = config.style.color.$textColor;
const hoverBgColor = config.style.color.$hoverBgColor;
const activeTextColor = config.style.color.$activeTextColor;
const borderColor = config.style.color.$borderColor;
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border-color: v-bind(borderColor);
  > li {
    --el-menu-hover-bg-color: v-bind(hoverBgColor);
  }
}
</style>
