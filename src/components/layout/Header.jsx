import React from "react";

const Header = () => {
  return (
    <header
      className="z-100 shadow-2xs  bg-prime
      py-2 flex fixed w-full top-0 justify-between items-center"
    >
      <div
        data-ui="logo"
        className="text-white text-shadow-2xs ml-3 text-2xl font-bold flex justify-center items-center"
      >
        <span className="font-black">Kishan-DevX</span>
      </div>
      <i className="ri-menu-3-line text-white text-shadow-2xs mr-3 text-2xl font-bold"></i>
    </header>
  );
};

export default Header;
