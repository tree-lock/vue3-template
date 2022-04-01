import Cookies from "js-cookie";
/**
 * 存储token信息
 * @param token
 */
const saveToken = (token: string) => {
  Cookies.set("hhf-token", token, {
    path: "/",
  });
};

/**
 * 清除登录信息
 */
const clearToken = () => {
  Cookies.remove("hhf-token");
  location.href = import.meta.env.BASE_URL + "login";
};
export const logout = clearToken;
/**
 * 获取token值
 */
export const getToken = () => {
  return Cookies.get("hhf-token");
};
/**
 * 登录，保存token
 * @param form 用户名和密码
 */
export const login = async (form: Auth.Request.LoginForm) => {
  const res = await api.auth.postLoginReq(form);
  saveToken(res.data.access_token);
};
