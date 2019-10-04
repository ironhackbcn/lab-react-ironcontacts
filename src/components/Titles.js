import React, { Component } from "react";
import "./Titles.css";

class Titles extends Component {
  render() {
    return (
      <div className="Titles">
        <h1>IronContacts</h1>
        <div className="Titles-flex">
          <h3>Picture</h3>
          <h3>Name</h3>
          <h3>Popularity</h3>
        </div>
      </div>
    );
  }
}

export default Titles;
