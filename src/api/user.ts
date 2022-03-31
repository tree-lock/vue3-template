import { AxiosResponse } from "axios";
import axiosInstance from "./request";
// 将前后端对接的类型注册到全局，随时随地都可以调用后端的数据类型，以保障前后端数据的一致性。
declare global {
  namespace User {
    // 与后端交互分为发送和请求，请求类型使用Request命名空间封装，返回类型使用Response命名空间封装
    namespace Request {}
    namespace Response {
      interface Profile {
        id: string;
        username: string;
        name: string;
        date: string;
        role: "admin" | "manager" | undefined;
        contact: string;
        email: null | string;
        gender: "secret" | "male" | "female" | "other";
      }
    }
  }
}

export const getProfileReq = async () => {
  const response: AxiosResponse<User.Response.Profile> =
    await axiosInstance.get("/user/profile");
  return response;
};
