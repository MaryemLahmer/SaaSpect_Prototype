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
      <div className="absolute right-[19rem] top-[15.5rem]">
        <ScanButton
          tokens={tokens}
          setTokens={setTokens}
          text="Start Scan"
          to="/Scan"
        />
      </div>
    </div>
  );
};
export default MainContainer;
