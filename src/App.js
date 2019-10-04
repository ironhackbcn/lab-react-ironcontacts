import React, { Component } from 'react';
// import logo from './logo.svg';
import contacts from './data/contacts.json';
import './App.css';
// import { generateContact } from './helpers/index.js';

let list = contacts.slice(0, 10).map((contact, index) => (
  <tr key={index}>
    <td>
      <img src={contact.pictureUrl} alt="" className="img-list" />
    </td>
    <td className="text-list">{contact.name}</td>
    <td className="text-list">{contact.popularity}</td>
  </tr>
));

class App extends Component {
  state = {
    contacts: contacts,
    title: 'Iron Contacts',
  };

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <div className="bttn-section">
          <button onClick={this.AddContact}>Add Contact</button>
          <button>Sort by Name</button>
          <button>Sort by Popularity</button>
        </div>
        <h1>{title}</h1>
        {list}
      </div>
    );
  }
}

export default App;
