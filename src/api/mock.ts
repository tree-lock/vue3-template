import { mock, Random } from "mockjs";
const mockUrl = config.baseUrl;
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
