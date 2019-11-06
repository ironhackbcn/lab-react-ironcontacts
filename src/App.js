import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import ListContacts from './ListContacts';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ListContacts/>
      </div>
    );
  }
}

export default App;
