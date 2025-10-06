import api from '../services/api.js';

export const infor=async()=>{
    try{
        const res=await api.get(`user/getTheFarmer`);
        return res.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}
export const getWeather=async(coordinates)=>{
    try {
        const res=await api.post(`/weather`,coordinates);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const addToCart=async(pacel)=>{
    try {
        const res=await api.post(`/user/addToCart`,pacel);
        return res;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const getCart=async(userId)=>{
    try{
        const res=await api.get(`/user/getCart`,userId);
        return res.data.items || [];
    }catch(error){
        console.log(error);
        throw error;
    }
}