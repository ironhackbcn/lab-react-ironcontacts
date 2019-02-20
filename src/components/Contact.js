import React, { Component } from "react";

export default class Contact extends Component {

  deleteHandler = () => {
    this.props.delete(this.props.name) 
  }
  render() {
    return (
        <tr>
          <td><img src={this.props.pictureUrl} alt="imagen" width="100px"/></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
          <td><button onClick={this.deleteHandler}>Delete</button></td>
        </tr>
    );
  }
}
