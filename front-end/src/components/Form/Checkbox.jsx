import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
      <input type="checkbox" name="" id="" className="hidden" />
      <div
        className={`w-3 h-3 rounded-[2px] flex items-center justify-center text-white transition-all duration-300 ${
          isChecked ? "bg-primary" : "bg-[#d2d2d2]"
        }`}
      >
        {isChecked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export default Checkbox;
