import React from "react";

const Header = () => {
  return (
    <header className="z-100 shadow-2xs bg-white py-2 flex fixed w-full top-0 justify-between items-center">
      <div data-ui="logo" className="text-prime ml-3 text-2xl font-bold">
        Kishan-DevX
      </div>
      <i className="ri-menu-3-line text-prime mr-3 text-2xl font-bold"></i>
    </header>
  );
};

export default Header;
