import React, { Component } from 'react';

class ContactCard extends Component {

    handleDelete = (e) => {
        this.props.deleted(this.props.index);
      }

    render() {
        const {name, pictureUrl, popularity} = this.props.contact;
      return (
          <li>
              <div className="card-class">
              <h3>{name}</h3>
              <p>{popularity}</p>
              <img src = {`${pictureUrl}`} alt = "contactpicture"></img>
              <button onClick = {this.handleDelete}>Delete</button>
              </div>
          </li>
      )
    }
  }

  export default ContactCard;