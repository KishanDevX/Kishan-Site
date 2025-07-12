import React, { useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <main className="w-full bg-white dark:bg-gray-900 flex flex-col items-center">
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
