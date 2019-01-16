export const loadAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const saveAuthToken = (authToken, user) => {
  try {
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("user", user);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem("authToken");
  } catch (e) {}
};
