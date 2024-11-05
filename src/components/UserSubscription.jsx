import React from "react";
import styled from "styled-components";
import InputFolder from "./InputFolder";
import Hosted from "./Hosted";

const UserSubscription = () => {
  return (
    <>
      <div className="absolute top-[6rem] py-[2rem] px-[14rem]  flex flex-col w-full  left-[9rem]  ">
        <div className="flex flex-row items-center justify-start space-x-[2rem] mb-[2rem] left-[25rem] ">
          <h6 className="h6  text-n-10">Subscription Pack:</h6>
          <h4 className="h4  text-n-1"> Web Premium</h4>
        </div>
        <InputFolder />
      </div>
    </>
  );
};

export default UserSubscription;
