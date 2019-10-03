import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';

const ContactList = contacts.slice(0,5);
const RandomContact = contacts[Math.floor(Math.random()*contacts.length)];
ContactList.push(RandomContact)

const ContactListFinal = ContactList.map((contact, index) =>
<tr key={index}>
  <td ><img src={contact.pictureUrl}/></td>
  <td >{contact.name}</td>
  <td >{contact.popularity}</td>
</tr>
);


class App extends Component {

  state={
    contacts : ContactListFinal
  }

  DeleteAll = () => {
    this.setState({ contacts: [] });
  }
  RandomActor = () => {
    /* this.setState({ contacts: ContactListFinal }); */
  }

  render() {
    
    return (
      <div className="App">
        <h1>IRONCONTACTS</h1>
        <button onClick={this.RandomActor}>Add Random Contact</button>
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
              {this.state.contacts}
          </tbody>
        </table>
      </div>
    );
  }

}
export default App;
