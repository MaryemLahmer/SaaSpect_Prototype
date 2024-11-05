import React from "react";
import Welcome from "./Welcome";
import { BackgroundCircles } from "./design/Hero";
import ScanButton from "./ScanButton";
import UserSubscription from "./UserSubscription";
import ServiceCard from "./ServiceCard";

const MainContainer = ({ tokens, setTokens }) => {
  return (
    <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full">
      <Welcome />
      <ServiceCard />
      <UserSubscription />

      <div className=" mt-[5rem] left-[42rem]">
        <ScanButton tokens={tokens} setTokens={setTokens} />
      </div>
    </div>
  );
};
export default MainContainer;
