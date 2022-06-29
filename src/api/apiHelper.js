import axios from 'axios';
export const createAxionsInstance = url => {
    return axios.create({
        baseURL: url,
    });
};
