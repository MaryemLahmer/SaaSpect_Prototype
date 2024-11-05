import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import RemainingTokensCard from "./components/RemainingTokensCard";
import MainContainer from "./components/MainContainer";
import "./App.css";

const App = () => {
  const [tokens, setTokens] = useState(10); // Start with 10 tokens

  return (
    <div class="body">
      <Sidebar />
      <RemainingTokensCard tokens={tokens} />
      <MainContainer tokens={tokens} setTokens={setTokens} />
    </div>
  );
};
export default App;
