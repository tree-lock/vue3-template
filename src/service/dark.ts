/**
 * 用于配置暗黑模式
 */
import Cookies from "js-cookie";

export const mode = Cookies.get("darkMode") === "1";
export const changeMode = () => {
  Cookies.set("darkMode", Cookies.get("darkMode") === "1" ? "0" : "1");
  location.reload();
};
