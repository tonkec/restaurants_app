
export const setUserInLocalStorageWithResponseData = (response: any) => {
  const loginToken = response.data.token;
  const user = response.data.user;
  setUserInLocalStorage(loginToken, user);
  return true;
};

export const getUserFromLocalStorage = () => ({
  loginToken: JSON.parse(localStorage.getItem("userLoginToken") || "") 
});

export const setUserInLocalStorage = (loginToken: string, user: any) => {
  localStorage.setItem("userLoginToken", JSON.stringify(loginToken));
  localStorage.setItem("isAdmin", JSON.stringify(user.isAdmin));
};

export const clearLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};