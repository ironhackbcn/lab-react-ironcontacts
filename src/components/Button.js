import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { children, myProp } = this.props;
    return <button onClick={myProp}>{children}</button>;
  }
}

export default Button;
