import React, { useState } from "react";
import { Checkbox } from "./Form";

const DropdownCollapse = ({ title, data }) => {
  const [isCollapseShow, setIsCollapseShow] = useState(true);
  return (
    <div>
      <button
        className="h-[41px] w-full bg-[#f5f5f5BF] border-b border-[#D9D9D9BF] flex justify-between items-center px-[14px]"
        onClick={() => setIsCollapseShow(!isCollapseShow)}
      >
        <h3 className="text-lg font-semibold text-[#696969]">{title}</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            !isCollapseShow ? "rotate-180" : "rotate-0"
          } transition duration-300`}
        >
          <g id="chevron-down">
            <path
              id="Vector (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z"
              fill="#696969"
            />
          </g>
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isCollapseShow ? "500px" : "0px" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between h-[30px] text-[#868686] px-[14px]"
          >
            <div className="flex items-center gap-[9px]">
              <Checkbox />
              <p className="font-[400]">{item.name}</p>
            </div>
            <div className="font-[500]">({item.value})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownCollapse;
