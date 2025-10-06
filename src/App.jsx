import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Farmerdashboard from "./pages/farmer/Farmerdashboard";
import Farmerlogin from "./pages/farmer/Farmerlogin";
import Product from "./pages/farmer/Product";
import Loginroute from "./pages/Loginroute";
import Userdashboard from "./pages/user/Userdashboard";
import Cart from "./pages/user/cart";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/farmerdashboard" element={<Farmerdashboard/>}/>
           <Route path="/farmerlogin" element={<Farmerlogin/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/loginroute" element={<Loginroute/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      <Toaster />
    </div>
    
  );
}
