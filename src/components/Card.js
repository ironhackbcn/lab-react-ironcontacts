import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="card">
      <li>
        <img src={item.pictureUrl} alt=""/>
        <h2>{item.name}</h2>
        <p>{item.popularity}</p>
        <button onClick={() => {
                  this.props.onDelete(this.props.index)  
                }}>Delete</button>
      </li>
      </div>
    );
  }
}

export default Card;