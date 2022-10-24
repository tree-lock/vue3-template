<script setup lang="ts">
/** 前缀(基本用不上)
 * 图标名(图标需放在public/svg文件夹,名称不包括后缀名，不能使用包含'-'分隔符)
 * 颜色
 * 高度
 * 宽度*/
const props = defineProps<{
  name: string;
  prefix?: string;
  color?: string;
  height?: number;
  width?: number;
  size?: number;
}>();
const svgColor = toRef(props, "color");
const symbolId = computed(() => `#${props.prefix ?? "icon"}-${props.name}`);
const width = (props.width ?? props.size ?? 24) + "px";
const height = (props.height ?? props.size ?? 24) + "px";
</script>

<template>
  <svg aria-hidden="true" :class="symbolId">
    <use :href="symbolId" :fill="svgColor" />
  </svg>
</template>

<style scoped lang="less">
svg {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
