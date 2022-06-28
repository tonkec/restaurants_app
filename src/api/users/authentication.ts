import { axiosInstance } from '../apiHelper';
import type User from '../../models/User';

export const loginUser = async ({ email, password }: User) => {
    return await axiosInstance.post('/api/login', { email, password });
};

export const createNewUser = async (signUpParams: User) => {
    const { email, password } = signUpParams;
    return await axiosInstance.post(`/api/register`, {
        password,
        email,
    });
};
