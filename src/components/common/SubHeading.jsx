import React from "react";

const SubHeading = ({ text, icon }) => {
  return (
    <h2 className="text-2xl font-bold text-shadow-2xs text-prime flex items-center gap-2 mb-1">
      {icon && <i className={icon}></i>}
      {text}
    </h2>
  );
};

export default SubHeading;
