import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ProductList = () => {
    // REAL Adidas shoe images from CDN
    const navigate = useNavigate();

    const allProducts = [
        {
            name: "ADIDAS Light Racer",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFylkDobNsxzAARelRqmasz2YBvJp2M__3Q&s",
            price: 1499,
            oldPrice: 4999,
        },
        {
            name: "ADIDAS Runfalcon 3",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPT46fa8i-WeKZfp2DXSCt1bBk5Qsk1axSw&s",
            price: 1799,
            oldPrice: 4999,
        },
        {
            name: "ADIDAS Duramo SL",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-m-uW3DK_4pgCNLdJv4h2iIUvfyOotdyJw&s",
            price: 1999,
            oldPrice: 4599,
        },
        {
            name: "ADIDAS Galaxy 6",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQirh_WVnLfv_I_KNF6mRxVEl3I-k-QJWZvw&s",
            price: 1599,
            oldPrice: 3799,
        },
        {
            name: "ADIDAS Duramo SL",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-m-uW3DK_4pgCNLdJv4h2iIUvfyOotdyJw&s",
            price: 1999,
            oldPrice: 4599,
        },
        {
            name: "ADIDAS Galaxy 6",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQirh_WVnLfv_I_KNF6mRxVEl3I-k-QJWZvw&s",
            price: 1599,
            oldPrice: 3799,
        },
    ];

    const [showCount, setShowCount] = useState(6);
    const [search, setSearch] = useState("");

    // FILTER PRODUCTS
    const filteredProducts = allProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const visibleProducts = filteredProducts.slice(0, showCount);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* TOP HEADER */}
            <header className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                {/* Left */}
                <div className="flex items-center gap-6">
                    <h2 className="text-white text-xl font-semibold">Mega</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="px-4 py-2 w-72 rounded-lg outline-none"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-5 text-white text-lg">
                    <span>🔔</span>

                    {/* 🛒 Cart Redirect */}
                    <span
                        className="cursor-pointer hover:scale-110 transition"
                        onClick={() => navigate("/ecommerce/cart")}
                    >
                        🛒
                    </span>

                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-white"></div>
                        <span className="text-sm">Joseph William</span>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="px-6 py-3 text-sm text-gray-500">
                Home &gt; E-Commerce &gt; <span className="text-gray-800">Product</span>
            </div>

            {/* MAIN LAYOUT */}
            <div className="flex flex-col lg:flex-row p-6 gap-6">
                {/* SIDEBAR FILTER */}
                <aside className="w-full lg:w-64 bg-white p-5 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-5">Filter</h3>
                    {/* Price */}
                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Price</h4>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                className="w-full border rounded p-1 text-sm"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                className="w-full border rounded p-1 text-sm"
                            />
                        </div>
                    </div>

                    {/* Size */}
                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Size - UK/India</h4>
                        {[6, 7, 8].map((size) => (
                            <label key={size} className="block text-sm mb-1">
                                <input type="checkbox" className="mr-2" />
                                {size}
                            </label>
                        ))}
                    </div>

                    {/* Ratings */}
                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Customer Ratings</h4>
                        {["4★ & above", "3★ & above", "2★ & above"].map((r) => (
                            <label key={r} className="block text-sm mb-1">
                                <input type="checkbox" className="mr-2" />
                                {r}
                            </label>
                        ))}
                    </div>
                </aside>

                {/* PRODUCTS */}
                <main className="flex-1">

                    {/* TOP SORT BAR */}
                    <div className="flex justify-between mb-5">
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-gray-200 rounded-md">
                                By Date
                            </button>
                            <button className="px-3 py-1 bg-gray-200 rounded-md">
                                By Price
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md">
                                ▦
                            </button>
                            <button className="px-3 py-1 bg-gray-200 rounded-md">
                                ≡
                            </button>
                        </div>
                    </div>

                    {/* PRODUCT GRID - RESPONSIVE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {visibleProducts.map((p, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl p-4 shadow hover:-translate-y-1 transition cursor-pointer"
                                onClick={() => navigate("/ecommerce/cart")}
                            >
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="w-full h-40 object-contain mb-3"
                                />

                                <h4 className="font-semibold text-gray-800">{p.name}</h4>
                                <p className="text-lg font-bold">
                                    ₹{p.price}{" "}
                                    <span className="line-through text-gray-500 text-sm ml-1">
                                        ₹{p.oldPrice}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* LOAD MORE BUTTON */}
                    {showCount < filteredProducts.length && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowCount(showCount + 6)}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
                            >
                                Load More
                            </button>
                        </div>
                    )}

                    {/* NO RESULTS */}
                    {filteredProducts.length === 0 && (
                        <p className="text-center text-gray-600 mt-10">
                            No products found.
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductList;
