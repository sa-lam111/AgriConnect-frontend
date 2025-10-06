import React, { useEffect, useState } from "react";
import * as productService from '../../services/product.js'
import { Link } from "react-router-dom";
export default function Userdashboard(){
    const[product,setProduct]=useState([]);
    const [users,setUsers]=useState();
    useEffect(()=>{
        const fetchData=async()=>{
            const user=localStorage.getItem("user");
        const products=await productService.getProducts();
        setProduct(products)
        setUsers(user)
        }
        fetchData();
        const token = localStorage.getItem("token");
            if (!token) {
            window.location.href = "/loginroute";
            }
    },[])
     const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        window.location.href="/login";
    }
    return(
    <div className="bg-gray-200 h-screen">
            <div className="flex items-center justify-between px-20 py-5 bg-[#004C3F] text-white shadow-xl">
                <div className="text-2xl font-bold">
                    AGRICONNECT
                </div>
                <div className="flex space-x-10">
            <Link to="/" className="text-[28px] hover:text-gray-300 text-gray-400 underline underline-offset-10">Home</Link>
            <Link to="/cart" className="text-[28px] hover:text-gray-300">Cart</Link>
            <Link to="/marketplace" className="text-[28px] hover:text-gray-300">Marketplace</Link>
            <Link onClick={handleLogout} className="text-[28px] text-red-500 hover:text-red-300">Logout</Link>
                </div>
            
            </div>
            <div className="bg-white mx-10 px-10 py-3 my-1 rounded-sm ">
              <p className="font-bold text-[22px]">Welcome user {users}</p>
              <div className="py-5">
                <p className="font-bold">Latest products</p>
                <hr className="py-2" />
                <div className="grid grid-cols-1 gap-5">
                     {product.slice(0,4).map((pruduct)=>(
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
                    <p>View more product in the Marketplace</p>
                </div>
            </div>
        </div>
    )
}