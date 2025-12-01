import React from "react";
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
  Settings,
  CheckSquare,
  Users,
  FolderKanban,
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
  return (
    <aside className="w-64 bg-white border-r shadow-sm h-screen overflow-y-auto">
      {/* Logo Area */}
      <div className="flex items-center gap-3 p-5 border-b">
        <div className="h-10 w-10 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
          IMS
        </div>
        <span className="text-lg font-semibold">Inventory Management System</span>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center gap-3 px-5 py-2 cursor-pointer text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition rounded-md group"
          >
            <span className="text-purple-500">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </Link>

          
        ))}
      </nav>
    </aside>
  );
}
