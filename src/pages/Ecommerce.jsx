import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaShoppingCart, FaMoneyCheckAlt, FaClipboardList } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
export default function Ecommerce() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide drop-shadow">
      <FontAwesomeIcon icon={faCashRegister} className="text-green-600 me-3" />
       Ecommerce Dashboard
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Card */}
        <Link
          to="/ecommerce/products"
          className="bg-white/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-white/30 flex flex-col items-center hover:-translate-y-2"
        >
          <FaBox className="text-blue-700 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-[#F79A19]">Products</h3>
          <p className="text-gray-700 text-sm mt-2 text-center">
            Manage and view all available products.
          </p>
        </Link>

        {/* Cart Card */}
        <Link
          to="/ecommerce/cart"
          className="bg-white/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-white/30 flex flex-col items-center hover:-translate-y-2"
        >
          <FaShoppingCart className="text-green-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-[#F79A19]">Cart</h3>
          <p className="text-gray-700 text-sm mt-2 text-center">
            View and manage selected cart items.
          </p>
        </Link>

        {/* Checkout */}
        <Link
          to="/ecommerce/checkout"
          className="bg-white/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-white/30 flex flex-col items-center hover:-translate-y-2"
        >
          <FaMoneyCheckAlt className="text-yellow-600 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-[#F79A19]">Checkout</h3>
          <p className="text-gray-700 text-sm mt-2 text-center">
            Complete your payment securely.
          </p>
        </Link>

        {/* Orders */}
        <Link
          to="/ecommerce/orders"
          className="bg-white/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-white/30 flex flex-col items-center hover:-translate-y-2"
        >
          <FaClipboardList className="text-purple-700 text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-[#F79A19]">Orders</h3>
          <p className="text-gray-700 text-sm mt-2 text-center">
            Track and manage past orders.
          </p>
        </Link>

      </div>
    </div>
  );
}
