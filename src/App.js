import React from "react";
import "./App.scss";
import SubHeader from "./components/subheader/SubHeader";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
    </div>
  );
}

export default App;
