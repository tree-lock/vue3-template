// 在LocalStorage中记录用户的模式选择，设置模式参见'src/service/dark.ts'
const darkMode = localStorage.getItem("darkMode") === "1";
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
  $clickBgColor: "#343434",
  $selectionBgColor: "#1e4273",
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
  $clickBgColor: "#d9ecff",
  $selectionBgColor: "#328ffe",
};

export default darkMode ? darkColor : normalColor;
