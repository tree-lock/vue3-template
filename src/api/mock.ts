/** 使用mock模拟数据 */
import Mock, { mock, Random } from "mockjs";
// Windows开发可能会遇到VSCode报错 找不到"meta" 的问题，这是VSCode自己的bug，暂不知解决办法，但保存一下env.d.ts就能解决。
const mockUrl = import.meta.env.VITE_BASE_API_URL;
Mock.setup({
  timeout: "200-600",
});
export const isMock = ref<boolean>(false);
const startMock = () => {
  isMock.value = true;
  mock(mockUrl + "/auth/login", "post", (): Auth.Response.Login => {
    return {
      access_token: Random.string(),
    };
  });
  mock(mockUrl + "/user/profile", "get", (): User.Response.Profile => {
    return {
      id: Random.guid(),
      username: Random.name(),
      name: Random.cname(),
      date: Random.date(),
      role: "admin",
      contact: "",
      email: null,
      gender: "secret",
    };
  });
};

startMock();
