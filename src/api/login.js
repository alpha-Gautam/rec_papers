import { server } from "../serve";
import axios from "axios";

let baseURL = "";
if (window.location.href.includes("localhost")) {
  baseURL = "http://127.0.0.1:8000";
} else if (window.location.href.includes("onrender.com")) {
  baseURL = "https://recpapers-backend.onrender.com/";
}

const url = "/api";

export const userLoginapi = async (data) => {
  //   return server.get(url + "/login/", data);
  const response = await axios.post(baseURL + "api/login/", data);
  //   const response = await server.post("api/login/", data);

  return response;
};

export const userRagister = async (data) => {
  //   return server.get(url + "/login/", data);
  const response = await axios.post(baseURL + "api/ragister/", data);
  //   const response = await server.post("api/login/", data);

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
