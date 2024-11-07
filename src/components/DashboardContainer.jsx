import React from "react";
import PieChart from "./PieChart";
import ResultCard from "./ResultCard";
import { scanResults } from "../constants";
import ScanButton from "./ScanButton";
const DashboardContainer = () => {
  return (
    <div className=" w-full h-full p-[1rem]  flex flex-row">
      {/* Left Spacer */}
      <div className="flex-grow flex-col items-center justify-center h-full">
        <div>
          <PieChart />
        </div>
        <div className="flex justify-center">
          <ScanButton text="Full Report" to="/report" />
        </div>
      </div>

      {/* Divider */}
      <div className="bg-n-1 w-[0.2rem] h-full ml-[1rem]"></div>

      {/* Main Content Area */}
      <div className=" w-[73%] h-full flex flex-wrap mt-8 gap-[4rem]  overflow-hidden ml-[3rem] ">
        {scanResults.map((result) => (
          <ResultCard
            key={result.id}
            severity={result.severity}
            mainTitle={result.title}
            subtitle={result.text}
            details={result.details}
            recommendation={result.recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardContainer;
