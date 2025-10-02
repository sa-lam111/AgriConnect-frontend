import React, { useState, useEffect } from "react";

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Temporary hardcoded data with images
    setProducts([
      {
        id: 1,
        name: "Tomatoes",
        description: "Freshly harvested red tomatoes",
        quantity: "200 kg",
        price: 500,
        farmerName: "Ikechukwu",
        contact: "08012345678",
        image: "https://images.unsplash.com/photo-1607305387299-80d2fcdbb5c0?w=600"
      },
      {
        id: 2,
        name: "Maize",
        description: "Organic yellow maize",
        quantity: "50 bags",
        price: 15000,
        farmerName: "Ojojuwon",
        contact: "08098765432",
        image: "https://images.unsplash.com/photo-1629138549233-38a5f7c3df8d?w=600"
      },
      {
        id: 3,
        name: "Yam",
        description: "Big fresh tubers of yam",
        quantity: "120 tubers",
        price: 2500,
        farmerName: "Emeka",
        contact: "08022223333",
        image: "https://images.unsplash.com/photo-1622205255002-6dbd6be9f54d?w=600"
      }
    ]);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-6 text-primary">Marketplace</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 class="font-bold text-2xl text-text-primary">{p.name}</h3>
            <p class="text-gray-600 mt-2">{p.description}</p>
            <p class="mt-2 font-semibold text-gray-700">
              Quantity: {p.quantity}
            </p>
            <p class="text-green-700 font-bold text-lg mt-2">₦{p.price}</p>
            <p class="text-sm mt-3">
              <span class="font-semibold">Farmer:</span> {p.farmerName}
            </p>
            <a
              href={`tel:${p.contact}`}
              className="block mt-4 bg-primary text-white text-center px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Contact Farmer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
