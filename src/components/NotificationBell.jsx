import { useState } from "react";
import { Bell } from "lucide-react";

export default function NotificationBell() {
    const [open, setOpen] = useState(false);
    const notifications = [
        { id: 1, message: "New Item added: Laptop", time: "2 min ago" },
        { id: 2, message: "Stock running low: AirPods", time: "10 min ago" },
        { id: 3, message: "New Sale recorded", time: "1 hr ago" },
    ];

    return (
        <div className="relative">
            {/* Bell Icon */}
            <button
                onClick={() => setOpen(!open)}
                className="relative hover:scale-110 transition"
            >
                <Bell size={22} className="text-gray-600 cursor-pointer" />
                {/* Notification count */}
                <span className="absolute  -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">
                    {notifications.length}
                </span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg border z-50">
                    <div className="p-3 border-b font-bold text-lg text-blue-700">Notifications</div>
                    <ul className="max-h-52 overflow-y-auto">
                        {notifications.map(n => (
                            <li
                                key={n.id}
                                className="px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer"
                            >
                                <p>{n.message}</p>
                                <span className="text-xs text-gray-400">{n.time}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-2 text-center text-blue-600 text-sm hover:bg-gray-100 border-t">
                        View All
                    </button>
                </div>
            )}
        </div>
    );
}
