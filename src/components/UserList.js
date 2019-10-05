import React, { Component } from "react";
import "./UserList.css";
import Button from "./Button";

class UserList extends Component {
  HandleDelete = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    const { name, pictureUrl, popularity } = this.props;

    const newPopularity = Math.round(popularity * 100) / 100;

    return (
      <div className="wrapper">
        <div className="photo">
          <img src={pictureUrl} />
        </div>
        <div className="left">{name} </div>
        <div className="left">{newPopularity} </div>
        <div>
          <Button onClick={this.HandleDelete}>delete</Button>
        </div>
      </div>
    );
  }
}

export default UserList;
