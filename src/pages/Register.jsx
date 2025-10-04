import React from "react";
import { useState } from "react";
import { uRegister } from '../services/auth.js';
export default function Register() {
  const [role, setRole] = useState("buyer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registering as:", role);

    try {
      const res = await uRegister({
        name: e.target.name.value,
        email: e.target.email.value,
        number: e.target.number.value,
        address: e.target.address.value,
        password: e.target.password.value,
        role,
      });
      console.log("Registration successful:", res);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-[#004C3F]">Create Account</h1>
        <p className="text-gray-600 text-center text-sm mt-2">
          Join as a <span className="font-medium">{role}</span>
        </p>

        {/* Role selection */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setRole("User")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              role === "User" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setRole("farmer")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              role === "farmer" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Farmer
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email" 
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
             <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account? <a href="/login" className="text-green-600">Login</a>
        </p>
      </div>
    </div>
  );
}
