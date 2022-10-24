<script setup lang="ts">
// RouterView不是vue-router的默认导出，所以需要引入
import { RouterView } from "vue-router";
// Element-Plus引入zh-cn中文语言包
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
<!-- createApp(App)会让App.vue会自动生成div#app节点，所以不需要主动再写一个div#app出来 -->
<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>

<style lang="less">
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
