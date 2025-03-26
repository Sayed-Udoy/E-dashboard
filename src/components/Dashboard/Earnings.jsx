import React from "react";
import WrapperDiv from "./WrapperDiv";
import ContentHeader from "../ContentHeader";
import { SalesData } from "../../data/index";
import CurveChat from "../chart/curveChart";
import Percentage from "../chart/gauge";






const VisitorEnsight = () => {
  return (
    <div className="p-4">
      <ContentHeader title="Visitor Insights" />
      <div className="w-full mt-10">
        <CurveChat />
      </div>
    </div>
  );
};

const EarningsRate = () => {
  return (
    <div className="flex flex-col  items-center md:items-start gap-6 p-4 w-full">
  
    <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
      <ContentHeader title="Earnings" des="Total Expense" />
      <h1 className="text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold my-2">
        $6078.76
      </h1>
      <p className="text-grayText text-[12px] md:text-[14px] ">
        Profit is 48% More than last Month
      </p>
    </div>
  
    <div className="w-full md:w-1/2 lg:w-3/5 flex items-center mx-auto justify-center">
      <Percentage />
    </div>
  </div>
  
  );
};

const Earnings = () => {
  return (
    <div>
      <WrapperDiv reverse>
        <div className=" flex-[1] bg-primary2 rounded-md">
          <VisitorEnsight />
        </div>
        <div className=" flex-[0.5] bg-primary2 rounded-md">
          <EarningsRate />
        </div>
      </WrapperDiv>
    </div>
  );
};

export default Earnings;
