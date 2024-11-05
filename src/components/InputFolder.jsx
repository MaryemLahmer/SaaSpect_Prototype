import React, { useState } from "react";
import "../App.css";

const InputFolder = () => {
  return (
    <div className="w-full -ml-[19rem] mb-[1rem]">
      <div id="poda">
        <div className="glow"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>

        <div className="white"></div>

        <div className="border"></div>

        <div id="main">
          <input placeholder="URL " type="url" name="text" className="input" />
          <div id="input-mask"></div>
          <div id="pink-mask"></div>
          <div className="filterBorder"></div>
          <div id="filter-icon">
            <svg
              preserveAspectRatio="none"
              height="27"
              width="27"
              viewBox="4.8 4.56 14.832 15.408"
              fill="none"
            >
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div id="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              height="24"
              fill="none"
              className="feather feather-search"
            >
              <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
              <line
                stroke="url(#searchl)"
                y2="16.65"
                y1="22"
                x2="16.65"
                x1="22"
              ></line>
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="#f8e7f8" offset="0%"></stop>
                  <stop stopColor="#b6a9b7" offset="50%"></stop>
                </linearGradient>
                <linearGradient id="searchl">
                  <stop stopColor="#b6a9b7" offset="0%"></stop>
                  <stop stopColor="#837484" offset="50%"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hosted component definition
const Hosted = () => {
  const [selectedOption, setSelectedOption] = useState("local");

  return (
    <div className=" flex flex-col mb-[4rem]  ">
      <div className="flex flex-row gap-[5rem] w-full ml-[6rem] mb-[1rem]">
        <label className="radio-button text-lg">
          <input
            type="radio"
            name="example-radio"
            value="local"
            checked={selectedOption === "local"}
            onChange={() => setSelectedOption("local")}
          />
          <span className="radio ml-2"></span>
          <span className="ml-2">Local</span>
        </label>

        <label className="radio-button text-lg">
          <input
            type="radio"
            name="example-radio"
            value="cloud"
            checked={selectedOption === "cloud"}
            onChange={() => setSelectedOption("cloud")}
          />
          <span className="radio ml-2"></span>
          <span className="ml-2">Cloud</span>
        </label>
      </div>

      {selectedOption === "cloud" && <InputFolder />}
      {selectedOption === "local" && (
        <div className="w-full -ml-[19rem]">
          <div id="poda">
            <div className="glow"></div>
            <div className="darkBorderBg"></div>
            <div className="darkBorderBg"></div>
            <div className="darkBorderBg"></div>

            <div className="white"></div>

            <div className="border"></div>

            <div id="main">
              <input
                placeholder="Folder path"
                type="text"
                name="text"
                className="input  cursor-pointer"
                webkitdirectory="true" // Enables folder selection
                mozdirectory="true" // Firefox compatibility, although partial
                msdirectory="true" // Edge compatibility, although partial
                directory="true" // Generic folder selection attribute
              />
              <div id="input-mask"></div>
              <div id="pink-mask"></div>

              <div id="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-n-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h4l3-3h7a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />

                  <defs>
                    <linearGradient gradientTransform="rotate(50)" id="search">
                      <stop stopColor="#f8e7f8" offset="0%"></stop>
                      <stop stopColor="#b6a9b7" offset="50%"></stop>
                    </linearGradient>
                    <linearGradient id="searchl">
                      <stop stopColor="#b6a9b7" offset="0%"></stop>
                      <stop stopColor="#837484" offset="50%"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hosted;
