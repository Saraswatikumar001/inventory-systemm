import React, { useState } from "react";

export default function FormElements() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        file: null,
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        });

        // Remove error when user types
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        let newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.category) newErrors.category = "Please select a category";
        if (!formData.file) newErrors.file = "File upload required";
        if (!formData.agree) newErrors.agree = "You must agree to continue";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        alert("Form Submitted Successfully! 🎉");

        // Reset Form After Submit
        setFormData({
            name: "",
            email: "",
            category: "",
            file: null,
            agree: false,
        });

        e.target.reset();
        setSubmitted(false);
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Form Elements</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-5">

                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        className={`w-full border rounded px-4 py-2 focus:ring-2 
                            ${errors.name && submitted ? "border-red-500 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        onChange={handleChange}
                    />
                    {errors.name && submitted && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        className={`w-full border rounded px-4 py-2 focus:ring-2 
                            ${errors.email && submitted ? "border-red-500 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        onChange={handleChange}
                    />
                    {errors.email && submitted && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                {/* Select */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        className={`w-full border rounded px-4 py-2 focus:ring-2 
                            ${errors.category && submitted ? "border-red-500 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        <option value="inventory">Inventory</option>
                        <option value="sales">Sales</option>
                        <option value="purchase">Purchase</option>
                    </select>
                    {errors.category && submitted && (
                        <p className="text-red-500 text-sm">{errors.category}</p>
                    )}
                </div>

                {/* File Upload */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Upload File</label>
                    <input
                        type="file"
                        name="file"
                        className={`w-full border rounded px-3 py-2 
                            ${errors.file && submitted ? "border-red-500" : ""}`}
                        onChange={handleChange}
                    />
                    {errors.file && submitted && (
                        <p className="text-red-500 text-sm">{errors.file}</p>
                    )}
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="cursor-pointer h-4 w-4"
                    />
                    <label className="text-gray-700">
                        I agree to terms & conditions
                    </label>
                </div>
                {errors.agree && submitted && (
                    <p className="text-red-500 text-sm">{errors.agree}</p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
