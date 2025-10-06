import React, { useState, useEffect } from "react";
import * as productServices from '../services/product.js'
import { addToCart } from "../services/user.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [show,setShow]=useState(true);
  const [show2,setShow2]=useState(false);
  const navigate = useNavigate();
  const [editingProductId, setEditingProductId] = useState(null);
  const handleCart=async(e)=>{
    e.preventDefault();
      const quantity=e.target.quantity.value;
      const id=localStorage.getItem("id");
    try {
      await addToCart({
        userId:id,
        productId:editingProductId,
        quantity
      })
      alert("Added successfully");
      const goToCart = window.confirm("Would you like to view your cart?");
    if (goToCart) {
      navigate("/userdashboard");
    }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        localStorage.removeItem("farmer");
        window.location.href="/loginroute";
    }
   useEffect(() => {
    const fetchData=async()=>{
      const user=localStorage.getItem("user");
      const userId=localStorage.getItem("id");
      const prod=await productServices.getProducts();
      if(!user||!userId){
        setShow(false);
      }
      setProducts(prod);
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between px-35 py-5 bg-[#004C3F] text-white shadow-xl">
                <div className="text-2xl font-bold">
                    AGRICONNECT
                </div>
                <div className="flex space-x-10">
            <Link to="/product" className="text-[28px] hover:text-gray-300  ">Products</Link>
            <Link to="/orders" className="text-[28px] hover:text-gray-300">Orders</Link>
            <Link to="/marketplace" className="text-[28px] hover:text-gray-300 text-gray-400 underline underline-offset-10">Marketplace</Link>
            <button onClick={handleLogout} className="text-[28px] hover:text-gray-300">Log out</button>
                </div>
            
            </div>
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white" >
            {editingProductId === p._id ? (
              <div className="transition-all duration-300">
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="font-bold text-2xl text-text-primary">{p.name}</h3>
                <p className="text-gray-600 mt-2">{p.description}</p>
                <p className="mt-2 font-semibold text-gray-700">Available Quantity: {p.quantity}</p>
                <p className="text-green-700 font-bold text-lg mt-2">Current price: ${p.price}</p>
                 <form className="pt-2" onSubmit={handleCart}>
                  <div className="space-x-2">
                  <label htmlFor="quantity">Quantity:</label><input type="number" name="quantity" className="w-7 border" />
                 </div>
                 <div className="pt-1">
                  <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">Add to cart</button> <button onClick={() => setEditingProductId(null)} className="bg-gray-300 px-3 py-1 rounded">Cancel</button>
                 </div>
                 </form>
              </div>
             ) : (<><img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="font-bold text-2xl text-text-primary">{p.name}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <p className="mt-2 font-semibold text-gray-700"> Quantity: {p.quantity}</p>
            <p className="text-green-700 font-bold text-lg mt-2">${p.price}</p>
            <p className="text-sm mt-3">
              <span className="font-semibold">Farmer:</span> {p.seller}
            </p>
            {show &&(
              <div className="justify-end flex space-x-4">
                <button onClick={()=>setEditingProductId(p._id)} className="bg-yellow-500 text-white px-3 py-1 rounded">Place order</button>
              </div>
            )}</>)}
          </div>
        ))}
      </div>
    </div>
  );
}
