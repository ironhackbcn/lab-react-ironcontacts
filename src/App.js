import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Contact from './components/Contact'
import Header from './components/Header'



class App extends Component {

  state = {
    contactsArray: contacts.slice(0, 5)
  }

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactsArray: [...this.state.contactsArray, randomContact]
    })
  }

  sortByName = () => {
    this.setState({
      contactsArray: this.state.contactsArray.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      contactsArray: this.state.contactsArray.sort(function (a, b) {
        return b.popularity - a.popularity;
      })
    })
  }

  deleteContact = (contact) => {
    let { contactsArray } = this.state
    contactsArray.splice(contact, 1)
    this.setState({
      contactsArray
    })
  }

  renderList() {
    return this.state.contactsArray.map((contact, index) => {
      return <Contact
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
        key={`id${index}`}
        index={index}
        deleteHandler={this.deleteContact}
      />

    })
  }
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <Header />
        <div className="container">
          {this.renderList()}
        </div>
      </div>

    );
  }
}

export default App;
