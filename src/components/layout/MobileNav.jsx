import React, { useRef, useEffect, useState } from "react";

const NavItem = ({ name, icon, locateTo, exitNav }) => {
  return (
    <li>
      <a
        className="bg-gray-200/20 inline-block rounded-lg w-full py-1"
        href={locateTo ?? `#${name}`}
        onClick={exitNav}
      >
        <i className={`${icon} mx-2`}></i>
        <span>{name}</span>
      </a>
    </li>
  );
};

const ToggleTheme = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <h4 className="text-gray-200/80 mx-5 uppercase text-xs mb-2">theme</h4>

      <button
        data-ui="toggleBtn"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setIsLight((prev) => !prev);
        }}
        className="bg-prime/50 border-3 border-prime/50 relative flex items-center justify-between shadow-2xs shadow-gray-800/80 py-1 rounded-full px-1 text-white/80 mx-5 overflow-hidden"
      >
        {/* Highlight slider */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-white/10 rounded-full transition-transform duration-300 ${
            isLight ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        <div className="w-1/2 z-10 flex items-center justify-center gap-1">
          <i className="ri-sun-line"></i>
          <span className="text-sm">Light</span>
        </div>

        <div className="w-1/2 z-10 flex items-center justify-center gap-1">
          <i className="ri-moon-line"></i>
          <span className="text-sm">Dark</span>
        </div>
      </button>
    </>
  );
};

const MobileNav = ({ show, onClose }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, onClose]);

  return (
    <>
      {/* Backdrop to darken background */}
      {show && <div className="fixed inset-0 bg-gray-800/30 z-50"></div>}

      <nav
        ref={navRef}
        className={`fixed flex flex-col h-screen shadow-gray-800 shadow-2xl rounded-tl-2xl w-[60%] bg-gradient-to-l from-prime to-[#5c3ccf] z-[100] right-0 transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <i
          className="ri-close-fill self-end py-1 px-2 rounded-md shadow-2xl text-2xl text-white/80 m-2"
          onClick={onClose}
        ></i>

        <div data-ui="navFor-sections" className="flex mx-4 mt-2 flex-col">
          <h4 className="text-gray-200/80 uppercase text-xs mb-2">sections</h4>
          <ul className="capitalize border-b pb-5 mb-8 border-gray-200/70 flex flex-col gap-3 text-white">
            <NavItem exitNav={onClose} name="home" icon="ri-home-9-line" />
            <NavItem exitNav={onClose} name="about" icon="ri-id-card-line" />
            <NavItem exitNav={onClose} name="projects" icon="ri-folder-line" />
            <NavItem
              exitNav={onClose}
              name="services"
              icon="ri-briefcase-line"
            />
            <NavItem exitNav={onClose} name="contact" icon="ri-phone-line" />
          </ul>
        </div>

        <div data-ui="navFor-guidance" className="flex mx-4 mt-2 flex-col">
          <h4 className="text-gray-200/80 uppercase text-xs mb-2">
            assistance
          </h4>
          <ul className="capitalize border-b pb-5 mb-8 border-gray-200/70 flex flex-col gap-3 text-white">
            <NavItem name="help" icon="ri-question-line" />
            <NavItem name="leave feedback" icon="ri-feedback-line" />
          </ul>
        </div>

        <ToggleTheme />
      </nav>
    </>
  );
};

export default MobileNav;
