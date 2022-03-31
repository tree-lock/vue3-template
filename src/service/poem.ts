// 诗词
import { AxiosResponse } from "axios";
import axios from "axios";
const token = window.localStorage.getItem("jinrishici-token");
const poem = ref<string>("Loading");
// 从jinrishici的api获取随机诗词
// 由于这个接口设置了跨域允许策略，所以不需要Proxy转发
const url = "https://v2.jinrishici.com/one.json?client=browser-sdk/1.2";
// 定义需要用到的返回值的结构
type PoemResponse = AxiosResponse<{
  data: {
    content: string;
  };
  token: string;
}>;
// 如果有token就带token发送请求，如果没token就将请求返回值的token存储到localStorage中
if (token) {
  axios
    .get(url + "&X-User-Token=" + encodeURIComponent(token))
    .then((res: PoemResponse) => {
      poem.value = res.data.data.content;
    });
} else {
  axios.get(url).then((res: PoemResponse) => {
    poem.value = res.data.data.content;
    window.localStorage.setItem("jinrishici-token", res.data.token);
  });
}
export default poem;
