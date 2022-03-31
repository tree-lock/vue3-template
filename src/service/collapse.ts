import { throttle } from "./util";
/** 当浏览器伸缩的时候，如果页面宽度小于1040，则收缩侧边栏。
 * 使用节流减少监听次数
 */
window.addEventListener(
  "resize",
  throttle(() => (isCollapse.value = document.body.scrollWidth <= 1040), 300),
  false
);
/** 是否收缩侧边栏 */
export const isCollapse = ref<boolean>(document.body.scrollWidth <= 1040);
/** 修改侧边栏的收缩状态 */
export const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
/** 侧边栏的宽度，由侧边栏的收缩状态决定 */
export const asideWidth = computed(() => (isCollapse.value ? "64px" : "200px"));
