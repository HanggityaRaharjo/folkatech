import { useState } from "react";

const Input = ({ type, className, placeholder, name }) => {
  const [statusShowPassword, setStatusShowPassword] = useState(false);
  if (type == "password") {
    return (
      <div className={`relative ${className}`}>
        <input
          type={statusShowPassword ? "text" : "password"}
          className=" w-full h-[59px] rounded-[7px] px-[18px] pr-16 outline-none shadow-[0px_1px_4px_0px_#00000040]"
          placeholder={placeholder}
          name={name}
          required
        />
        <button
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-secondary font-400"
          onClick={() => setStatusShowPassword(!statusShowPassword)}
          type="button"
        >
          {statusShowPassword ? "Hide" : "Show"}
        </button>
      </div>
    );
  } else {
    return (
      <input
        type={type}
        className={`w-full h-[59px] rounded-[7px] px-[18px] outline-none shadow-[0px_1px_4px_0px_#00000040] ${className}`}
        placeholder={placeholder}
        name={name}
        required
      />
    );
  }
};

export default Input;
