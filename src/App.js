import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Details from './components/Details';

class App extends Component {

  state = {
    contactsList: contacts.slice(0, 5)
  }

  renderContacts() {
    return this.state.contactsList.map((contact, index) => {
      return <Details
      key={index}
      pictureUrl={contact.pictureUrl}
      name={contact.name}
      popularity={contact.popularity}
      deleteContact={this.deleteContact}
      />
    })
  }

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        this.setState({
            contactsList: [...this.state.contactsList, randomContact]
        })
  }

  sortByName = () => {
    this.setState({
      contactsList: this.state.contactsList.sort(function(a,b) {
        if (a.name < b.name) {
          return -1;
        };
      return 0;
      })
    })
  }

  sortByPop = () => {
    this.setState({
      contactsList: this.state.contactsList.sort(function(a,b) {
        return b.popularity - a.popularity;
      })
    })
  }

  deleteContact = (contact) => {
    let { contactsList } = this.state
    contactsList.splice(contact, 1)
    this.setState({
      contactsList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <div className="content">
        <button onClick={this.addRandom}>Add random actor</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>
          <div className="wrapper">
            <h2 className="unit-titles">Image</h2>
            <h2 className="unit-titles">Name</h2>
            <h2 className="unit-titles">Popularity</h2>
            {this.renderContacts()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
