import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Farmers,{" "}
              <span className="text-green-700">Connecting Markets</span>
            </h2>
            <p className="text-gray-600 mt-6 text-lg">
              AgriConnect bridges the gap between farmers and buyers, creating a
              transparent and profitable agricultural ecosystem.
            </p>
            <div className="mt-8 space-x-4">
              <Link
                to="/login"
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Get Started
              </Link>
              <Link
                to="/register"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-800 hover:text-white transition"
              >
                Join as Farmer
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
              alt="Agriculture"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-green-700 text-4xl font-bold">1</span>
              <h4 className="text-xl font-semibold mt-4">Farmers List Produce</h4>
              <p className="text-gray-600 mt-2">
                Farmers upload their crops or livestock with prices and photos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-green-700 text-4xl font-bold">2</span>
              <h4 className="text-xl font-semibold mt-4">Buyers Browse & Order</h4>
              <p className="text-gray-600 mt-2">
                Buyers explore the marketplace and place direct orders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-green-700 text-4xl font-bold">3</span>
              <h4 className="text-xl font-semibold mt-4">Seamless Delivery</h4>
              <p className="text-gray-600 mt-2">
                Logistics and support ensure smooth delivery of fresh produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Our Value Proposition
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-green-700">
              Fair Pricing
            </h4>
            <p className="text-gray-600 mt-4">
              Farmers earn more and buyers pay less with transparent pricing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-green-700">
              Reduced Food Waste
            </h4>
            <p className="text-gray-600 mt-4">
              Direct connections reduce spoilage and food insecurity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-green-700">
              Empowering Farmers
            </h4>
            <p className="text-gray-600 mt-4">
              Access to markets, resources, and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Our Solution</h3>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            AgriConnect is more than just a marketplace—it’s a platform designed
            to transform agriculture in Nigeria. From fair pricing to improved
            logistics and access to knowledge, we are building a transparent and
            sustainable food system for everyone.
          </p>
          <div className="mt-8">
            <Link
              to="/marketplace"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
