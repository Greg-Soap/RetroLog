export const LoginStart = (userCredentials: any) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user: any) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = (userCredentials: any) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user: any) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
