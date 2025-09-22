// import { server } from "../serve";
// import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
// import clsx from "clsx";

export let baseURL = "";
if (window.location.href.includes("localhost")) {
  baseURL = "http://127.0.0.1:8000/";
  // } else if (window.location.href.includes("onrender.com")) {
} else {
  baseURL = "https://recpapers-backend.onrender.com/";
}
// baseURL = "https://recpapers-backend.onrender.com/";
// const url = "/api";

export const set_cookies = async () => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + "account/get-cookies/");

  return response;
};
export const userLoginapi = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + "account/login/", data);
  return response;
};
export const userLogoutAPI = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + "account/logout/", data);
  return response;
};

export const userRegister = async (data) => {
  const response = await axios.post(baseURL + "account/register/", data);
  return response;
};
export const forgetPasswordAPI = async (email) => {
  const response = await axios.post(baseURL + "account/forgot_password/", {
    email: email,
  });
  return response;
};

// export const login = (data: any) => {
//    return server.getSignUp(url + '/login', data)
// }

// export const isLogin = () => {
//    return server.post(url + 'status', {})
// }

// export const serverSignout = () => {
//    return server.post(url + '/signout', {})
// }
