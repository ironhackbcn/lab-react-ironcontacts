import React, { Component } from "react";
import "./Card.css";
import Button from "./Button";

class Card extends Component {
  render() {
    const { name, image, popularity, index } = this.props;
    return (
      <tr>
        <td>
          <div className="img-table">
            <img src={image} alt=""></img>
          </div>
        </td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td>
          <Button>Delete</Button>
        </td>
      </tr>
    );
  }
}

export default Card;
