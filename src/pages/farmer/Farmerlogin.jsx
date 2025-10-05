import React from "react";
import { fLogin } from '../../services/auth.js';
import { useNavigate } from "react-router-dom";
export default function Farmerlogin(){
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await fLogin({
                email:e.target.email.value,
                password:e.target.password.value
            });
            localStorage.setItem('token',res.token);
            navigate('/farmerdashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
<div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-[#004C3F]">Welcome Back</h1>
        <p className="text-gray-600 text-center text-sm mt-2">
         Farmer Sign in  <span className="font-medium">{}</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <a href="/register" className="text-green-600">Register</a>
        </p>
      </div>
    </div>
        </div>
    )
}