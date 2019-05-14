import React, { Component } from 'react';
import './App.css';
import ContactsTable from './components/ContactsTable';
import contacts from './data/contacts.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div><button className='btn'>Add Random Contact</button></div>
        <ContactsTable contactsArray={contacts} />
      </div>
    );
  }
}

export default App;
