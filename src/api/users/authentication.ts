import { axiosInstance } from "../apiHelper";

export const loginUser = async (email: string, password: string) => {
    return await axiosInstance.post("/api/login", { email, password });
};