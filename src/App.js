import React from "react";
import "./stylesheet/App.scss";
import Header from "./components/Header";
import Landing from "./components/landing";
import AboutMe from "./components/Aboutme";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
