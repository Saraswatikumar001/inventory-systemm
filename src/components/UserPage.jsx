import { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";

export default function UserPage() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Sneha Das", email: "sneha@gmail.com", role: "Staff", status: "Inactive" },
    { id: 3, name: "Amit Roy", email: "amit@gmail.com", role: "Manager", status: "Active" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">User Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <FaPlus /> Add User
        </button>0
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full border p-3 pl-10 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border">{user.role}</td>
              <td className="p-3 border">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
                
              </td>
              <td className="p-3 border text-center flex justify-center gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination UI */}
      <div className="flex justify-between items-center mt-5">
        <p className="text-gray-600 text-sm">Showing {filteredUsers.length} of {users.length}</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded hover:bg-gray-100">Prev</button>
          <button className="px-3 py-2 border rounded hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
}
