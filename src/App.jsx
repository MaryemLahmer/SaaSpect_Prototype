import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Scan from "./pages/Scan";
import Sidebar from "./components/Sidebar";
import RemainingTokensCard from "./components/RemainingTokensCard";
import MainContainer from "./components/MainContainer";
import "./App.css";

const App = () => {
  const [tokens, setTokens] = useState(10);

  return (
    <div className="body">
      <Sidebar />
      <RemainingTokensCard tokens={tokens} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" />} />{" "}
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
