import React from "react";

import {
    Line,
    Bar,
    Doughnut,
    
} from "react-chartjs-2";


import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

export default function Charts() {
    const LineData = {
        Labels: ["jan", "feb", "mar", "apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [320, 420, 350, 480, 520, 610],
                fill: true,
                tension: 0.4,
                backgroundColor: "rgba(139, 92, 246, 0.12)",
                borderColor: "rgb(99, 102, 241)",
                tension: 0.4,
            },
        ],
    };

    // Bar Chart Data
    const barData = {
        labels: ["Inventory", "Orders", "Shipped", "Pending"],
        datasets: [
            {
                label: "Items",
                data: [150, 300, 180, 90],
                backgroundColor: ["#6366F1", "#F59E0B", "#10B981", "#EF4444"],
            },
        ],
    };

    // Doughnut Chart Data
    const doughnutData = {
        labels: ["Electronics", "Furniture", "Books", "Clothing"],
        datasets: [
            {
                label: "Categories",
                data: [300, 150, 200, 100],
                backgroundColor: ["#6366F1", "#EC4899", "#10B981", "#F59E0B"],
            },
        ],
    };

    

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Charts & Analytics</h1>
            <div className="grid cols-1 md:grid-cols-2 gap-6">
                {/* Line Chart */}
                <div className="bg-white shadow-lg p-5 rounded-lg">
                    <h2 className="font-semibold mb-2 text-3xl text-purple-600">Monthly Sales</h2>
                    <Line data={LineData} />
                </div>
                {/* Bar Chart */}
                <div className="bg-white shadow-lg p-5 rounded-lg">
                    <h2 className="font-semibold mb-2 text-green-600 text-3xl">Order Status</h2>
                    <Bar data={barData} />
                </div>

                {/* Doughnut Chart */}
                <div className="bg-white shadow-lg rounded-lg">
                    <h2 className="font-semibold mb-2 text-yellow-600 text-3xl">Product Categories</h2>
                    <Doughnut data={doughnutData} />
                </div>                
            </div>
        </div>
    )
}