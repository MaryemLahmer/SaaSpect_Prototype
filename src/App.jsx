import "./App.css";
import Sidebar from "./components/Sidebar";
import RemainingTokensCard from "./components/RemainingTokensCard";
import MainContainer from "./components/MainContainer";
const App = () => {
  return (
    <>
      <div class="body">
        <Sidebar />
        <RemainingTokensCard />
        <MainContainer />
      </div>
    </>
  );
};

export default App;
