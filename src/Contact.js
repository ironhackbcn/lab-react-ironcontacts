import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <tr class="contact-row">
        <td><img src={this.props.pictureUrl} alt="celebrity profile pic" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    );
  }
}

export default Contact;