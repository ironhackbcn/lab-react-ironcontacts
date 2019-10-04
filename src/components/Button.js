import React, { Component } from "react";
import logo from "../logo.svg";

const Button = ({ children, myFunction }) => {
  return <button onClick={myFunction}>{children}</button>;
};

export default Button;
