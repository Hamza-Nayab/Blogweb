// axiosConfig.js

import axios from "axios";

const baseURL = "http://localhost:3000"; // Adjust the baseURL as needed

const axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
