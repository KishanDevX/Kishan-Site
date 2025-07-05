import React from "react";
import Header from "./components/layout/Header";
import Home from "./sections/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-white flex flex-col items-center">
        <Home />
      </main>
    </>
  );
};

export default App;
