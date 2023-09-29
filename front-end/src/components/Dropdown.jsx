import React, { useState } from "react";

const Dropdown = () => {
  const [isShowValue, setIsShowValue] = useState(false);
  const [currentValue, setCurrentValue] = useState(12);

  return (
    <div className="relative">
      <button
        className="w-12 h-[30px] bg-[#F2F2F2] flex justify-between items-center pl-[4px]"
        onClick={() => setIsShowValue(!isShowValue)}
      >
        <span className="font-[400]">{currentValue}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="carret - down">
            <path
              id="Vector"
              d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
              fill="#6D6D6D"
            />
          </g>
        </svg>
      </button>
      <div
        className={`absolute border w-12 flex flex-col items-start bg-white ${
          isShowValue ? "" : "hidden"
        }`}
      >
        <button
          className="pl-1 hover:bg-blue-500 hover:text-white w-full"
          onClick={() => {
            setIsShowValue(!isShowValue);
            setCurrentValue(10);
          }}
        >
          10
        </button>
        <button
          className="pl-1 hover:bg-blue-500 hover:text-white w-full"
          onClick={() => {
            setIsShowValue(!isShowValue);
            setCurrentValue(25);
          }}
        >
          25
        </button>
        <button
          className="pl-1 hover:bg-blue-500 hover:text-white w-full"
          onClick={() => {
            setIsShowValue(!isShowValue);
            setCurrentValue(50);
          }}
        >
          50
        </button>
        <button
          className="pl-1 hover:bg-blue-500 hover:text-white w-full"
          onClick={() => {
            setIsShowValue(!isShowValue);
            setCurrentValue(100);
          }}
        >
          100
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
