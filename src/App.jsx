import { useState } from "react";

import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard/Dashboard";
import MainBoard from "./components/Dashboard/Mainboard";
import Order from "./components/Order/Order";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import SalesReport from "./components/SalesReport/SalesReport";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="bg-primary1">
      <div className="container bg-primary1 flex mx-auto">
        <div
          className={`absolute top-0 transition-all duration-300 ${
            isOpen ? "left-[0%]" : "left-[-100%]"
          } md:static`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
            toggleSidebar={toggleSidebar}
          />
          <Route path="/" element={<Dashboard toggleSidebar={toggleSidebar} />}>
            <Route path="/" index element={<MainBoard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Products />} />
            <Route path="sales" element={<SalesReport />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
