import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <tr className="contact-row">
        <td><img src={this.props.pictureUrl} alt="celebrity profile pic" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
        <button className="delete-btn" onClick={this.props.clickFunction}>Delete</button>
      </tr>
    );
  }
}

export default Contact;