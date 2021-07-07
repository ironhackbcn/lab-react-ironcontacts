import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { pictureUrl, name, popularity, deleteHandler, index } = this.props;
    return (
      <ul>
        <img src={pictureUrl} alt="img" />
        <p>{name}</p>
        <p>{popularity}</p>
        <button onClick={() => deleteHandler(index)}>Delete</button>
      </ul>
    );
  }
}

export default Contact;