import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    const {src, name, popularity} = this.props
    return (
      <div className="artist-container">
        <img src={src} alt='image'/>
        <h3>{name}</h3>
        <p>{popularity}</p>
      </div>
    );
  }
}

export default ListItem;