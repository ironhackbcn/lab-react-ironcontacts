import React, { Component } from 'react';
import './App.css';

// Components
import Card from './components/Card'
import Form from './components/Form'

import contacts from './data/contacts.json'
import generateRandomContact from './helpers/index'

class App extends Component {

  state = {
    contactsList: contacts.slice(0, 5)
  }

  renderList() {
    return this.state.contactsList.map((contact, index) => {
      return (
        <Card
          key={index}
          id={index}
          onDelete={this.handleDelete}
          contact={contact}
        />
      )
    })
  }

  handleClick = () => {
    const randomContact = generateRandomContact()
    let isRepeated = false

    this.state.contactsList.forEach(contact => {
      if (contact.name === randomContact.name) {
        isRepeated = true
      }
    })
    if (!isRepeated) {
      this.setState({
        contactsList: [...this.state.contactsList, randomContact]
      })
    }
  }

  handleSortByName = () => {
    const sortByName = this.state.contactsList.sort((contactA, contactB) => {
      return (contactA.name).localeCompare(contactB.name);
    })
    this.setState({
      contactsList: [...sortByName]
    })
  }

  handleSortByPopularity = () => {
    const sortByPopularity = this.state.contactsList.sort((contactA, contactB) => {
      return (contactB.popularity) - (contactA.popularity)
    })
    this.setState({
      contactsList: [...sortByPopularity]
    })
  }

  handleDelete = (id) => {
    const copyOfContactsList = this.state.contactsList
    copyOfContactsList.splice(id, 1);
    this.setState({
      contactsList: [...copyOfContactsList]
    })
  }

  handleAddUser = (newContact) => {
    this.setState({
      contactsList: [...this.state.contactsList, newContact]
    })
  }

  render() {
    return (
      <section>
        <Form addNewContact={this.handleAddUser} />
        <h1 onClick={this.handleClick}>IronContacts</h1>
        <button onClick={this.handleClick}>Add random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        {this.renderList()}
      </section>
    )
  }
}

export default App;
