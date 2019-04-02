import React, { Component } from 'react';
import contacts from '../data/contacts.json'
import '../App.css';
import ContactItem from './contactItem.js';

class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactsList : contacts.slice(0,5),
    }
  }

  getRandom = () => {
    const number = contacts.lenght;
    const randomKey = Math.floor(Math.random() * number);
    console.log(randomKey)
    return randomKey;
  }

  handleClick = () => {
    let {contactsList} = this.state;
    this.getRandom() //NaN
    const newItem = contacts[9] // Substituir 9 por getRandom
    let contactsListClone = contactsList.slice();
    contactsListClone.push(newItem);
    this.setState({
      contactsList: contactsListClone
    })
    return contactsList;
  }

  sortName = () => {
    let {contactsList} = this.state;
    let contactsListClone = contactsList
    .slice()
    .sort(
      (a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      }); //creates the clone of the state
    this.setState({
      contactsList: contactsListClone
    })
    return contactsList;
  }

  sortPopularity = () => {
    let {contactsList} = this.state;
    let contactsListClone = contactsList
    .slice()
    .sort(
      (a, b) => {
        if (a.pularity < b.pularity) {
          return -1;
        } else if (a.pularity > b.pularity) {
          return 1;
        } else {
          return 0;
        }
      }); //creates the clone of the state
    this.setState({
      contactsList: contactsListClone
    })
    return contactsList;
  }

  handleDelete = (id) => {
    console.log(id);
    this.setState({
      contactsList: this.state.contactsList.filter(item => item.name !== id)
    })
  }

  render() {
    const {contactsList} = this.state;
    return (
      <>
      <button onClick={this.handleClick}>Add one</button>
      <button onClick={this.sortName}>Sort name</button>
      <button onClick={this.sortPopularity}>Sort popularity</button>
      
      <ul>
        { contactsList.map((contact ,index) => {
          return <ContactItem key={index} item={contact} itemDelete={this.handleDelete} /> 
          })
        }
      </ul>
      </>
    );
  }
}

export default ContactList;