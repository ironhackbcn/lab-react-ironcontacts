import React, { Component } from 'react';

class Card extends Component {
  render(){
    const {contact, onDelete, id} = this.props
    return(
      <article className="card">
        <img className="card-img" src={contact.pictureUrl} alt={contact.name} />
        <h3 className="card-title">{contact.name}</h3>
        <p className="card-popularity">{contact.popularity}</p>
        <button onClick={ () => onDelete(id) }>Delete</button>
      </article>
    )
  }
}

export default Card