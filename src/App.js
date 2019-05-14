import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import ContactsTable from './ContactsTable';

const selectContacts = [];
for (let i = 0; i < 5; i++ ) {
  selectContacts.push(contacts[i]);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronContacts</h1>
        </header>
        <main>
          <ContactsTable selectedContacts={selectContacts} />
        </main>
      </div>
    );
  }
}

export default App;
