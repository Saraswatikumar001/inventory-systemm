import React from "react";
import { FaTrash, FaLock } from "react-icons/fa";

export default function CartPage() {
  const items = [
    {
      id: 1,
      name: "Sandals",
      size: "39",
      color: "White",
      price: 99.99,
      qty: 1,
      img: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Zebra Purse",
      size: "One Size",
      color: "Black Mix",
      price: 29.96,
      qty: 2,
      img: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Knitted Top",
      size: "S",
      color: "Powder Pink",
      price: 29.99,
      qty: 1,
      img: "https://via.placeholder.com/80",
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-white p-8 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE CART ITEMS */}
        <div className="md:col-span-2 space-y-8">
          <div className="grid grid-cols-4 font-semibold text-gray-500 text-sm border-b pb-3">
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QTY</p>
            <p className="text-right">TOTAL</p>
          </div>

          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-4 items-center border-b pb-4">
              
              {/* product */}
              <div className="flex gap-4">
                <img src={item.img} alt="" className="w-20 h-20 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">Size: {item.size} • Color: {item.color}</p>
                </div>
              </div>

              {/* price */}
              <p className="text-gray-800 font-medium">$ {item.price.toFixed(2)}</p>

              {/* qty control */}
              <div className="flex items-center gap-3">
                <button className="text-gray-600 hover:text-black">−</button>
                <p>{item.qty}</p>
                <button className="text-gray-600 hover:text-black">+</button>
              </div>

              {/* total */}
              <div className="flex justify-end items-center gap-3">
                <p className="font-semibold">$ {(item.price * item.qty).toFixed(2)}</p>
                <FaTrash className="text-pink-400 cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          ))}
        </div>

        
        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-pink-50 p-10 rounded-lg shadow-sm relative">
          <div className="border-b pb-4 mb-6">
            <p className="font-semibold text-sm text-gray-500">CART TOTAL</p>
            <p className="text-xl font-bold text-gray-800 mt-1">$ {total.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">Shipping & taxes calculated at checkout.</p>
          </div>

          <label className="flex items-center gap-2 mb-6 cursor-pointer text-sm">
            <input type="checkbox" className="w-4 h-4" />
            <span>I agree to <span className="text-pink-500 underline">Terms & Conditions</span></span>
          </label>

          <button className="w-full bg-black text-white py-3 rounded-full flex justify-center items-center gap-2 hover:bg-gray-900 transition mb-4">
            <FaLock /> Checkout
          </button>

          <button className="w-full border border-gray-300 py-3 rounded-full hover:bg-white transition font-medium">
            PayPal
          </button>

          {/* faint icon bottom */}
          <div className="absolute bottom-6 right-6 opacity-10 text-7xl">🛍️</div>
        </div>

      </div>
    </div>
  );
}
