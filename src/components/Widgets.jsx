import React from "react";
import { Package, Users, ShoppingCart, DollarSign, TrendingUp, Truck } from "lucide-react";

export default function Widgets() {
  return (
    <div className="p-6 space-y-8">
      {/* Page title */}
      <h1 className="text-2xl font-bold text-gray-800">Widgets</h1>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBox icon={<Package />} title="Total Products" value="1,248" />
        <StatBox icon={<ShoppingCart />} title="Total Orders" value="562" />
        <StatBox icon={<DollarSign />} title="Revenue" value="$47,980" />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBox icon={<Users />} title="Active Customers" value="328" />
        <StatBox icon={<Truck />} title="Suppliers" value="14" />
        <StatBox icon={<TrendingUp />} title="Stock Growth" value="+12%" />
      </div>

      {/* Chart + Latest Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Mini Chart placeholder */}
        <div className="bg-white shadow-md rounded-xl p-6 h-64 flex items-center justify-center">
          <p className="text-gray-500">📊 Chart Coming Soon...</p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between">
              <span>🔹 Stock updated (iPhone 13)</span>
              <span className="text-xs text-gray-400">2 min ago</span>
            </li>
            <li className="flex justify-between">
              <span>🔹 New supplier added: TechnoSoft</span>
              <span className="text-xs text-gray-400">30 min ago</span>
            </li>
            <li className="flex justify-between">
              <span>🔹 Order #2458 processed</span>
              <span className="text-xs text-gray-400">1 hr ago</span>
            </li>
            <li className="flex justify-between">
              <span>🔹 Samsung Tablet Out of Stock</span>
              <span className="text-xs text-gray-400">3 hrs ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Reusable Component */
const StatBox = ({ icon, title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer">
      <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
};
