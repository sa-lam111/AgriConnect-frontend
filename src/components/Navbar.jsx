// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#008060] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          AgriConnect
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          
          <Link to="/loginroute" className="text-white hover:text-gray-200 transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-[#008060] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            className="block text-white hover:text-gray-200 py-2 px-4"
          >
            Home
          </Link>
          <Link
            to="/marketplace"
            className="block text-white hover:text-gray-200 py-2 px-4"
          >
            Marketplace
          </Link>
          <Link
            to="/login"
            className="block text-white hover:text-gray-200 py-2 px-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block bg-white text-[#008060] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
