import { FiMenu } from "react-icons/fi";
import { FaCreditCard, FaHome, FaMoneyBill, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAccountBalance, MdDashboard } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "Profile",
    icon: <FaUser />,
  },
  {
    name: "Leaderboard",
    icon: <MdOutlineLeaderboard />,
  },
  {
    name: "Order",
    icon: <AiOutlineShoppingCart />,
  },
  {
    name: "Product",
    icon: <IoBag />,
  },
  {
    name: "Sales Report",
    icon: <FaChartLine />,
  },
  {
    name: "Message",
    icon: <FiMessageCircle />,
  },

  {
    name: "Settings",
    icon: <IoSettingsSharp />,
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isActive,setIsActive] = useState(0)
  return (
    <div
      className={`bg-primary1 border-r border-primary2 text-white h-screen p-5 w-44 transition-all`}
    >
      <button onClick={toggleSidebar} className="text-xl mb-4">
        <FiMenu />
      </button>

      <ul className="space-y-10">
        {sidebarItems.map((item,idx) => {
          return (
            <li
            onClick={()=>setIsActive(idx)}
              key={item.name}
              className={`flex   px-2 py-2.5 rounded-lg  items-center gap-2 cursor-pointer ${idx === isActive ? "text-primary2 bg-secondary " : "text-grayText"} ` }
            >
              {item.icon} {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
