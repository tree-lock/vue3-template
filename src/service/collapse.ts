import { throttle } from "./util";

window.addEventListener(
  "resize",
  throttle(() => (isCollapse.value = document.body.scrollWidth <= 1040), 300),
  false
);

export const isCollapse = ref<boolean>(document.body.scrollWidth <= 1040);
export const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
export const asideWidth = computed(() => (isCollapse.value ? "64px" : "200px"));
