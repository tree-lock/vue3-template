import Cookies from "js-cookie";

const darkMode = Cookies.get("darkMode") === "1";
// 暗黑模式下的颜色
const darkColor = {
  $headerBgColor: "#161b22",
  $asideBgColor: "#0d1117",
  $hoverBgColor: "#1e1f20",
  $mainBgColor: "#010409",
  $textColor: "#c9d1d9",
  $activeTextColor: "#ffd04b",
  $borderColor: "#21262d",
  $level1Color: "#d36230",
  $ignoreColor: "#70757a",
};
// 常规模式下的颜色
const normalColor = {
  $headerBgColor: "#f5f7fa",
  $asideBgColor: "#ffffff",
  $hoverBgColor: "#ecf5ff",
  $mainBgColor: "#f9fafc",
  $textColor: "#303133",
  $activeTextColor: "#409eff",
  $borderColor: "#dcdfe6",
  $level1Color: "#ff6723",
  $ignoreColor: "#70757a",
};

export default darkMode ? darkColor : normalColor;
