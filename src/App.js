import React from "react";
import "./App.scss";
import SubHeader from "./components/subheader/SubHeader";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
      <Nav />
    </div>
  );
}

export default App;
