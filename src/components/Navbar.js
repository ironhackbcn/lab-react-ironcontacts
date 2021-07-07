import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    const {picture, name, popularity, title} = this.props
    return (
      <div className="navbar">
        <h1>{title}</h1>
        <div className="navbar-info">
          <h4>{picture}</h4>
          <h4>{name}</h4>
          <h4>{popularity}</h4>
        </div>
      </div>
    );
  }
}

export default Navbar;