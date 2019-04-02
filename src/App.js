import React, { Component } from 'react';
// import contacts from './data/contacts.json'
import './App.css';
import ContactList from './components/contactList.js';

class App extends Component {
  render() {
    return (
      <ContactList />
    );
  }
}

export default App;
