<script setup lang="ts">
import { computed } from "vue";
/** 前缀(基本用不上)
 * 图标名(图标需放在public/svg文件夹,名称不包括后缀名，不能使用包含'-'分隔符)
 * 颜色
 * 高度
 * 宽度*/
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  size: {
    type: String,
  },
});
const svgColor = toRef(props, "color");
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const width = props.width ?? props.size;
const height = props.height ?? props.size;
</script>

<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :href="symbolId" :fill="svgColor" />
  </svg>
</template>

<style scoped lang="scss"></style>
