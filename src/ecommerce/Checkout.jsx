import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 sm:p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-white shadow-lg p-4 sm:p-5 rounded-xl mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl font-bold text-indigo-700">Checkout</h2>

        <button
          onClick={() => navigate("/ecommerce/cart")}
          className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline transition text-sm sm:text-base"
        >
          ← Back to Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 border-b pb-2">
            Billing Information
          </h3>

          {/* USER INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <input type="text" placeholder="Full Name" className="inputBox" />
            <input type="email" placeholder="Email Address" className="inputBox" />
            <input type="text" placeholder="Phone Number" className="inputBox" />
            <input type="text" placeholder="Alternate Phone" className="inputBox" />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-2 border-b pb-2">
            Shipping Address
          </h3>

          <textarea
            placeholder="Enter complete address"
            rows="3"
            className="inputBox resize-none"
          ></textarea>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4">
            <input type="text" placeholder="City" className="inputBox" />
            <input type="text" placeholder="State" className="inputBox" />
            <input type="text" placeholder="ZIP / Postal Code" className="inputBox" />
            <input type="text" placeholder="Country" className="inputBox" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white p-5 sm:p-8 rounded-xl shadow-md border border-gray-200 lg:sticky lg:top-10 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
            Order Summary
          </h3>

          {/* Product Item */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">ADIDAS Light Racer</p>
              <p className="text-xs sm:text-sm text-gray-500">Qty: 1</p>
            </div>
            <p className="font-bold text-indigo-600 text-base sm:text-lg">₹1499</p>
          </div>

          {/* Pricing */}
          <div className="border-t pt-4 text-gray-700 space-y-2 sm:space-y-3">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal</span>
              <span>₹1499</span>
            </div>

            <div className="flex justify-between text-sm sm:text-base">
              <span>Shipping Fee</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between text-sm sm:text-base">
              <span>Tax (18%)</span>
              <span>₹270</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold text-indigo-700">
              <span>Total</span>
              <span>₹1868</span>
            </div>
          </div>

          <button
            onClick={() => alert("Order Placed Successfully 🎉")}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-base sm:text-lg font-semibold transition transform hover:scale-[1.03]"
          >
            Place Order 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
