import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Widgets from "./components/Widgets";
import UIElements from "./components/UIElements";
import AdvancedUI from "./components/AdvancedUI";
import FormElements from "./components/FormElements";
import Tables from "./components/Tables";
import Charts  from "./components/Charts";

export default function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar stays always visible */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-50 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/ui-elements" element={<UIElements />} />
            <Route path="/advanced-ui" element={<AdvancedUI />} />
            <Route path="/forms" element={<FormElements />} />
            <Route path="/tables"  element={<Tables />} />
            <Route path="/charts" element={<Charts/>} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}
