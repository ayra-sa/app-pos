import axios from "axios";
import { ActLogout } from "global-states/actions/global";
import { useDispatch, useSelector, useStore } from "react-redux";

// export const PATH = 'https://api-dev.kodika.co.id'
export const PATH = process.env.KDK_URL;

let AXIOS_BASE = {};
// ================================
AXIOS_BASE.SERVICE_ACCOUNTING = axios.create({
  baseURL: PATH + "/accounting",
});

AXIOS_BASE.SERVICE_ACCOUNTING.interceptors.request.use(
  (config) => {
    const reduxState = JSON.parse(
      window.localStorage.getItem("persist:nextjs")
    );
    const { access_token } = JSON.parse(
      reduxState?.ResponVerifyOtpLoginReducer
    );

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Interceptor untuk response
AXIOS_BASE.SERVICE_ACCOUNTING.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const reduxState = JSON.parse(
      window.localStorage.getItem("persist:nextjs")
    );
    const { refresh_token } = JSON.parse(
      reduxState?.ResponVerifyOtpLoginReducer
    );
    // Tangani response gagal
    if (error.response?.data?.code === 16) {
      // Contoh: Jika status 401, arahkan pengguna ke halaman login
      setTimeout(() => {
        window.localStorage.removeItem("persist:nextjs");
        window.location = "/login";
      }, 2000);
      // alert(refresh_token)
    }
    return Promise.reject(error);
  }
);
// ================================
AXIOS_BASE.SERVICE_USER = axios.create({
  baseURL: PATH,
});
AXIOS_BASE.SERVICE_USER.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
AXIOS_BASE.SERVICE_USER.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AXIOS_BASE;
