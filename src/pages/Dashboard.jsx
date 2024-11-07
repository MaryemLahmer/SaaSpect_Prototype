import React from "react";
import ResultCard from "../components/ResultCard";
import ScoreCard from "../components/ScoreCard";
import PieChart from "../components/PieChart";
import DashboardTitle from "../components/DashboardTitle";
import { GrDownload } from "react-icons/gr";
import DashboardContainer from "../components/DashboardContainer";

const Dashboard = () => {
  return (
    <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full ">
      <DashboardTitle />
      <ScoreCard />
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;
