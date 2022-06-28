export const setUserInLocalStorageWithResponseData = (response: any) => {
    const loginToken = response.data.token;
    const user = response.data.user;
    setUserInLocalStorage(loginToken, user);
    return true;
};

export const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('userLoginToken');
    if (token) {
        return { loginToken: token };
    }

    return null;
};

export const setUserInLocalStorage = (loginToken: string, user: any) => {
    localStorage.setItem('userLoginToken', JSON.stringify(loginToken));
};

export const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
};
