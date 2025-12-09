import React, { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
         Task Manager
        </h2>

        {/* Input Section */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition font-semibold"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.length === 0 && (
            <p className="text-center text-gray-500">No tasks added yet 👀</p>
          )}

          {tasks.map((task, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 rounded-lg border transition shadow-sm hover:shadow-md 
              ${task.completed ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-300"}`}
            >
              {/* Task Text */}
              <div
                className={`flex gap-3 items-center cursor-pointer`}
                onClick={() => toggleTask(index)}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  className="h-5 w-5 cursor-pointer"
                  readOnly
                />
                <span
                  className={`text-lg font-medium transition 
                    ${task.completed ? "line-through text-gray-500" : "text-gray-800"}
                  `}
                >
                  {task.text}
                </span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 font-semibold transition"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
