import React, { useState } from "react";
import { FaSearch, FaInbox, FaStar, FaReply, FaPlus } from "react-icons/fa";

const emailsData = [
  {
    id: 1,
    sender: "Flipkart Vendor",
    subject: "Order stock confirmation",
    message: "Hello, kindly confirm if you received the last shipment...",
    time: "10:21 AM",
    status: "unread",
  },
  {
    id: 2,
    sender: "Amazon Business",
    subject: "Payment invoice submitted",
    message: "Please find the attached invoice for the latest purchase...",
    time: "Yesterday",
    status: "important",
  },
  {
    id: 3,
    sender: "Tata Supply",
    subject: "Next stock shipment",
    message: "We wanted to notify you about the next stock delivery...",
    time: "2 Days Ago",
    status: "replied",
  },
];

export default function EmailSection() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [search, setSearch] = useState("");

  const filteredEmails = emailsData.filter(
    (email) =>
      email.sender.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusTag = (status) => {
    switch (status) {
      case "unread":
        return <span className="text-blue-600 font-semibold">Unread</span>;
      case "important":
        return <span className="text-red-600 font-semibold">Important</span>;
      case "replied":
        return <span className="text-green-600 font-semibold">Replied</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      {/* LEFT SIDE: Inbox */}
      <div className="col-span-1 bg-white shadow-lg rounded-lg p-4 space-y-4">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <FaInbox /> Inbox
          </h2>

          <button className="flex items-center gap-2 bg-blue-900 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
            <FaPlus /> Compose
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 p-2 focus:ring-2 ring-blue-600 outline-none"
          />
        </div>

        {/* Email List */}
        <div className="max-h-[400px] overflow-y-auto">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              onClick={() => setSelectedEmail(email)}
              className={`border-b p-3 cursor-pointer rounded-lg hover:bg-gray-100 transition ${
                selectedEmail?.id === email.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-blue-900">{email.sender}</h3>
                <span className="text-sm text-gray-500">{email.time}</span>
              </div>
              <p className="text-sm text-gray-700">{email.subject}</p>
              <p className="text-xs mt-1">{getStatusTag(email.status)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Email Preview */}
      <div className="col-span-3 bg-white shadow-lg rounded-lg p-6">
        {selectedEmail ? (
          <>
            <h2 className="text-2xl font-semibold text-blue-900">
              {selectedEmail.subject}
            </h2>
            <p className="text-gray-600">From: {selectedEmail.sender}</p>
            <p className="text-sm text-gray-400 mb-4">{selectedEmail.time}</p>
            <p className="text-gray-800 leading-relaxed">
              {selectedEmail.message}
            </p>

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <FaReply /> Reply
              </button>
              <button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                <FaStar /> Mark Important
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 py-20">
            Select an email from inbox to read.
          </div>
        )}
      </div>
    </div>
  );
}
