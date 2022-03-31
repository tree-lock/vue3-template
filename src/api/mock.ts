/** 使用mock模拟数据 */
import Mock, { mock, Random } from "mockjs";
const mockUrl = config.baseUrl;
Mock.setup({
  timeout: "200-600",
});
export const isMock = ref<boolean>(false);
export const startMock = () => {
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
