import React from "react";
import { services } from "../constants";

const ServiceCard = () => {
  return (
    <div className="flex flex-wrap gap-6 mb-4 mt-[15rem] ml-[2rem]">
      {services.map((item) => (
        <div
          className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
          style={{
            backgroundImage: `url(${item.backgroundUrl})`,
          }}
          key={item.id}
        >
          <div className="relative z-2 flex flex-col h-[12rem] p-[2rem]">
            {/* Title (visible by default, hidden on hover) */}
            <h5 className="h5 mb-2 transition-opacity hover:opacity-0">
              {item.title}
            </h5>

            {/* Text (hidden by default, visible on hover) */}
            <p className="body-2 mb-4 text-n-3 opacity-0 hover:opacity-100 transition-opacity">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
