import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, photo, popularity, handlerDelete, index } = this.props;
    return (
      <div className="card-Wrapper"> 
        <div className="photo-Wrapper">
          <img className="App-photo" src={photo} alt={name + "picture"} />
        </div>
        <div className="name-Wrapper">
          <p>{name}</p>
        </div>

        <div className="popularity-Wrapper">
          <p>{popularity}</p>
        </div>
        <div className="popularity-Wrapper">
          <button onClick ={()=>handlerDelete(index)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Card;
