import { server } from "../serve";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";

const url = "/api";

export const userLoginapi = async (data) => {
  //   return server.get(url + "/login/", data);
  const response = await axios.post(baseUrl + "api/login/", data);
  //   const response = await server.post("api/login/", data);

  return response;
};

export const userRagister = async (data) => {
  //   return server.get(url + "/login/", data);
  const response = await axios.post(baseUrl + "api/ragister/", data);
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
