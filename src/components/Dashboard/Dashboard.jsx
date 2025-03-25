import React from "react";
import Navbar from "../Navbar/Navbar";
import Mainboard from "./Mainboard";
import { Outlet } from "react-router";

const Dashboard = ({ toggleSidebar }) => {
  return (
    <div
      className={`flex-1 hide-scrollbar transition-all px-2 max-h-screen overflow-y-scroll`}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
