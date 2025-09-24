import axios from "axios";

const apiUrl = "https://edu-master-psi.vercel.app";

const axiosClient = axios.create({
  baseURL: apiUrl,
});

// ✅ إضافة التوكن من localStorage تلقائيًا
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
