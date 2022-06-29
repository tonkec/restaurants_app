import { createAxionsInstance } from '../apiHelper';
import type User from '../../models/User';

const axiosInstance = createAxionsInstance('https://reqres.in');
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
