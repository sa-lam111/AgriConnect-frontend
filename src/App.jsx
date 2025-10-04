import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Farmerdashboard from "./pages/Farmerdashboard";
import Farmerlogin from "./pages/Farmerlogin";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/farmerdashboard" element={<Farmerdashboard/>}/>
           <Route path="/farmerlogin" element={<Farmerlogin/>}/>
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
    
  );
}
