import React from "react"
import { useState,useEffect } from "react";
import {infor,getWeather} from '../../services/user.js'
import * as productService from '../../services/product.js'
import Footer from "../../components/Footer.jsx"
import { Link } from "react-router-dom";
export default function Farmerdashboard(){
    const [farmer,setFarmer]=useState(null);
    const [weather,setWeather]=useState(null);
    const [country,setCountry]=useState(null);
    const [visible,setVisible]=useState(false);
    const [temp,setTemp]=useState(null);
    const [products,setProducts]=useState([]);
    const [farproducts,setFarProducts]=useState([]);
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            const farproducts=await productService.getProductsForFarmer();
            const products=await productService.getProducts();
            const res=await infor();
            setFarProducts(farproducts);
            setFarmer(res.name);
            setProducts(products);
            if(farproducts.length>0){
                setShow2(true);
            }
            if(products.length>0){
                setShow(true);
            }
            const token = localStorage.getItem("token");
            if (!token) {
            window.location.href = "/farmerlogin";
            }
        }
        fetchData();
    },[])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setVisible(true);
        try {
            const res=await getWeather({lat:e.target.lat.value,lon:e.target.lon.value});
            setWeather(res.data.weather[0].description);
            setCountry(res.data.sys.country);
            setTemp(res.data.main.temp);
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    return(
        <div className="w-full flex-grow min-h-screen bg-gray-300">
            <div className="flex items-center justify-between px-20 py-5 bg-[#004C3F] text-white shadow-xl">
                <div className="text-2xl font-bold">
                    AGRICONNECT
                </div>
                <div className="flex space-x-10">
            <Link to="/" className="text-[28px] hover:text-gray-300 text-gray-400 underline underline-offset-10">Home</Link>
            <Link to="/product" className="text-[28px] hover:text-gray-300">Products</Link>
            <Link to="/orders" className="text-[28px] hover:text-gray-300">Orders</Link>
            <Link to="/marketplace" className="text-[28px] hover:text-gray-300">Marketplace</Link>
                </div>
            
            </div>
            <div className="mx-5 px-15 rounded-xl shadow-xl py-5 my-2 bg-white">
            <div className=" grid grid-cols-2 gap-10 py-3">
                <div>
                    <span className="text-[29px]">Welcome Farmer {farmer}, What do you want to do today</span>
                    <div>
                        <div className={`${show2?"hidden":"block"} `}>
                <span className="text-red-500">No product to display</span>
                <span className="font-bold">Add your first product <Link to="/product"><span className="text-blue-500 underline">Here</span></Link></span>
                </div>
                <div className={`${show ? "block" : "hidden"}`}>
                <h3 className="font-bold mb-4">Your Products list</h3>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-3">
                 {farproducts.slice(0, 4).map((product) => (
                    <div key={product._id} className="bg-white rounded-xl shadow-md p-4 text-black">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2"/>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <p className="font-bold text-green-700 mt-1">${product.price}</p>
                    </div>
                    ))}
                 </div>
                 <p className="text-center">
                 Manage your products <Link className="text-blue-500 underline" to="/products">Here</Link>
                 </p>
                    </div> 
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="shadow-xl grid grid-cols-2 bg-white rounded-lg flex flex-col justify-center px-6 py-6">
                    <div>
                    <span className="text-center w-100 mx-auto font-bold text-[29px]">Check current weather update</span>
                    <div className="py-2">
                    <label className="font-semibold" htmlFor="lat">Enter Latitude:</label>
                    <input step="any" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" name="lat" type="number" placeholder="Numbers only" />
                    </div>
                     <div className="py-2">
                    <label className="font-semibold" htmlFor="lon">Enter Longtitude:</label>
                    <input step="any" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" name="lon" type="number" placeholder="Numbers only" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Check Weather</button>
            </div>
            </div>
            <div className={`${visible?"block":"hidden"} text-[20px] mx-5 px-5 border-l-2 border-green-600`}>
                <span className="font-bold">Weather Details</span>
                <hr className="my-2"/>
                <div className="py-2">
                <span>Country: </span><span className="font-bold">{country}</span>
                </div>
                <div className="py-2">
                <span>Weather: </span><span className="font-bold">{weather}</span>
                </div>
                <div className="py-2 ">
                <span>Temperature: </span><span className="font-bold">{temp}</span><span className="font-bold">°C</span>
                </div>
            </div>
            </form>
             
           </div>
           <div>
                <span className="font-bold">Latest Market Products</span>
                <hr className="my-2"/>
                <div className={`${show?"hidden":"block"}`}>
                <span>No product to display</span>
                </div>
                <div className={`${show?"block":"hidden"}`}>
                   <div className="grid grid-cols-4 gap-5">
                    {products.slice(0,4).map((pruduct)=>(
                        <div key={pruduct._id} className="bg-white rounded-xl shadow-md p-4 text-black grid grid-cols-2 gap-1">
                        <img src={pruduct.imgUrl} alt={pruduct.name} className="w-15 h-15 bg-cover" />
                        <div>
                        <h4 className="font-semibold">{pruduct.name}</h4>
                        <p className="text-sm text-gray-600">{pruduct.description}</p>
                        <p className="font-bold text-green-700 mt-1">${pruduct.price}</p>
                        </div>
                        </div>
                    ))}

                   </div>
            </div>
            </div>
            </div>
            <div className=" w-full">
                <Footer />
            </div>
            
        </div>
    )
}