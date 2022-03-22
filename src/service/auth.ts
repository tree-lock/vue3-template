import Cookies from "js-cookie";

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
  location.href = "/login";
};

export const getToken = () => {
  return Cookies.get("hhf-token");
};

export const login = async (form: Auth.Request.LoginForm) => {
  const res = await api.auth.postLoginReq(form);
  saveToken(res.data.access_token);
};
