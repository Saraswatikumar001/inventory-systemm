import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! (Backend integration pending)");
  };

  return (
    <div className="p-6 lg:p-10 space-y-10">
      <h2 className="text-3xl font-bold text-blue-900 text-center">
        Contact Support
      </h2>
      <p className="text-gray-600 text-center max-w-xl mx-auto">
        Have questions or need help with your inventory or orders?  
        Our support team is always ready to assist you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold text-blue-900">Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 ring-blue-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 ring-blue-600"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 ring-blue-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-700 duration-200 font-semibold"
          >
            Submit
          </button>
        </form>

        {/* RIGHT: Contact Details */}
        <div className="space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center gap-3">
              <FaHeadset size={26} className="text-blue-900" />
              <h3 className="text-xl font-semibold text-blue-900">Support Center</h3>
            </div>
            <p className="mt-2 text-gray-600">Available Mon–Sat | 9:00 AM – 7:00 PM</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center gap-3">
              <FaEnvelope size={24} className="text-blue-900" />
              <h3 className="text-lg font-semibold text-blue-900">Email</h3>
            </div>
            <p className="text-gray-600 mt-1">support@inventorysystem.com</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={24} className="text-blue-900" />
              <h3 className="text-lg font-semibold text-blue-900">Phone</h3>
            </div>
            <p className="text-gray-600 mt-1">+91 98765 43210</p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-52 rounded-lg flex items-center justify-center text-gray-600 font-semibold">
            Google Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
