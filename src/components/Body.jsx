import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Body = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Hero />
      <Skills setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Projects />
      <Contact setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
    </div>
  );
};

export default Body;
