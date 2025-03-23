import React from "react";
import WrapperDiv from "./WrapperDiv";
import ContentHeader from "../ContentHeader";
import { SalesData } from "../../data/index";
import Bars from "../../assets/Bars.png";

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
      <div className="w-full h-[120px]" >
        <img className="w-full h-full" src={Bars} alt="" />
      </div>
      <div className="lg:flex lg:items-center pt-2 mt-2" >
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium lg:border-r border-grayText/30 w-full" ><span className="h-2 w-2 rounded-full bg-secondary" ></span>Volume</button>
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium w-full" ><span className="h-2 w-2 rounded-full bg-grayText" ></span>Service</button>
      </div>
    </div>
  );
};

const TodaySales = () => {
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

export default TodaySales;
