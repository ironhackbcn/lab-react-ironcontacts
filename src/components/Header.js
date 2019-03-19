import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="titles">
        <h3>Picture</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
        <h3>Action</h3>
      </div>
    );
  }
}

export default Header;