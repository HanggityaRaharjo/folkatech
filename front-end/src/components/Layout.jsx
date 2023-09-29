import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isShowDropdownActivity, setIsShowDropdownActivity] = useState(false);

  return (
    <>
      <Header />
      <div className="bg-[#F5F5F5] px-[70px] mb-[24px]">
        <div className="relative w-[212px]">
          <button
            onClick={() => setIsShowDropdownActivity(!isShowDropdownActivity)}
            className="h-16 bg-[#EB3F36] w-[212px] text-white font-[500] flex justify-center items-center"
          >
            BELANJA
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
                  fill="white"
                />
              </g>
            </svg>
          </button>
          <div
            className="absolute w-full z-50 overflow-hidden transition-all duration-300"
            style={{ maxHeight: isShowDropdownActivity ? "500px" : "0px" }}
          >
            <button
              onClick={() => setIsShowDropdownActivity(true)}
              className="h-16 bg-[#EB3F36] w-[212px] text-white font-[500] flex justify-center items-center"
            >
              TOP UP
            </button>
            <button
              onClick={() => setIsShowDropdownActivity(true)}
              className="h-16 bg-[#EB3F36] w-[212px] text-white font-[500] flex justify-center items-center"
            >
              JALAN JALAN
            </button>
            <button
              onClick={() => setIsShowDropdownActivity(true)}
              className="h-16 bg-[#EB3F36] w-[212px] text-white font-[500] flex justify-center items-center"
            >
              ISI PULSA
            </button>
          </div>
        </div>
      </div>
      <main className="bg-white font-gotham">{children}</main>
    </>
  );
};

export default Layout;
