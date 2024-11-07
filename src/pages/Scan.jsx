import React, { useState, useEffect } from "react";
import { BackgroundCircles } from "../components/design/Hero";
import "../App.css";
import check from "../assets/check.png";
import arrow from "../assets/arrow.png";
import Loader from "../components/Loader";
import { scannedServices } from "../constants";
import ScanButton from "../components/ScanButton";
const scanResults = [
  {
    id: "0",
    title: "Full-Site Vulnerability Assessment",
    text: "Detection of common vulnerabilities",
    vulnerabilities: [
      { id: "0-1", name: "SQL Injection", severity: "High" },
      { id: "0-2", name: "Cross-Site Scripting (XSS)", severity: "Medium" },
      { id: "0-3", name: "Cross-Site Request Forgery (CSRF)", severity: "Low" },
    ],
  },
  {
    id: "1",
    title: "Advanced Malware Detection",
    text: "Malware scanning to identify malicious scripts, phishing pages, or compromised assets.",
    vulnerabilities: [
      { id: "1-1", name: "Phishing Page Detected", severity: "High" },
      { id: "1-2", name: "Malicious Script Injection", severity: "Critical" },
    ],
  },
  {
    id: "2",
    title: "API Security Testing",
    text: "Scanning and testing of API endpoints for security flaws.",
    vulnerabilities: [
      { id: "2-1", name: "Broken Authentication", severity: "High" },
      { id: "2-2", name: "Excessive Data Exposure", severity: "Medium" },
    ],
  },
  {
    id: "3",
    title: "Security Risk Assessment and Reporting",
    text: "Executive summary reports tailored for non-technical stakeholders.",
    vulnerabilities: [
      { id: "3-1", name: "Insecure Storage of Reports", severity: "Medium" },
    ],
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  {
    id: "4",
    title: "Data Privacy and Compliance Scanning",
    text: "Identification of personal data leaks or misconfigured assets that may compromise privacy.",
    vulnerabilities: [
      { id: "4-1", name: "Personal Data Leak Detected", severity: "Critical" },
      { id: "4-2", name: "Weak Privacy Configurations", severity: "Medium" },
    ],
  },
];

const Scan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinalStep, setIsFinalStep] = useState(false); // Track final step
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  // for displaying severities
  function getSeverityColor(severity) {
    switch (severity) {
      case "Critical":
        return "red-700";
      case "High":
        return "red-500";
      case "Medium":
        return "yellow-500";
      case "Low":
        return "green-500";
      default:
        return "gray-500";
    }
  }
  //keep track of the index for displaying services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 < scanResults.length) {
          return prevIndex + 1;
        } else {
          clearInterval(interval); // Stop interval when the last item is reached
          return prevIndex;
        }
      });
    }, 2600); // Change service every xx seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);
  useEffect(() => {
    if (currentIndex === scanResults.length - 1) {
      setIsFinalStep(true); // Set final step flag when the last item is reached
    }
  }, [currentIndex]);

  // Delay calculation
  const getItemDelay = (index, totalItems) =>
    `${(index * 1100) / totalItems}ms`;

  useEffect(() => {
    if (isFinalStep) {
      // Wait 3 seconds after the final item, then hide the loader and show the "Done" button
      const timeout = setTimeout(() => {
        setIsLoaderVisible(false); // Hide loader
      }, 1900); // Show loader for 3 seconds after final item

      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [isFinalStep]);
  return (
    <div className="bg-n-8 overflow-y-auto h-screen flex flex-col fixed top-0 left-[14rem] w-full">
      <div className="h-[4rem] ml-[11rem] ">
        <h1 className="h1 ml-[10.5rem] mt-[2rem] text-color-1 font-medium">
          Scan Roadmap
        </h1>
        <h5 className="h5 ml-[9.5rem] text-n-3 font-code">
          {"Hold tight as we scan your web app"
            .split("")
            .map((letter, index) => (
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

        {/* Circle Row */}
        <div
          className="flex flex-row justify-start
          items-center w-full min-h-[5rem] mt-[2rem] gap-[4rem] -ml-[2rem]"
        >
          {scanResults.map((service, index) => (
            <React.Fragment key={service.id}>
              <div className="circle-container flex flex-col items-center">
                {index < currentIndex ? (
                  <div class="circle-container ">
                    <div class="circleUnmoving"></div>
                    <div class="circle-text">
                      <img src={check} height={34} width={34} />
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className={
                        index === currentIndex
                          ? "circle active animate-fadeIn"
                          : ""
                      }
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {index === currentIndex && (
                      <div className="circle-text animate-fadeIn ">
                        {index + 1}
                      </div>
                    )}
                  </>
                )}
              </div>
              {index < scanResults.length - 1 && currentIndex > index && (
                <img
                  src={arrow}
                  width={34}
                  height={34}
                  alt="Arrow"
                  className="animate-fadeIn"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Service Details */}
      <div
        className="flex flex-col w-[55rem] h-[25rem] rounded-3xl border-color-1 border-4 
        border-lg mt-[14rem] ml-[12rem] items-center justify-center 
        transition-opacity duration-1000 ease-in-out p-[0.5rem]"
      >
        <h3
          className="h3 text-n-1 mt-[1rem] transition-opacity 
      duration-1000 ease-in-out text-center font-bold"
        >
          {scanResults[currentIndex].title}
        </h3>

        <h5
          className="h5 transition-opacity mt-[0.2rem] duration-1000 ease-in-out 
        font-code  text-n-2 text-center"
        >
          {scanResults[currentIndex].text}
        </h5>
        {isLoaderVisible && (
          <div className="w-full h-[4rem] mt-[2rem]  py-[1rem]">
            {/* Show loader during the transition and for the final item */}
            <Loader />
          </div>
        )}
        {isFinalStep && !isLoaderVisible && (
          <div className="w-[full] h-[4rem] mt-[1rem]">
            <ScanButton text="Done" to="/Profile" />
          </div>
        )}

        <div
          className="w-full h-full  flex flex-col 
          items-center justify-center gap-[2rem] 
          transition-opacity duration-1000 ease-in-out "
        >
          <ul className="space-y-4 px-4 ">
            {scanResults[currentIndex].vulnerabilities.map((vuln, index) => (
              <li
                key={vuln.id}
                className={`text-${getSeverityColor(vuln.severity)} 
            text-[1.3rem] text-start  animate-appear  `}
                style={{
                  transitionDelay: index * 1000, // Apply delay
                }}
              >
                {vuln.name} :{" "}
                <span className="text-color-2 font-bold text-3xl">
                  {vuln.severity}
                </span>{" "}
                Severity
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scan;
