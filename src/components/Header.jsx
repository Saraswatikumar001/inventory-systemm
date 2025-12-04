import React from "react";
import { Search, User } from "lucide-react";
import NotificationBell from "./NotificationBell";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 rounded bg-gray-100">🏠</button>
        <div className="relative">
          <input
            className="border rounded-full px-3 py-1 w-72"
            placeholder="Search..."
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2" size={16} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Dropdown */}
        <NotificationBell />

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-pink-300" />
          <span className="text-sm font-medium">Saraswati</span>
        </div>
      </div>
    </header>
  );
}
