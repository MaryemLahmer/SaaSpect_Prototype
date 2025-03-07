import React, { useState, useEffect } from "react";
import { networkPricing, mobilePricing, webPricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
import Card from "./Card";
const PricingList = () => {
  const [selectedPricing, setSelectedPricing] = useState(networkPricing);
  useEffect(() => {
    setSelectedPricing(networkPricing);
  }, []);
  return (
    <div>
      <div className="flex flex-row gap-[15rem] items-center justify-center  mb-[2rem] max-lg:w-full">
        <Button
          className={` ${
            selectedPricing === networkPricing
              ? "transform scale-150 text-color-1"
              : ""
          }  transition duration-200 ease-in-out
            focus:scale-150 focus:outline-none focus:text-color-1`}
          px="px-10"
          onClick={() => setSelectedPricing(networkPricing)}
        >
          Network Assessment
        </Button>
        <Button
          px="px-10"
          className="transform hover:scale-150 transition duration-300 ease-in-out focus:text-color-1
          focus:scale-150 focus:outline-none"
          onClick={() => setSelectedPricing(webPricing)}
        >
          Web Assessment
        </Button>
        <Button
          px="px-10"
          className="transform hover:scale-150 transition duration-300 ease-in-out focus:text-color-1
          focus:scale-150 focus:outline-none"
          onClick={() => setSelectedPricing(mobilePricing)}
        >
          Mobile Assessment
        </Button>
      </div>

      <div className="flex  max-lg:flex-wrap items-center justify-between">
        {selectedPricing.map((item, index) => (
          <div>
            <Card
              features={item.features}
              price={item.price}
              description={item.description}
              title={item.title}
              pricingOptions={item.pricingOptions}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
