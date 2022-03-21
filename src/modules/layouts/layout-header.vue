<template>
  <div class="layout-header">
    <div>Header</div>
    <el-button @click="changeMode"> {{ mode }} </el-button>
  </div>
</template>

<script lang="ts" setup>
import Cookies from "js-cookie";
const mode = Cookies.get("darkMode") === "1" ? "常规模式" : "暗黑模式";
const changeMode = () => {
  Cookies.set("darkMode", Cookies.get("darkMode") === "1" ? "0" : "1");
  location.reload();
};
</script>

<style lang="scss" scoped>
div.layout-header {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
