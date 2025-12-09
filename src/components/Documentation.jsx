import React from "react";
import { FaBookOpen, FaFileDownload, FaCode, FaQuestionCircle, FaTools } from "react-icons/fa";
import { IoDocumentLockSharp } from "react-icons/io5";

const Documentation = () => {
    const docs = [
        {
            title: "Project Overview",
            desc: "Learn how the Inventory System works and key functionalities.",
            icon: <FaBookOpen className="text-blue-600 text-3xl" />,
            link: "#",
        },
        {
            title: "Setup & Installation",
            desc: "Steps to run the project on local and deployment server.",
            icon: <FaTools className="text-green-600 text-3xl" />,
            link: "#",
        },
        {
            title: "API Documentation",
            desc: "All backend API endpoints with examples and responses.",
            icon: <FaCode className="text-purple-600 text-3xl" />,
            link: "#",
        },
        {
            title: "Modules & Features",
            desc: "Complete list of modules like Products, Stock, Billing, etc.",
            icon: <FaFileDownload className="text-orange-600 text-3xl" />,
            link: "#",
        },
        {
            title: "FAQ & Troubleshooting",
            desc: "Common issues and solutions for better user experience.",
            icon: <FaQuestionCircle className="text-red-600 text-3xl" />,
            link: "#",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2">
                        <IoDocumentLockSharp className="text-4xl text-[#005461]" />
                        <h1 className="text-4xl font-bold text-[#005461] font-bold">
                            Documentation
                        </h1>
                    </div>
                    <p className="text-[#CC561E] font-semibold mt-2">
                        Everything you need to know about the Inventory Management System
                    </p>
                </div>

                {/* Card Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {docs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h2 className="text-xl font-bold text-gray-800">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                            <a
                                href={item.link}
                                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                            >
                                Download / View →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12">
                    <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition flex items-center gap-2 mx-auto">
                        <FaFileDownload /> Download Full Documentation (PDF)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
