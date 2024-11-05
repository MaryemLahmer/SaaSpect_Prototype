import React from "react";
import { services } from "../constants";
import { BackgroundCircles } from "./design/Hero";

const ServiceCard = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4 mt-[18rem] ml-[2rem]">
      {services.map((item) => (
        <div
          className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group transition-transform transform 
          hover:scale-105  duration-300 delay-${item.id * 100} animate-scaleIn`}
          style={{
            backgroundImage: `url(${item.backgroundUrl})`,
          }}
          key={item.id}
          onMouseEnter={() => setTitleVisible(false)}
          onMouseLeave={() => setTitleVisible(true)}
        >
          <div className="relative z-2 flex  h-[8rem] p-[2rem]">
            <h5 className="absolute h5 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              {item.title}
            </h5>
            <div className=" -top-[2rem]">
              <p className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
