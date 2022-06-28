import axios from 'axios';
import { getUserFromLocalStorage, clearLocalStorage } from './../services';
export const axiosInstance = axios.create({
    baseURL: 'https://reqres.in',
});

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

axiosInstance.authorizeGet = function () {
    const config = applyAuthHeader(
        typeof arguments[1] === 'object' ? arguments[1] : {}
    );
    return this.get(arguments[0], config);
};

axiosInstance.authorizePost = function () {
    const config = applyAuthHeader(
        typeof arguments[2] === 'object' ? arguments[2] : {}
    );
    const payload = typeof arguments[1] === 'object' ? arguments[1] : {};
    return this.post(arguments[0], payload, config);
};

const applyAuthHeader = config => {
    const { loginToken } = getUserFromLocalStorage();
    config.headers = Object.assign({}, config.headers, {
        Authorization: `Bearer ${loginToken}`,
    });
    return config;
};

const errorHandler = error => {
    if (error.response.status === 401) {
        clearLocalStorage();
        return (window.location.href = '/login');
    }
    return Promise.reject({
        error: error.response.data.error,
        response: error.response,
    });
};

const successHandler = response => {
    return response;
};
