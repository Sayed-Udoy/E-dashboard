import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import User from "../../assets/user.png";
import { FaAngleDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-primary1 shadow-md py-4">
      <div className="flex justify-between gap-5 items-center">
        <button
          onClick={toggleSidebar}
          className="text-xl mb-4 md:hidden cursor-pointer"
        >
          <FiMenu className="text-white text-2xl" />
        </button>
        <div className="flex bg-primary2 items-center text-grayText justify-center  gap-2 py-2.5 px-2.5 min-w-[250px] max-w-xl rounded-md w-[100%] ">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent text-gray-300 border-none w-full outline-none"
          />
        </div>
        <div className="flex items-center justify-content-center gap-4">
          <div className="relative">
            <div className="absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px] "></div>
            <IoMdNotificationsOutline className="text-gray-400 text-[25px] md:text-[30px] " />
          </div>
          <div className="flex gap-2 items-center cursor-pointer justify-center text-grayText">
            <img src={User} alt="" />
            <FaAngleDown className="text-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
