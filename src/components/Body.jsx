import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Body;
