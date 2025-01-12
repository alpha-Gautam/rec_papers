import axios, { AxiosResponse, AxiosRequestHeaders } from "axios";
import { getCookie } from "./cookie/cookie";
// import https from "https"; // Import the 'https' module

// Base URL of your API

// let baseURL = 'https://api.codesmart.in'

// const  // For local testing
let baseURL = "";
if (window.location.href.includes("localhost")) {
  baseURL = "http://127.0.0.1:8000";
} else if (window.location.href.includes("recpapers.in")) {
  baseURL = "https://recpapers-backend.onrender.com/";
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // Add an agent with rejectUnauthorized set to false to ignore SSL certificate errors
  //   httpsAgent: new https.Agent({ rejectUnauthorized: false }),

  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, just return it
    return response;
  },
  (error) => {
    // If the response is a 401, redirect to login
    console.log("debug error occured -1 ", error);
    const isLoginPage = window.location.pathname === "/login";
    const isStatusApiCall = error.config.url === `${baseURL}/status`;
    console.log("debug error url ", error.config.url);

    if (
      error.response &&
      error.response.status === 401 &&
      !isLoginPage &&
      !isStatusApiCall
    ) {
      console.log("Debug redirecting error occurred - 2", error);
      sessionStorage.removeItem("status");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

const axiosInstanceSignUp = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // Add an agent with rejectUnauthorized set to false to ignore SSL certificate errors
  //   httpsAgent: new https.Agent({ rejectUnauthorized: false }),

  withCredentials: true,
});

// Function to get the access token from localStorage
const getIdTokenFromCookie = () => {
  const token = getCookie("idToken");
  return token;
};

// Interceptor to add access token to headers for each request
axiosInstanceSignUp.interceptors.request.use(
  (config) => {
    const accessToken = getIdTokenFromCookie();
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      }; // Explicitly define the type of config.headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const postSignUp = async (url, data) => {
  try {
    const response = await axiosInstanceSignUp.post(`${baseURL}/${url}`, data);
    return response;
  } catch (error) {
    console.log("debug error  postSignUP", error);
    throw new Error(`${error.response.data.message}`);
  }
};

// Function to make a GET request

const get = async (url) => {
  try {
    const response = await axiosInstance.get(`${baseURL}/${url}`);
    return response;
  } catch (error) {
    console.log("debug error ", error);
    throw new Error(`Error: ${error}`);
  }
};

// Function to make a POST request
const post = async (url, data) => {
  try {
    const response = await axiosInstance.post(`${baseURL}/${url}`, data);
    return response;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

// Function to make a DELETE request
const del = async (url) => {
  try {
    const response = await axios.delete(`${baseURL}/${url}`);
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const server = {
  getSignUp: postSignUp,
  get,
  post,
  del,
};
