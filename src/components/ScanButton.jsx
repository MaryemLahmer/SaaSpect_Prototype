import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { scanningMessages } from "../constants/scanningMessages";

const ScanButton = ({ setTokens, tokens }) => {
    const [isScanning, setIsScanning] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);

    const startScan = () => {
        if (tokens > 0) {  // Only decrement if tokens are available
            setTokens(prevTokens => Math.max(prevTokens - 1, 0)); // Decrease tokens
            setIsScanning(true);
            setMessageIndex(0);
            setCurrentMessage(scanningMessages[0]);

            // Cycle through messages every 500 ms
            const messageInterval = setInterval(() => {
                setMessageIndex((prevIndex) => {
                    const newIndex = prevIndex + 1 < scanningMessages.length ? prevIndex + 1 : prevIndex;
                    setCurrentMessage(scanningMessages[newIndex]);
                    return newIndex;
                });
            }, 500);

            // End scan after 15 seconds
            setTimeout(() => {
                clearInterval(messageInterval);
                setIsScanning(false);
            }, 15000);
        }
    };

    return (
        <div className="scan-button-container relative">
            {isScanning ? (
                <Loader />
            ) : (
                <button
                    onClick={startScan}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-36 h-36 rounded-full bg-violet-700 text-violet-200 font-bold text-2xl transition-all duration-300 animate-pulse hover:bg-violet-800 hover:text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] group overflow-hidden z-10"
                >
                    Start Scan
                </button>
            )}
            {isScanning && (
                <div className="fixed top-[60%] left-[50%] transform -translate-x-1/2 text-lg text-white">
                    {currentMessage}
                </div>
            )}
        </div>
    );
};

export default ScanButton;
