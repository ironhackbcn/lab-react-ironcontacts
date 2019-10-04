import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.pictureUrl} className="Card-pic-size" alt="pic" />
        <p>{this.props.name}</p>
        <p>{this.props.popularity}</p>
      </div>
    );
  }
}

export default Card;
