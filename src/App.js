import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Contact from './Contact';

class App extends Component {
  render() {
    console.log(contacts[0]);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table class="contact-table">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <Contact pictureUrl={contacts[0].pictureUrl} name={contacts[0].name} popularity={contacts[0].popularity} />
        </table>
      </div>
    );
  }
}

export default App;
