import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // change to backend

// Get all products
export const getProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add new product (for farmers)
export const addProduct = async (productData, token) => {
  const res = await axios.post(API_URL, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
