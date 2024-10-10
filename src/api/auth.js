import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_AUTH_API_URL;

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.get(`${API_BASE_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.patch(`${API_BASE_URL}/profile`, formData, {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "multipart/form-data",
  });
  return response.data;
};
