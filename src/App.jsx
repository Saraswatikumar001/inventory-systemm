import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Widgets from "./components/Widgets";
import UIElements from "./components/UIElements";
import AdvancedUI from "./components/AdvancedUI";
import FormElements from "./components/FormElements";
import Tables from "./components/Tables";
import Charts from "./components/Charts";
import Tickets from "./components/Tickets";
import ChatSection from "./components/ChatSection";
import NotificationBell from "./components/NotificationBell";
import MapsSection from "./components/MapsSection";
import UserPage from "./components/UserPage";
import GeneralPage from "./components/GeneralPage";
import Ecommerce from "./pages/Ecommerce";
import EmailSection from "./components/EmailSection";
import ContactSection from "./components/ContactSection";
import ProductList from "./ecommerce/ProductList";
import ProductDetails from "./ecommerce/ProductDetails";
import Cart from "./ecommerce/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./ecommerce/Checkout";
import TaskList from "./components/TaskList";
import Gallery from "./components/Gallery";
import Documentation from "./components/Documentation";

export default function App() {
  return (
    <CartProvider>
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
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/chat" element={<ChatSection />} />
              <Route path="/notifications" element={<NotificationBell />} />
              <Route path="/maps" element={<MapsSection />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/pages" element={<GeneralPage />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/email" element={<EmailSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/task-list" element={<TaskList />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/docs" element={<Documentation />} />

              {/* -------------------- Ecommerce Routes -------------------- */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/ecommerce/products" element={<ProductList />} />

              <Route path="/ecommerce/product/:id" element={<ProductDetails />} />
              <Route path="/ecommerce/cart" element={<Cart />} />
              <Route path="/ecommerce/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
