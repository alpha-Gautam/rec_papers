// import { server } from "../serve";
import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import clsx from "clsx";

let baseURL = "";
if (window.location.href.includes("localhost")) {
  baseURL = "http://127.0.0.1:8000/";
  // } else if (window.location.href.includes("onrender.com")) {
} else {
  baseURL = "https://recpapers-backend.onrender.com/";
}

// const url = "/api";

export const createProjectapi = async (data) => {
  //   return server.get(url + "/login/", data);
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + "api/project_create/", data);
  //   const response = await server.post("api/login/", data);

  return response;
};

export const ProjectViewApi = async (data) => {
  //   return server.get(url + "/login/", data);
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + "api/project/", data);
  //   const response = await server.post("api/login/", data);

  return response;
};

export const projectDataApi = async (id) => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + `api/project/${id}`);

  return response;
};
export const mentorDataApi = async () => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + `api/mentor/`);

  return response;
};

export const projectLogApi = async (id) => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + `api/log/${id}`);
  return response;
};
export const projectLogCreateApi = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + `api/log/`, data);
  return response;
};
