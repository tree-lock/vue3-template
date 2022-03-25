// 诗词
import { AxiosResponse } from "axios";
import axios from "axios";
const token = window.localStorage.getItem("jinrishici-token");
const poem = ref<string>("Loading");
const url = "https://v2.jinrishici.com/one.json?client=browser-sdk/1.2";
type Response = AxiosResponse<{
  data: {
    content: string;
  };
  token: string;
}>;
if (token) {
  axios
    .get(url + "&X-User-Token=" + encodeURIComponent(token))
    .then((res: Response) => {
      poem.value = res.data.data.content;
    });
} else {
  axios.get(url).then((res: Response) => {
    poem.value = res.data.data.content;
    window.localStorage.setItem("jinrishici-token", res.data.token);
  });
}
export default poem;
