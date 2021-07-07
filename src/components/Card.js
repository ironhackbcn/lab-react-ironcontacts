import React, { Component } from 'react';


class Card extends Component {
   const

   render(){
      const {
         name,
         popularity,
         pictureUrl,
         deleteItem,
         id,
      } = this.props;
      return (
         <li className="card">
            <img src={pictureUrl} alt={name}/>
            <h1>{name}</h1>
            <p>{popularity}</p>
            <button onClick={() => deleteItem(id)}>X</button>
         </li>
      )
   }
}

export default Card;