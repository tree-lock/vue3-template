import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${Cookies.get("hhf-token")}`,
  },
});
axiosInstance.interceptors.request.use(
  async (config) => {
    // 开发模式下，监听axios的请求
    if (process.env.NODE_ENV === "development") {
      const consoleString = `%c🛸 [Axios] Send API Request  => `;
      console.log(
        consoleString,
        "color: #2563eb; ",
        `<${config.method?.toLocaleUpperCase()}> ` + config.url
      );
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === "development") {
      // 开发模式下，监听axios的返回
      const consoleString = `%c🛸 [Axios] Received API Response => `;
      console.log(
        consoleString,
        "color: #378362; ",
        `<${response.config.method?.toLocaleUpperCase()}> ` +
          response.config.url
      );
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 && error.config.url !== "/auth/login") {
      location.href = "/login";
    } else {
      ElMessage(error.response?.data.message);
    }
    throw error.response;
  }
);

export default axiosInstance;
