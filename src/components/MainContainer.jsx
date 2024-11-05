import React from "react";
import Welcome from "./Welcome";
import { BackgroundCircles } from "./design/Hero";
import ScanButton from "./ScanButton";
import UserSubscription from "./UserSubscription";

const MainContainer = ({ tokens, setTokens }) => {
    return (
        <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full">
            <Welcome />
            <div className="absolute top-[8rem] left-[25rem] mt-4">
                <UserSubscription />
            </div>
            <div className="absolute top-[70rem] left-[42rem] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <BackgroundCircles />
            </div>
            <div className="absolute top-[67rem] left-[42rem]">
                <ScanButton tokens={tokens} setTokens={setTokens} />
            </div>
        </div>
    );
};

export default MainContainer;
