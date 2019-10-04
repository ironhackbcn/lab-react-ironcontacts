import React, { Component } from "react";
import "./UserList.css";

class Button extends Component {
  render() {
    const { children, onClick } = this.props;

    return <button onClick={onClick}>{children}</button>;
  }
}

export default Button;
