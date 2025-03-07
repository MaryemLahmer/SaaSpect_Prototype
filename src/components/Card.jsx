import React from "react";
import { check } from "../assets";
import { amongUs } from "../assets";
import Button from "./Button";
const Card = ({ title, description, price, features, pricingOptions }) => {
  return (
    <div
      className="group w-[23rem] h-[34.5rem]  bg-n-8 border border-n-1 rounded-[2rem]
     flex flex-col items-center justify-center text-white transition-all 
     duration-200 ease-in-out px-4  
     hover:scale-105 hover:rotate-[-1deg] hover:border-color-1"
    >
      <div
        className=" absolute flex flex-col 
          items-center justify-center gap-8 transition-all 
          duration-200 ease-in-out z-10 group-hover:blur-[7px] group-hover:animate-anim  "
      >
        <img
          src={amongUs}
          alt="Logo"
          height={100}
          width={100}
          className="h-[45%] group-hover:h-[85%] group-hover:blur-[7px] 
          transition-all duration-200 ease-in-out z-10"
        />
        <h2
          className="h2 h-[25%] group-hover:h-[85%] 
        group-hover:blur-[7px] transition-all duration-200 
        ease-in-out z-10"
        >
          {title}
        </h2>
      </div>

      <div
        className="opacity-0 flex flex-col items-center 
      justify-center gap-3 transition-opacity duration-200 ease-in-out 
      z-20 group-hover:opacity-100"
      >
        <span className="text-xs text-gray-400">{description}</span>
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start py-4 border-t border-n-6 "
            >
              <img src={check} width={24} height={24} alt="check" />
              <p className="body-2 ml-4">{feature}</p>
            </li>
          ))}
        </ul>
        {pricingOptions.map((option, index) => (
          <div className="flex items-center h-[1.2rem] ">
            <div className="h5">€</div>
            <div className="text-[1.1rem] leading-none font-bold">
              {option.price}/{option.tokens} tokens
            </div>
          </div>
        ))}
        <Button className="w-full mb-2 ">Get Started</Button>
      </div>
    </div>
  );
};

export default Card;
