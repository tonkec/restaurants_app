import { axiosInstance } from "../apiHelper";

export const loginUser = async (email: string, password: string) => {
    return await axiosInstance.post("/api/login", { email, password });
};

export const createNewUser = async (signUpParams: any)=> {
    const { email, password } = signUpParams;
    return await axiosInstance.post(`/api/register`, {
      password,
      email
    });
  };