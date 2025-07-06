import React from "react";
import Header from "./components/layout/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-white flex flex-col items-center">
        <Home />
        <About />
        <Projects />
        <Services />
      </main>
    </>
  );
};

export default App;
