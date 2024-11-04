import React from "react";

const RemainingTokensCard = () => {
  return (
    <div className="flex flex-col h-[10rem] w-[10rem] fixed bottom-[2rem] left-[1rem] justify-center items-center">
      <h2 className="h2 text-color-1 font-code font-bold">10</h2>
      <span className="font-code text-2xl text-n-4">tokens left</span>
    </div>
  );
};

export default RemainingTokensCard;
