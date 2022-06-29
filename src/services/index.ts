export const setUserInLocalStorageWithResponseData = (data: {
    token: string;
}) => {
    const loginToken = data.token;
    setUserInLocalStorage(loginToken);
    return true;
};

export const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('userLoginToken');
    if (token) {
        return { loginToken: token };
    }

    return null;
};

export const setUserInLocalStorage = (loginToken: string) => {
    localStorage.setItem('userLoginToken', JSON.stringify(loginToken));
};

export const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
};
