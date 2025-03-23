import React from "react";
import WrapperDiv from "./WrapperDiv";
import ContentHeader from "../ContentHeader";
import { SalesData } from "../../data/index";
import Graph from "../../assets/Graph.png";

const SalesDetails = () => {
  return (
    <div className="p-4">
      <ContentHeader title="Today’s Sales" des="Sales Summary" />
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5">
        {SalesData &&
          SalesData.map((data) => {
            return (
              <div key={data.id} className={`bg-primary1 p-4 rounded-md`}>
                <img src={data.icon} alt="" />
                <div className="mt-2">
                  <p className="text-[15px] font-semibold text-white/80 pb-1">
                    {data.count}
                  </p>
                  <h1 className="text-white/80 text-[10px] md:text-[12px] font-medium">
                    {data.title}
                  </h1>
                  <p
                    style={{ color: data.color }}
                    className={`text-[8px] md:text-[10px] font-medium`}
                  >
                    {data.des}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const SalesChart = () => {
  return (
    <div className="flex-0.2 p-4">
      <ContentHeader title="Level" />
      <div className="w-full h-[120px]">
        <img className="w-full h-full" src={Graph} alt="" />
      </div>
      <div className="lg:flex lg:items-center justify-between pt-2 mt-2">
        <div>
          <button className="flex items-center lg:justify-center gap-2 text-grayText w-full">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>Last
            Month
          </button>
          <p>$4,087</p>
        </div>
        <div>
          <button className="flex items-center lg:justify-center gap-2 text-grayText w-full">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>This
            Month
          </button>
          <p>$5,506</p>
        </div>
      </div>
    </div>
  );
};

const TopProducts = () => {
  return (
    <div>
      <WrapperDiv>
        <div className=" flex-[1.5] bg-primary2 rounded-md">
          <SalesDetails />
        </div>
        <div className=" flex-[0.5] bg-primary2 rounded-md">
          <SalesChart />
        </div>
      </WrapperDiv>
    </div>
  );
};

export default TopProducts;
