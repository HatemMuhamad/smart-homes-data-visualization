import axios, { AxiosInstance } from "axios";

let axiosInstance: AxiosInstance;
const axiosBaseConfig = {
  baseURL: process.env.REACT_APP_SERVER_API_URL,
  timeout: 10000 * 20,
  //withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
};

export const getAxios = () => {

  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = axios.create(axiosBaseConfig);

  return axiosInstance;
};