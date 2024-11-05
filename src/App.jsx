import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Scan from "./pages/Scan";
import Sidebar from "./components/Sidebar";
import RemainingTokensCard from "./components/RemainingTokensCard";
import MainContainer from "./components/MainContainer";
import "./App.css";

const App = () => {
  const [tokens, setTokens] = useState(10); // Start with 10 tokens

  return (
    <div className="body">
      {/* Sidebar and RemainingTokensCard are always visible */}
      <Sidebar />
      <RemainingTokensCard tokens={tokens} />

      {/* Main content area that changes based on the route */}
      <div className="main-content">
        <Routes>
          <Route
            path="/overview"
            element={<MainContainer tokens={tokens} setTokens={setTokens} />}
          />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
