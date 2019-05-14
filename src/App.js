import React, { Component } from 'react';
import PopularContacts from './components/PopularContacts.js';
import contacts from './data/contacts.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Popular Contacts</h1>
          <PopularContacts contactsArray={contacts}></PopularContacts>
      </div>
    );
  }
}

export default App;
