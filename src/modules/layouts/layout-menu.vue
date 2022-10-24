<template>
  <el-menu
    :active-text-color="activeTextColor"
    :background-color="menuBgColor"
    :default-active="defaultActive"
    router
    :collapse="isCollapse"
    :text-color="textColor"
  >
    <el-menu-item index="/home">
      <el-icon><home-filled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/company-management">
      <el-icon><briefcase /></el-icon>
      <span>公司管理</span>
    </el-menu-item>
    <el-menu-item index="/statistic">
      <el-icon><pie-chart /></el-icon>
      <span>使用统计</span>
    </el-menu-item>
    <el-menu-item index="/log">
      <el-icon><monitor /></el-icon>
      <span>日志系统</span>
    </el-menu-item>
    <div class="operation">
      <el-icon :color="ignoreColor" size="2rem" @click="changeCollapse"
        ><expand v-if="isCollapse" /><fold v-else
      /></el-icon>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  HomeFilled,
  Briefcase,
  PieChart,
  Monitor,
  Expand,
  Fold,
} from "@element-plus/icons-vue";

const isCollapse = $.collapse.isCollapse;
const changeCollapse = $.collapse.changeCollapse;
const route = useRoute();
const defaultActive = computed(() => route.matched[1].path);

const menuBgColor = config.color.$asideBgColor;
const textColor = config.color.$textColor;
const hoverBgColor = config.color.$hoverBgColor;
const activeTextColor = config.color.$activeTextColor;
const borderColor = config.color.$borderColor;
const ignoreColor = config.color.$ignoreColor;
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
  border-color: v-bind(borderColor);
  > li {
    --el-menu-hover-bg-color: v-bind(hoverBgColor);
  }
  div.operation {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
