import React, { useState } from "react";

export default function Tables() {
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "Apple iPhone 15", category: "Mobile", stock: 20, price: "$899" },
    { id: 2, name: "HP Laptop", category: "Laptop", stock: 10, price: "$1100" },
    { id: 3, name: "Bluetooth Speaker", category: "Audio", stock: 15, price: "$70" },
    { id: 4, name: "Samsung TV", category: "Electronics", stock: 5, price: "$600" },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold"> Products Table</h1>

      {/* Search */}
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-4 py-2 w-72 focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> 

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          + Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Product Name</th>
              <th className="px-4 py-3 border">Category</th>
              <th className="px-4 py-3 border">Stock</th>
              <th className="px-4 py-3 border">Price</th>
              <th className="px-4 py-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-50 transition">
                  <td className="px-4 py-3 border">{item.id}</td>
                  <td className="px-4 py-3 border">{item.name}</td>
                  <td className="px-4 py-3 border">{item.category}</td>
                  <td className="px-4 py-3 border">{item.stock}</td>
                  <td className="px-4 py-3 border">{item.price}</td>
                  <td className="px-4 py-3 border space-x-2">
                    <button className="text-blue-500 hover:underline">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No matching records found ❌
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        <button className="px-3 py-1 border hover:bg-gray-200 rounded">Prev</button>
        <button className="px-3 py-1 border bg-blue-600 text-white rounded">1</button>
        <button className="px-3 py-1 border hover:bg-gray-200 rounded">2</button>
        <button className="px-3 py-1 border hover:bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
}
