import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';

class App extends Component {

  render() {

    const ContactList = contacts.slice(0,5).map((contact, index) =>
      <tr>
        <td key={index}><img src={contact.pictureUrl}/></td>
        <td key={index}>{contact.name}</td>
        <td key={index}>{contact.popularity}</td>
      </tr>
        
      );

    return (
      <div className="App">
        <h1>IRONCONTACTS</h1>
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
              {ContactList}
          </tbody>
        </table>
      </div>
    );
  }

}
export default App;
