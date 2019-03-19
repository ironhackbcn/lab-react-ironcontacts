import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const {
      pictureUrl, 
      name, 
      popularity,
      onDelete,
      index
    } = this.props;

    return(
      <li>
        <img src={pictureUrl} className="item" alt="."/>
        <h2>{name}</h2>
        <p>{popularity}</p>
        <button onClick={() => {onDelete(index)}}>Delete</button>
      </li>
    )
  }
}

export default Contact;