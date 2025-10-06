import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCart } from "../../services/user";
export default function Cart(){
 const [cart,setCart]=useState([]);
      const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        window.location.href="/login";
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const userId=localStorage.getItem("id");
            console.log(userId);
          const cart=await getCart(userId);
          console.log(cart);
          setCart(cart);
            }
        fetchData();
        const token = localStorage.getItem("token");
            if (!token) {
            window.location.href = "/loginroute";
            }
    },[])
    return(
        <div>
            <div className="flex items-center justify-between px-20 py-5 bg-[#004C3F] text-white shadow-xl">
                <div className="text-2xl font-bold">
                    AGRICONNECT
                </div>
                <div className="flex space-x-10">
            <Link to="/" className="text-[28px] hover:text-gray-300 ">Home</Link>
            <Link to="/cart" className="text-[28px] hover:text-gray-300 text-gray-400 underline underline-offset-10">Cart</Link>
            <Link to="/marketplace" className="text-[28px] hover:text-gray-300">Marketplace</Link>
            <Link onClick={handleLogout} className="text-[28px] text-red-500 hover:text-red-300">Logout</Link>
                </div>
                </div>
            {cart.length === 0 ? (
  <p className="text-center font-bold text-[22px] mt-10">Your cart is empty </p>
) : (
  <div>
    <h2 className="text-center font-bold text-[22px] mt-10">Your Cart</h2>
    {cart.map((item) => (
      <div key={item._id} className="bg-white mx-10 px-10 py-3 my-1 rounded-sm">
        <p>{item.product.name}</p>
      </div>
    ))}
  </div>
)}
        </div>
    )
}