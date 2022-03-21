import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: false,
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
axiosInstance.interceptors.response.use(async (response) => {
  if (process.env.NODE_ENV === "development") {
    // 开发模式下，监听axios的返回
    const consoleString = `%c🛸 [Axios] Received API Response => `;
    console.log(
      consoleString,
      "color: #378362; ",
      `<${response.config.method?.toLocaleUpperCase()}> ` + response.config.url
    );
  }
});

export default axiosInstance;
