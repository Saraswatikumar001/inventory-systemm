import React, { useState } from "react";
import { FaPlus, FaFilter, FaTrash, FaEdit, FaCheck } from "react-icons/fa";

export default function TicketsSection() {
  const [tickets, setTickets] = useState([
    { id: 1, title: "Printer not working", status: "Pending", assignedTo: "John", priority: "High" },
    { id: 2, title: "Stock mismatch in warehouse", status: "In Progress", assignedTo: "Amit", priority: "Medium" },
    { id: 3, title: "Barcode scanner issue", status: "Resolved", assignedTo: "Sara", priority: "Low" },
  ]);

  const [newTicket, setNewTicket] = useState({ title: "", priority: "Medium", assignedTo: "" });
  const [filter, setFilter] = useState("All");

  const addTicket = () => {
    if (!newTicket.title.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newTicket.title,
      priority: newTicket.priority,
      assignedTo: newTicket.assignedTo || "Unassigned",
      status: "Pending",
    };

    setTickets([...tickets, newEntry]);
    setNewTicket({ title: "", priority: "Medium", assignedTo: "" });
  };

  const updateStatus = (id) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "Resolved" } : ticket
      )
    );
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  const filteredTickets = tickets.filter((t) => (filter === "All" ? true : t.status === filter));

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Support / Issue Tickets</h2>

      {/* Add Ticket */}
      <div className="bg-white shadow p-4 rounded-lg flex gap-4 items-end">
        <div className="flex flex-col w-1/3">
          <label className="text-sm text-gray-500">Ticket Title</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter issue..."
            value={newTicket.title}
            onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
          />
        </div>

        <div className="flex flex-col w-1/4">
          <label className="text-sm text-gray-500">Priority</label>
          <select
            className="border p-2 rounded"
            value={newTicket.priority}
            onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="flex flex-col w-1/4">
          <label className="text-sm text-gray-500">Assign To</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Name..."
            value={newTicket.assignedTo}
            onChange={(e) => setNewTicket({ ...newTicket, assignedTo: e.target.value })}
          />
        </div>

        <button onClick={addTicket} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <FaPlus /> Add
        </button>
      </div>

      {/* Filter */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Tickets List</h3>
        <select
          className="border p-2 rounded shadow"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Ticket Table */}
      <div className="overflow-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Assigned To</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{ticket.title}</td>
                <td className="p-3">{ticket.priority}</td>
                <td className="p-3">{ticket.assignedTo}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold
                      ${ticket.status === "Resolved" ? "bg-green-200 text-green-700" :
                        ticket.status === "In Progress" ? "bg-yellow-200 text-yellow-700" :
                        "bg-red-200 text-red-700"}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  {ticket.status !== "Resolved" && (
                    <button onClick={() => updateStatus(ticket.id)} className="text-green-600 hover:text-green-700">
                      <FaCheck />
                    </button>
                  )}
                  <button onClick={() => deleteTicket(ticket.id)} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
