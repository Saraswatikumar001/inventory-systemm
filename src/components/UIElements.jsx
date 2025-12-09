import React from "react";
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

export default function UIElements() {
  return (
    <div className="px-4 sm:px-6 pt-20 lg:pt-0 space-y-8 sm:space-y-10 max-w-6xl mx-auto">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">UI Elements</h1>

      {/* Buttons Section */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Buttons</h2>
        <div className="flex gap-3 sm:gap-4 flex-wrap">
          <button className="px-4 py-2 text-sm sm:text-base bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Primary
          </button>
          <button className="px-4 py-2 text-sm sm:text-base bg-yellow-300 text-gray-800 rounded hover:bg-gray-300 transition">
            Secondary
          </button>
          <button className="px-4 py-2 text-sm sm:text-base bg-green-500 text-white rounded hover:bg-green-600 transition">
            Success
          </button>
          <button className="px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded hover:bg-red-600 transition">
            Danger
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[1,2,3].map((card,i)=>(
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">Card Title {i+1}</h3>
              <p className="text-gray-600">This is a description of the card content.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alerts Section */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Alerts</h2>
        <div className="space-y-2">
          <AlertBox icon={<CheckCircle size={20} />} text="Success! Operation completed." color="green" />
          <AlertBox icon={<XCircle size={20} />} text="Error! Something went wrong." color="red" />
          <AlertBox icon={<AlertCircle size={20} />} text="Warning! Check your input." color="yellow" />
          <AlertBox icon={<Info size={20} />} text="Info! This is an information alert." color="blue" />
        </div>
      </section>

      {/* Form Elements Section */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Form Elements</h2>
        <form className="space-y-4 max-w-md">
          <Input label="Name" type="text" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="Enter your email" />
          
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-sm sm:text-base bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-700 mb-1 text-sm sm:text-base">{label}</label>
    <input
      {...props}
      className="w-full px-3 py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const AlertBox = ({ icon, text, color }) => (
  <div className={`flex items-center gap-2 bg-${color}-100 text-${color}-800 px-4 py-2 rounded text-sm sm:text-base`}>
    {icon} {text}
  </div>
);
