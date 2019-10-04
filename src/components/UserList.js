import React, { Component } from "react";
import "./UserList.css";
import Button from "./Button";

class UserList extends Component {
  render() {
    const { name, pictureUrl, popularity, onClick } = this.props;

    const newPopularity = Math.round(popularity * 100) / 100;

    return (
      <div className="wrapper">
        <div className="photo">
          <img src={pictureUrl} />
        </div>
        <div className="left">{name} </div>
        <div className="left">{newPopularity} </div>
        <div>
          <Button onClick={onClick}>delete</Button>
        </div>
      </div>
    );
  }
}

export default UserList;
