import React from "react";
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

export default function UIElements() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">UI Elements</h1>

      {/* Buttons Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Primary
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            Secondary
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Success
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Danger
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold">Card Title 1</h3>
            <p className="text-gray-600">This is a description of the card content.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold">Card Title 2</h3>
            <p className="text-gray-600">Another example of card content.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold">Card Title 3</h3>
            <p className="text-gray-600">Cards can hold any UI elements.</p>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Alerts</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded">
            <CheckCircle size={20} /> Success! Operation completed.
          </div>
          <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded">
            <XCircle size={20} /> Error! Something went wrong.
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
            <AlertCircle size={20} /> Warning! Check your input.
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded">
            <Info size={20} /> Info! This is an information alert.
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Form Elements</h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
