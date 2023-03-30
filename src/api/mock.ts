/** 使用mock模拟数据 */
import Mock from "mockjs";
const mockUrl = import.meta.env.VITE_BASE_API_URL;
Mock.setup({
  timeout: "200-600",
});
export const isMock = ref<boolean>(false);
const startMock = () => {
  isMock.value = true;
};

startMock();
