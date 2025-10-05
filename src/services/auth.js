import api from '../services/api.js';

export const uRegister = async (userData) => {
  try {
    const res = await api.post(`auth/uRegister`, userData);
    return res.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
export const fRegister = async (farmerData) => {
  try {
    const res = await api.post(`auth/fRegister`, farmerData);
    return res.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const fLogin = async (credentials) => {
  try {
     const res = await api.post(`auth/fLogin`, credentials);
     return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const uLogin = async (credentials) => {
  try {
     const res = await api.post(`auth/uLogin`, credentials);
     return res.data;
  } catch (error) {
    console.log(error);
  }
};
