import React from "react";
import { BackgroundCircles } from "./design/Hero";
const Welcome = ({ text }) => {
  return (
    <div className="h-[4rem] ml-[10rem] ">
      <div className="absolute top-[20rem] left-[20rem] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <BackgroundCircles />
      </div>
      <h1 className="h1 ml-[7.5rem] mt-[2rem] text-color-1 font-medium">
        {text}
      </h1>
    </div>
  );
};

export default Welcome;
