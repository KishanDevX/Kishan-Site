import React from "react";

const SectionHead = ({ title, icon }) => {
  return (
    <h2
      className="text-2xl z-50 sticky top-0 pt-1 
       uppercase font-black text-shadow-2xs text-white bg-prime md:text-prime md:bg-white md:dark:bg-gray-800 md:border-b-1"
    >
      <i className={`${icon} px-2`}></i>
      <span className="">{title}</span>
    </h2>
  );
};

export default SectionHead;
