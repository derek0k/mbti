import axios from "axios";

export const register = async (userData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_AUTH_API_URL}/register`,
    userData
  );
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_AUTH_API_URL}/login`,
    userData
  );
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.get(
    `${import.meta.env.VITE_AUTH_API_URL}/user`,
    { headers: `Bearer ${token}` }
  );
  return response.data;
};

export const updateProfile = async (formData) => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.patch(
    `${import.meta.env.VITE_AUTH_API_URL}/profile`,
    formData,
    { headers: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
  );
  return response.data;
};
