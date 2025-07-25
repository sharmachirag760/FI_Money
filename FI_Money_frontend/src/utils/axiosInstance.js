// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5500/",
  withCredentials: true, 
});

export default axiosInstance;
