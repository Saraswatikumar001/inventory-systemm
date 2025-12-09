import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Layers,
  Blocks,
  BookOpen,
  MessageCircle,
  Bell,
  FileText,
  Mail,
  ShoppingCart,
  GalleryHorizontalEnd,
  CheckSquare,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} />, link: "/" },
  { label: "Widgets", icon: <Layers size={18} />, link: "/widgets" },
  { label: "UI Elements", icon: <Blocks size={18} />, link: "/ui-elements" },
  { label: "Advanced UI", icon: <BookOpen size={18} />, link: "/advanced-ui" },
  { label: "Form Elements", icon: <FileText size={18} />, link: "/forms" },
  { label: "Tables", icon: <Users size={18} />, link: "/tables" },
  { label: "Charts", icon: <GalleryHorizontalEnd size={18} />, link: "/charts" },
  { label: "Tickets", icon: <CheckSquare size={18} />, link: "/tickets" },
  { label: "Chat", icon: <MessageCircle size={18} />, link: "/chat" },
  { label: "Notifications", icon: <Bell size={18} />, link: "/notifications" },
  { label: "Maps", icon: <Mail size={18} />, link: "/maps" },
  { label: "User Pages", icon: <Users size={18} />, link: "/users" },
  { label: "General Pages", icon: <FileText size={18} />, link: "/pages" },
  { label: "E-Commerce", icon: <ShoppingCart size={18} />, link: "/ecommerce" },
  { label: "Email", icon: <Mail size={18} />, link: "/email" },
  { label: "Contact", icon: <Mail size={18} />, link: "/contact" },
  { label: "Task List", icon: <CheckSquare size={18} />, link: "/task-list" },
  { label: "Gallery", icon: <GalleryHorizontalEnd size={18} />, link: "/gallery" },
  { label: "Documentation", icon: <Settings size={18} />, link: "/docs" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-purple-600 text-white rounded-md"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r shadow-sm overflow-y-auto z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Close Button only on mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 bg-gray-200 rounded-md"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        {/* Logo Area */}
        <div className="flex items-center gap-3 p-5 border-b">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
            IMS
          </div>
          <span className="text-md font-semibold">Inventory Management</span>
        </div>

        {/* Menu */}
        <nav className="mt-4 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => setOpen(false)} // Close after click in mobile
              className="flex items-center gap-3 px-5 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition rounded-md"
            >
              <span className="text-purple-500">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
