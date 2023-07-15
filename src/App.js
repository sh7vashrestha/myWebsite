import React from "react";
import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
