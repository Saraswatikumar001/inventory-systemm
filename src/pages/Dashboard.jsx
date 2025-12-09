import React from "react";
import StatCard from "../components/StatCard";
import MiniChart from "../components/MiniChart";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  return (
    <div className="space-y-6 sm:space-y-8">

      {/* ===== Top Stats ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Revenue"
          value="$3,468.96"
          subtitle="Overview Last Month"
          accent="from-pink-500 to-purple-500"
        />
        <StatCard
          title="Orders"
          value="82"
          subtitle="Completed Orders"
          accent="from-rose-400 to-red-500"
        />
        <StatCard
          title="Visitors"
          value="$2,381.53"
          subtitle="Growth Today"
          accent="from-indigo-400 to-blue-500"
        />
        <StatCard
          title="Refunds"
          value="$432"
          subtitle="Last 30 Days"
          accent="from-orange-400 to-yellow-500"
        />
      </div>

      {/* ===== Charts Section ===== */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6  mt-20 lg:mt-0"
        style={{ marginTop: "80px" }}
      >

        {/* Sales Chart - Large */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h3 className="font-semibold text-base sm:text-lg">Sales Overview</h3>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
              <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition">Daily</button>
              <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition">Weekly</button>
              <button className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-medium transition">
                Monthly
              </button>
            </div>
          </div>
          <MiniChart />
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-base sm:text-lg mb-4">Traffic</h3>
          <div className="flex justify-center items-center">
            <div className="relative h-36 w-36 sm:h-48 sm:w-48 mx-auto">
              {/* Replace with real donut chart later */}
              <div className="h-full w-full rounded-full bg-gradient-to-br from-pink-300 to-yellow-300 shadow-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 text-center mt-4 text-xs sm:text-sm">
            <div>
              <p className="font-semibold text-gray-700">33%</p>
              <span className="text-gray-400">Direct</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">55%</p>
              <span className="text-gray-400">Search</span>
            </div>
            <div>
              <p className="font-semibold text-gray-700">12%</p>
              <span className="text-gray-400">Referral</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Table Section ===== */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-base sm:text-lg">Order Status</h3>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs sm:text-sm hover:bg-purple-700 transition">
            Export ▼
          </button>
        </div>

        <DataTable />
      </div>

    </div>
  );
}
