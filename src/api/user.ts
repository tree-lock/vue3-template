import { AxiosResponse } from "axios";
import axiosInstance from "./request";

declare global {
  namespace User {
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
