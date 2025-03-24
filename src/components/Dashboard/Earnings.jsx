import React from "react";
import WrapperDiv from "./WrapperDiv";
import ContentHeader from "../ContentHeader";
import { SalesData } from "../../data/index";
import Graph2 from "../../assets/Graph2.png";
import Percentage from "../../assets/Percentage.png";

const VisitorEnsight = () => {
  return (
    <div className="p-4">
      <ContentHeader title="Visitor Insights" />
      <div className="w-full mt-10">
        <img src={Graph2} className="w-full object-fit h-full" alt="" />
      </div>
    </div>
  );
};

const EarningsRate = () => {
  return (
    <div className="flex-0.2 p-4 flex items-center md:items-start gap-4 justify-between sm:flex-row md:flex-col">
      <div>
        <ContentHeader title="Earnings" des="Total Expense" />
        <h1 className="text-[20px] text-secondary font-bold my-2">$6078.76</h1>
        <p className="text-grayText text-[11px] mb-2">
          Profit is 48% More than last Month
        </p>
      </div>
      <div className="md:w-full">
        <img className="mt-4 md:mx-auto" src={Percentage} alt="" />
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
