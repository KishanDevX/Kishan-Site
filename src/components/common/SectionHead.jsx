import React from "react";

const SectionHead = ({ title, icon }) => {
  return (
    <h2
      // className="text-2xl z-50 sticky backdrop-blur-sm top-0 pt-1 bg-gradient-to-r
      // from-prime
      //  uppercase font-black text-shadow-2xs text-white"
      className="text-2xl z-50 sticky top-0 pt-1 
       uppercase font-black text-shadow-2xs text-white bg-prime"
    >
      <i className={`${icon} px-2`}></i>
      <span className="">{title}</span>
    </h2>
  );
};

export default SectionHead;
