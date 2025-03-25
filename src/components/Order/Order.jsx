import React, { useState } from "react";
import Button from "../Button";
import { FaSearch, FaFilter, FaEllipsisV } from "react-icons/fa";

const ButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex space-x-2">
      <Button
        onClick={() => setActiveIndex(0)}
        className={`py-2 px-3  rounded-md   ${
          activeIndex === 0
            ? "bg-primary2 text-white/80"
            : "bg-primary2 text-grayText"
        } `}
      >
        All
      </Button>
      <Button
        onClick={() => setActiveIndex(1)}
        className={`py-2 px-3  rounded-md   ${
          activeIndex === 1
            ? "bg-primary2 text-white/80"
            : "bg-primary2 text-grayText"
        }`}
      >
        Open
      </Button>
      <Button
        onClick={() => setActiveIndex(2)}
        className={`py-2 px-3  rounded-md   ${
          activeIndex === 2
            ? "bg-primary2 text-white/80"
            : "bg-primary2 text-grayText"
        }`}
      >
        Closed
      </Button>
      <Button
        onClick={() => setActiveIndex(3)}
        className={`py-2 px-3  rounded-md   ${
          activeIndex === 3
            ? "bg-primary2 text-white/80"
            : "bg-primary2 text-grayText"
        }`}
      >
        Add
      </Button>
    </div>
  );
};

const Order = () => {
  return (
    <section>
      <div className="flex justify-between px-2 py-3 text-white bg-primary2 rounded-md">
        <h1 className="text-xl md:text-2xl font-bold text-grayText">Order</h1>
        <div>
          <button className="bg-[#341196]/10 border border-blue-700/40 text-blue-500 rounded-md cursor-pointer text- px-3 py-2 rouned-md">
            Create Order
          </button>
        </div>
      </div>
      <div className="flex justify-between my-4  ">
        <ButtonGroup />
        {/* Right Icons */}
        <div className="flex space-x-2">
          <Button
            className={`bg-gray-500/10 text-white/60 py-1 px-2 rounded-md`}
          >
            <FaSearch className="w-4 h-4" />
          </Button>
          <Button
            className={`bg-gray-500/10 text-white/60 py-1 px-2 rounded-md`}
          >
            <FaFilter className="w-4 h-4" />
          </Button>
          <Button
            className={`bg-gray-500/10 text-white/60 py-1 px-2 rounded-md`}
          >
            <FaEllipsisV className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Order;
