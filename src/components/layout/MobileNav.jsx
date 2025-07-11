import React from "react";

const NavItem = ({ name, icon, locateTo, exitNav }) => {
  return (
    <li className="">
      <a
        className="bg-gray-200/20 inline-block rounded-lg w-full py-1"
        href={locateTo ?? `#${name}`}
        onClick={exitNav}
      >
        <i className={`${icon} mx-2`}></i>
        <span className="">{name}</span>
      </a>
    </li>
  );
};

const MobileNav = ({ show, onClose }) => {
  return (
    <nav
      className={`fixed flex flex-col h-screen shadow-gray-800 shadow-2xl rounded-tl-2xl w-[60%] bg-gradient-to-l from-prime to-[#5c3ccf] z-100 right-0 transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <i
        className="ri-close-fill self-end py-1 px-2 rounded-md shadow-2xl text-2xl text-white/80 m-2"
        onClick={onClose}
      ></i>
      <div data-ui="navFor-sections" className="flex mx-4 mt-2 flex-col">
        <h4 className="text-gray-200/80 uppercase text-xs mb-2">sections</h4>
        <ul className="capitalize border-b-1 pb-5 mb-8 border-gray-200/70  flex flex-col gap-3 text-white">
          <NavItem exitNav={onClose} name="home" icon="ri-home-9-line" />
          <NavItem exitNav={onClose} name="about" icon="ri-id-card-line" />
          <NavItem exitNav={onClose} name="projects" icon="ri-folder-line" />
          <NavItem exitNav={onClose} name="services" icon="ri-briefcase-line" />
          <NavItem exitNav={onClose} name="contact" icon="ri-phone-line" />
        </ul>
      </div>
      <div data-ui="navFor-guidance" className="flex mx-4 mt-2 flex-col">
        <h4 className="text-gray-200/80 uppercase text-xs mb-2">assistance</h4>
        <ul className="capitalize border-b-1 pb-5 border-gray-200/70  flex flex-col gap-3 text-white">
          <NavItem name="help" icon="ri-question-line" />
          <NavItem name="leave feedback" icon="ri-feedback-line" />
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
