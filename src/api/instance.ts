import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // TODO: 로그아웃 처리 혹은 리다이렉트
      // store.dispatch(logoutUser());
      console.warn("인증 오류 발생, 로그인 필요");
      localStorage.removeItem("token");
      window.location.href = "/login"
    }
    return Promise.reject(error);
  }
);

export default instance;
