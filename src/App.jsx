import React, { useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import AOS from "aos";
import "aos/dist/aos.css";

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
      </main>
      <button
        data-ui="themeToggle"
        className="bg-prime/60 text-white py-1 px-2 rounded shadow-md fixed bottom-4 right-4 z-50 hover:bg-prime/90 transition"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default App;
