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
      interface Profile {
        id: string;
        username: string;
        name: string;
        date: string;
        role: "admin" | "manager" | undefined;
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

export const getProfileReq = async () => {
  const response: AxiosResponse<Auth.Response.Profile> =
    await axiosInstance.get("/user/profile");
  return response;
};
