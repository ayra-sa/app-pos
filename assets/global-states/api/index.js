// utils/axiosInstance.js
import axios from "axios";
import moment from "moment";

// Buat instance Axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_KDK_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Tambahkan interceptor request
axiosInstance.interceptors.request.use(
  (config) => {
    // Tambahkan token dari localStorage atau cookies jika perlu
    const token = localStorage.getItem("accessToken");
    const secretKey = localStorage.getItem("secretKey");
    const clientId = localStorage.getItem("clientId");
    const accessToken = localStorage.getItem("accessToken");

    if (secretKey && clientId) {
      config.headers["X-CLIENT-SECRET"] = secretKey;
      config.headers["X-CLIENT-ID"] = clientId;
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      config.headers["X-TIMESTAMP"] = moment().format();
      config.headers["X-GRANT-TYPE"] = "client_credentials";
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Tambahkan interceptor response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Cek error status, misalnya 401 untuk expired token
    if (error.response && error.response.status === 401) {
      // Lakukan logout atau refresh token di sini
      console.error("Unauthorized - Redirecting to login = ", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
