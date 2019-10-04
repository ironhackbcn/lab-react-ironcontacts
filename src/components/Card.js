import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, photo, popularity } = this.props;
    return (
      <div class="card-Wrapper"> 
        <div className="photo-Wrapper">
          <img className="App-photo" src={photo} alt={name + "picture"} />
        </div>
        <div className="name-Wrapper">
          <p>{name}</p>
        </div>

        <div className="popularity-Wrapper">
          <p>{popularity}</p>
        </div>
      </div>
    );
  }
}

export default Card;
