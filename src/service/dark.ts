/**
 * 用于配置暗黑模式
 */

export const mode = localStorage.getItem("darkMode") === "1";
export const changeMode = () => {
  localStorage.setItem(
    "darkMode",
    localStorage.getItem("darkMode") === "1" ? "0" : "1"
  );
  location.reload();
};
