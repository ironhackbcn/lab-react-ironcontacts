import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const {
      pictureUrl, 
      name, 
      popularity
    } = this.props;

    return(
      <li>
        <img src={pictureUrl} className="item" alt="."/>
        <h2>{name}</h2>
        <p>{popularity}</p>
      </li>
    )
  }
}

export default Contact;