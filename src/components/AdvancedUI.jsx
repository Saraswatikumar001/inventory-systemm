import React, { useState } from "react";

export default function AdvancedUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">Advanced UI</h1>
      {/* Tabs Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Tabs</h2>
        <div className="flex gap-2 border-b">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 py-2 ${
              activeTab === "tab1"
                ? "border-b-2 border-purple-600 font-semibold text-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`px-4 py-2 ${
              activeTab === "tab2"
                ? "border-b-2 border-purple-600 font-semibold text-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`px-4 py-2 ${
              activeTab === "tab3"
                ? "border-b-2 border-purple-600 font-semibold text-purple-600"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            Tab 3
          </button>
        </div>
        <div className="p-4 border rounded-b-md bg-white mt-2">
          {activeTab === "tab1" && <p>This is content for Tab 1.</p>}
          {activeTab === "tab2" && <p>This is content for Tab 2.</p>}
          {activeTab === "tab3" && <p>This is content for Tab 3.</p>}
          {activeTab === "tab4" && <p>This is content for Tab 4.</p>}
        </div>
      </section>
      <section>
        <button
          onClick={() => setActiveTab("tab4")}
          className={`px-4 py-2 ${
            activeTab === "tab4"
            ? "border-b-2 border-purple-600 font-semibold text-purple-600"
            : "text-gray-600 hover:text-purple-600"
          }`}
        >
        </button>
      </section>

      {/* Accordion Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Accordion</h2>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((num) => (
            <Accordion key={num} title={`Accordion Item ${num}`}>
              <p>This is the content for item {num}.</p>
            </Accordion>
          ))}
        </div>
      </section>      

      {/* Modal Section */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Modal</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Open Modal
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-lg font-semibold mb-3">Modal Title</h3>
              <p className="mb-4">This is modal content.</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

// Accordion Component
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-md"
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
}
