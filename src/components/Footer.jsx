import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#004C3F] text-white mt-20 w-full">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">AgriConnect</h2>
          <p className="text-sm text-gray-300">
            Connecting farmers and buyers directly for fair trade.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="hover:text-white transition">
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white transition">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Copyright */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📸</a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AgriConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
