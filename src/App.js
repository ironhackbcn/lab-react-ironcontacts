import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import allContacts from './data/contacts.json';
import ContactList from './components/contactList';
import AddContact from './components/addContact';

class App extends Component {

  state = {
    contacts: allContacts.slice(0,5),
  }

  handleClick = (e) => {
    const random = allContacts[Math.floor(Math.random()*allContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, random],
    });
  }

  handleSort = (e) => {
    const sorted = this.state.contacts.sort(function (a, b) {
      if (a[e.target.id] > b[e.target.id]) {
        return 1;
      }
      if (a[e.target.id] < b[e.target.id]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      contacts: sorted,
    });
  }

  remove = (index) => {
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: [...this.state.contacts],
    });
  }

  add = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <AddContact new={this.add}/>
        <p></p>
        <button onClick={this.handleClick}>Add Random Contact</button>
        <button id="name" onClick={this.handleSort}>Sort by name</button>
        <button id="popularity" onClick={this.handleSort}>Sort by popularity</button>
        <p></p>
        <ContactList contacts={this.state.contacts} remove={this.remove}/>
      </div>
    );
  }
}

export default App;
