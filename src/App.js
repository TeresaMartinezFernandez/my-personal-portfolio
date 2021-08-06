import React from "react";
import { Route, Switch } from "react-router-dom";
import "./stylesheet/App.scss";
import Header from "./components/Header";
import Landing from "./components/landing";
import AboutMe from "./components/Aboutme";
import Projects from "./components/Projects";
import dataProjects from "./dataServices/dataProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}>
          <Header />
          <Landing />
        </Route>
        <Route path="/Aboutme" render={AboutMe}></Route>
        <Route path="/Projects" render={Projects}>
          <Projects dataProjects={dataProjects} />
        </Route>
        <Route path="/Contact" render={Contact}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
