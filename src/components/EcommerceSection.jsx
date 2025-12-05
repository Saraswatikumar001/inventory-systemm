import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const productsList = [
  { id: 1, name: "Wireless Mouse", price: 799, stock: 20, category: "Electronics", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Laptop Stand", price: 1299, stock: 5, category: "Electronics", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Office Chair", price: 6499, stock: 0, category: "Furniture", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Pen Pack", price: 199, stock: 40, category: "Stationery", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Notebook", price: 99, stock: 3, category: "Stationery", img: "https://via.placeholder.com/100" },
];

export default function EcommerceSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", ...new Set(productsList.map((item) => item.category))];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsList.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 5) return "Low Stock";
    return "In Stock";
  };

  const getStockColor = (stock) => {
    if (stock === 0) return "text-red-600";
    if (stock <= 5) return "text-orange-500";
    return "text-green-600";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-900">E-Commerce Store</h2>
        <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 duration-200">
          <FaShoppingCart /> Cart ({cart.length})
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 p-2 focus:ring-2 ring-blue-700 outline-none"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-lg outline-none ring-blue-600 focus:ring-2"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={product.img} alt={product.name} className="w-full h-32 object-cover rounded-md" />

            <h3 className="mt-3 font-semibold text-blue-900">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>

            <p className={`mt-1 font-semibold ${getStockColor(product.stock)}`}>
              {getStockStatus(product.stock)}
            </p>

            <p className="text-xl font-bold text-green-700 mt-2">₹{product.price}</p>

            <button
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
              className={`w-full mt-4 flex justify-center items-center gap-2 py-2 rounded-lg text-white ${
                product.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-700"
              }`}
            >
              <FaShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
