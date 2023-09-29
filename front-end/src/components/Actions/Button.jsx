import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <button
      type={type != "submit" ? "button" : type}
      className={`w-full h-[59px] bg-primary rounded-[7px] flex justify-center items-center shadow-[0px_7px_6px_0px_#0000002B] active:scale-95 transition duration-150 mb-[39px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
