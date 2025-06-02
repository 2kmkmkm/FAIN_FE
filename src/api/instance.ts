import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
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
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;
    const isLoginRequest = originalRequest?.url?.includes("/login");

    if (status === 401 && !isLoginRequest) {
      const { store } = await import("../app/store");
      const { clearToken } = await import("../app/authSlice");

      store.dispatch(clearToken());
      window.location.href = "/login";    
    }

    if (error.response?.data?.message) {
      console.error("서버 에러 메시지:", error.response.data.message);
    } else {
      console.error("요청 중 에러 발생:", error);
    }

    return Promise.reject(error);
  }
);

export default instance;
