import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

export default function ChatSection() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Admin", text: "Welcome! How can I help you today?", time: "10:02 AM" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMsg]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-4 sm:p-6 space-y-4 w-full max-w-5xl mx-auto">
      <h2 className="text-lg sm:text-2xl font-semibold">Chat Support</h2>

      {/* Chat Box */}
      <div className="bg-white shadow-lg rounded-lg h-[400px] sm:h-[500px] flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}> 
              <div
                className={`max-w-[85%] sm:max-w-[60%] p-2 sm:p-3 rounded-lg shadow text-sm
                  ${msg.sender === "You" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              >
                <div className="flex items-center gap-1 sm:gap-2 font-medium mb-1 text-xs sm:text-sm">
                  <FaUserCircle /> {msg.sender}
                </div>
                <p className="text-xs sm:text-base">{msg.text}</p>
                <div className="text-[8px] sm:text-[10px] text-gray-300 text-right mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t flex items-center gap-2 sm:gap-3 bg-white">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <FaPaperPlane className="text-sm sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}