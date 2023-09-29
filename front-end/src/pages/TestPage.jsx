import React, { useState } from "react";

const TestPage = () => {
  const [pageActive, setPageActive] = useState("profile");

  console.log(pageActive);

  return (
    <div className="min-h-screen w-screen overflow-hidden relative bg-purple-300">
      <div
        className={`min-h-screen absolute w-full bg-red-500 ${
          pageActive === "profile" ? "tab-active-move" : "tab-move"
        }`}
        style={{
          transform:
            pageActive == "profile" ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <button onClick={() => setPageActive("password")}>
          Move to Password
        </button>
      </div>

      <div
        className={`min-h-screen absolute w-full bg-green-500 ${
          pageActive === "profile" ? "tab-active-move" : "tab-move"
        }`}
        style={{
          transform:
            pageActive == "password" ? "translateX(0%)" : "translateX(-100%)",
          zIndex: "999",
        }}
      >
        <button onClick={() => setPageActive("profile")}>
          Move to profile
        </button>
      </div>
    </div>
  );
};

export default TestPage;
