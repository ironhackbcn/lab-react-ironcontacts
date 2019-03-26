import React, { Component } from 'react';
import contacts from '../data/contacts.json';
import '../App.css';

class ContactComponent extends Component {
  handleDelete = (e) => {
    this.props.paraEliminar(this.props.index);
  }

  render() {
      const {contact} = this.props
      return(
        <article className="card">
          <img className="card-img" src={contact.pictureUrl} alt={contact.name} />
          <h2 className="card-title">{contact.name}</h2>
          <h2 className="card-popularity">{contact.popularity}</h2>
          <button onClick={this.handleDelete}>delete</button>
          
        </article>
      )
    }
  }

export default ContactComponent;

