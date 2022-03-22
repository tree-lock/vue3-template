export const isCollapse = ref<boolean>(false);
export const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
export const asideWidth = computed(() => (isCollapse.value ? "64px" : "200px"));
