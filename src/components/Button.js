import React from "react";

const Button = ({ children, action, className }) => {
  return (
    <button className={className} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
