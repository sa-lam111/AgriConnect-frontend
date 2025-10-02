import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // change this to your backend URL

// Register a new user
export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

// Login user
export const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

// Logout (just clear local storage on frontend)
export const logout = () => {
  localStorage.removeItem("token");
};
