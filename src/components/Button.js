import React from 'react';
import './Button.css';

const Button = ({ children, myProp}) => {
  return (
    <button className="Button" onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;

