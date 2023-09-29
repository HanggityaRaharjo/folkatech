import React from "react";

const Form = ({ children, onSubmit }) => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (let index = 0; index < e.target.length; index++) {
      const input = e.target[index];
      if (input.tagName === "INPUT" && input.hasAttribute("name")) {
        const name = input.getAttribute("name");
        const value = input.value;
        data[name] = value;
      }
    }
    onSubmit(data);
  };

  return <form onSubmit={(e) => HandleSubmit(e)}>{children}</form>;
};

export default Form;
