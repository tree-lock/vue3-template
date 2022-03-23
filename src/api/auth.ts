import { AxiosResponse } from "axios";
import axiosInstance from "./request";

declare global {
  namespace Auth {
    namespace Request {
      interface LoginForm {
        username: string;
        password: string;
      }
    }
    namespace Response {
      interface Login {
        access_token: string;
      }
    }
  }
}

export const postLoginReq = async (body: Auth.Request.LoginForm) => {
  const response: AxiosResponse<Auth.Response.Login> = await axiosInstance.post(
    "/auth/login",
    body
  );
  return response;
};
