import api from '../services/api.js';
// Register a new user
export const uRegister = async (userData) => {
  try {
    const res = await api.post(`/uRegister`, userData);
    return res.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Login user
export const login = async (credentials) => {
  const res = await api.post(`/login`, credentials);
  return res.data;
};

// Logout (just clear local storage on frontend)
export const logout = () => {
  localStorage.removeItem("token");
};
