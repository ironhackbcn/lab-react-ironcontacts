import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContactList } from './components/ContactList'

class App extends Component {

  render() {
    return (
      <section className="App">
        <h1>IronContacts</h1>
        <ContactList />
      </section>
    );
  }
}

export default App;
