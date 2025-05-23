// import { server } from "../serve";
// import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";

let baseURL = "";
if (window.location.href.includes("localhost")) {
  baseURL = "http://127.0.0.1:8000/";
} else {
  baseURL = "https://recpapers-backend.onrender.com/";
}

export const ProjectViewApi = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + "api/project/", data);
  return response;
};

export const UserProjectViewApi = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + `api/user_project/`, data);
  return response;
};

export const createProjectapi = async (data) => {
  //   return server.get(url + "/login/", data);
  //   const response = await server.post("api/login/", data);
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + "api/project_create/", data);

  return response;
};

export const projectPatchEditApi = async (data) => {
  console.log("url is :-", baseURL);
  const response = await axios.patch(baseURL + "api/project_create/", data);
  return response;
};

export const projectFilterApi = async (searchValue) => {
  const response = await axios.get(
    baseURL + `api/project/?search=${searchValue}`
  );
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

export const ProjectFilesApi = async (id) => {
  console.log("url is :-", baseURL);
  const response = await axios.get(baseURL + `api/file/${id}`);
  return response;
};

export const UploadFileApi = async (id, file) => {
  console.log("url is :-", baseURL);
  const response = await axios.post(baseURL + `api/file/${id}`, file);
  return response;
};

export const deleteFileAPI = async (pk) => {
  console.log("url is :-", baseURL);
  const response = await axios.delete(baseURL + `api/file/${pk}`);
  return response;
};
