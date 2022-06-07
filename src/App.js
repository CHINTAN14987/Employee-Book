import React from "react";
import CandidateDetailsDisplayed from "./components/CandidateDetailsDisplayed";
import MenuPage from "./components/MenuPage";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="Content_Container">
        <MenuPage />
        <CandidateDetailsDisplayed />
      </div>
    </div>
  );
};

export default App;
