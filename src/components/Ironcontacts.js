import React, { Component } from 'react';


class Ironcontacts extends Component {
  render() {
    // Guardamos en una const las props que biene del App.js justamente del renderList()
    const {deleteHandler, index, name, popularity, pictureUrl} = this.props;
    return (
      <div class="containerIroncontacts">
        <img src={pictureUrl} alt="pic"></img>
        <p>{name}</p>
        <p>{popularity}</p>
        <button onClick={() => deleteHandler(index)}>Delete</button>
      </div>
    );
  }
}

export default Ironcontacts;