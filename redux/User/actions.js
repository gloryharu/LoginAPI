import { api } from "../../servers/API";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";

export const userLogin = (param) => {
  return api({
    endPoint: "signin",
    method: "POST",
    param: {
      client_data: {
        username: param.username,
        password: param.password,
      },
    },
    isLogin: true,
    action: (json) => loginAction(json),
  });
};

export const loginAction = (res) => {
  return { type: LOGIN_RESPONSE, payload: res};
};

export const userLogout = () => {
  return { type: LOGOUT };
};
