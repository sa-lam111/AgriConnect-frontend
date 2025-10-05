import api from "./api.js";

export const getProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsForFarmer = async () => {
  try {
    const res = await api.get(`/products/farmer`);
    return res.data;
  } catch (error) {
    console.error("Error fetching products for farmer:", error);
    throw error;
  }
}

export const addProduct = async (productData) => {
  try {
    const res = await api.post(`/products`, productData);
    return res.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct=async(updateData)=>{
    try {
        const res=await api.put(`/products`,updateData)
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const deleteProduct=async(editingProductId)=>{
    try {
      const productId=editingProductId;
        const res=await api.delete(`/products/${productId}`)
        console.log(editingProductId);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}