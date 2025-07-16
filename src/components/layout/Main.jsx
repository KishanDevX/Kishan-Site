import React from "react";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Projects from "../../sections/Projects";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";

const Main = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
};

export default Main;
