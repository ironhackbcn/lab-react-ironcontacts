import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactTable from './components/ContactTable';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <ContactTable>
          <ContactList />
        </ContactTable>
      </div>
    );
  }
}

export default App;
