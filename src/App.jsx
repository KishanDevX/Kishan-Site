import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
    const timer = setTimeout(() => setShowSplash(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-prime text-white text-3xl">
          <span>
            <Typewriter
              words={["welcome :)"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
            />
          </span>
        </div>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
