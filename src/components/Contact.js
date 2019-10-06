import React, { Component } from "react";
import "./css/contact.css";

class Contact extends Component {
  render() {
    const { deleteContact, index } = this.props;
    return (
      <tr className="contactLine">
        <td>
          <img src={this.props.pictureUrl} alt="actor Img" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(1)}</td>
        <td>
          <td>
            <button onClick={() => deleteContact(index)}>delete</button>
          </td>
        </td>
      </tr>
    );
  }
}

export default Contact;

{
  /* <td><Button myProp={this.deleteContact.bind(this, contact)}>Delete</Button></td> */
}
