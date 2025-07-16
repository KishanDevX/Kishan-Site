import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [showNav, setshowNav] = useState(false);
  return (
    <>
      <header
        className={`z-[100] bg-prime py-2 px-3 w-full fixed top-0 flex justify-between items-center
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div
          data-ui="logo"
          className="text-white text-shadow-2xs text-2xl font-black flex items-center"
        >
          Kishan-DevX
        </div>
        <i
          className="ri-menu-3-line lg:hidden text-white text-shadow-2xs text-2xl font-bold"
          onClick={() => {
            setshowNav(true);
          }}
        ></i>
        <ul className="hidden lg:flex gap-8 text-white capitalize mr-1">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a
              className="bg-white text-prime rounded-full px-3 py-1"
              href="#contact"
            >
              contact
            </a>
          </li>
        </ul>
      </header>

      <MobileNav
        show={showNav}
        onClose={() => {
          setshowNav(false);
        }}
      />
    </>
  );
};

export default Header;
