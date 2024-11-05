import React from "react";
import Welcome from "./Welcome";
import { BackgroundCircles } from "./design/Hero";
import ServiceCard from "./ServiceCard";

const MainContainer = () => {
  return (
    <div className="  bg-n-8 h-full flex flex-col fixed top-0 left-[14rem] w-full">
      <Welcome />
      <ServiceCard />
      <div className="absolute top-[31rem] left-[42rem] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <BackgroundCircles />
      </div>
    </div>
  );
};

export default MainContainer;
