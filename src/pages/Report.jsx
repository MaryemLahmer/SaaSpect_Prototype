import React from "react";
import Welcome from "../components/Welcome";
import ScanButton from "../components/ScanButton";
import check from "../assets/check.png";
import { reportContent } from "../constants";

const Report = () => {
  // Function to handle download
  const handleDownload = () => {
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "SaaSpect-Report-1108.txt";
    link.click();

    // Cleanup: revoke the object URL after download
    URL.revokeObjectURL(url);
  };
  return (
    <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full ">
      <Welcome text="Full Scan Report" />
      <h5 className="h5 ml-[24rem] text-n-3 font-code mt-[3rem]">
        {"Your scan history".split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 animate-fadeIn ${
              letter === " " ? "w-[1rem]" : ""
            }`}
            style={{ animationDelay: `${index * 0.04}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h5>
      <div className=" flex m-[3rem] h-full ">
        <div className=" w-[85%] flex flex-row justify-around items-center h-[10rem]">
          <div className=" w-[55%] flex flex-row justify-start items-center gap-[1rem] ">
            <img src={check} height={40} width={40} />
            <h5 className="h5 animate-fadeIn"> SaaSpect-Report-1108.txt</h5>
          </div>
          <div className=" flex flex-row flex-grow justify-around items-center animate-fadeIn ">
            <ScanButton text="Download" onClick={handleDownload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
