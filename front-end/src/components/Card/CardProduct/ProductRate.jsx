import React from "react";

const ProductRate = ({ rate, totalRate, className }) => {
  return (
    <div className={`flex gap-[2.2px] items-center ${className}`}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <p>({totalRate})</p>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="w-4 h-4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="star 1" clipPath="url(#clip0_1_182)">
        <path
          id="Vector"
          d="M9.97406 3.83595C9.90859 3.63346 9.72899 3.48965 9.51651 3.4705L6.63023 3.20842L5.48892 0.537072C5.40477 0.341297 5.21311 0.214569 5.00017 0.214569C4.78723 0.214569 4.59558 0.341297 4.51142 0.53753L3.37011 3.20842L0.483379 3.4705C0.271276 3.4901 0.0921337 3.63346 0.0262903 3.83595C-0.0395531 4.03844 0.0212548 4.26054 0.181705 4.40054L2.36339 6.31389L1.72006 9.14775C1.67298 9.35611 1.75386 9.5715 1.92674 9.69647C2.01967 9.76361 2.12839 9.79779 2.23803 9.79779C2.33256 9.79779 2.42633 9.77231 2.51048 9.72195L5.00017 8.23395L7.48895 9.72195C7.67106 9.83151 7.90064 9.82152 8.07314 9.69647C8.24611 9.57111 8.3269 9.35565 8.27983 9.14775L7.6365 6.31389L9.81818 4.40092C9.97863 4.26054 10.0399 4.03882 9.97406 3.83595Z"
          fill="#FFC107"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_182">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProductRate;
