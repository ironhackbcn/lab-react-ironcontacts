import React, { Component } from 'react';

class Card extends Component{
  render(){
    const {
      image,
      name,
      popularity,
      onDelete
    } = this.props;
    return(
      <li className="card">
        <img src={image} alt={`${name}`}/>
        <h3>{name}</h3>
        <p>{popularity}</p>
        <button onClick={()=>{onDelete(name)}}>Delete</button>
      </li>
    )
  }
}

export default Card;