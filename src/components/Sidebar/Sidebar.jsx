import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChartLine, FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import { Link, useLocation } from "react-router";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    link: "/",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    link: "/profile",
  },
  {
    name: "Order",
    icon: <AiOutlineShoppingCart />,
    link: "/order",
  },
  {
    name: "Product",
    icon: <IoBag />,
    link: "/product",
  },
  {
    name: "Sales Report",
    icon: <FaChartLine />,
    link: "/sales",
  },

  {
    name: "Signout",
    icon: <PiSignOutFill />,
    link: "/signout",
  },
];

const Sidebar = ({ toggleSidebar }) => {
  const location = useLocation();
  return (
    <div
      className={`bg-primary1 border-r border-primary2 text-white h-screen p-5 w-44 transition-all`}
    >
      <ul className="space-y-3 mt-5 md:mt-0">
        {sidebarItems.map((item, idx) => {
          return (
            <Link
              to={item.link}
              // onClick={() => setIsActive(idx)}
              key={item.name}
              className={`flex font-medium px-2 py-2.5 rounded-lg  items-center gap-2 cursor-pointer hover:bg-secondary hover:text-primary1 transition-all duration-200 ${
                location.pathname === item.link
                  ? "text-primary2 bg-secondary "
                  : "text-grayText"
              } `}
            >
              {item.icon} {item.name}
            </Link>
          );
        })}
      </ul>
      <button
        onClick={toggleSidebar}
        className=" md:hidden absolute top-0 right-0 px-2 py-3 text-2xl cursor-pointer"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Sidebar;
