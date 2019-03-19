import React, { Component } from 'react';
import contacts from './data/contacts.json';
import ListItem from './components/ListItem';
import Navbar from './components/Navbar'
import { sortByName, sortByPopularity } from './helpers/index';
import './App.css';

class App extends Component {

  state = {
    contacts: contacts.filter((contact, index) => index < 5)
  }

  addContact = () => {
    let contact = contacts[Math.floor(Math.random()* contacts.length)]
    this.setState({
      contacts: [...this.state.contacts, contact] 
    })
  }

  sortByName = () => {
    let contacts = sortByName([...this.state.contacts])
    this.setState({
      contacts
  })}

  sortByPopularity = () => {
    let contacts = sortByPopularity([...this.state.contacts])
    this.setState({
      contacts
    })
  }

  deleteContact(index){
    let contacts = [...this.state.contacts]
    contacts.splice(index, 1)
    this.setState({
      contacts
    })
  }
  render() {
    
    return (
      <div className="App">
      <Navbar 
        picture="picture"
        name="name"
        popularity="popularity"
        title="IronContacts"
      />
        {this.state.contacts.map((contact, index) => (
          <div>
          <ListItem 
            key={index}
            src={contact.pictureUrl}
            name={contact.name}
            popularity={contact.popularity}
            
          />
          <button onClick={() => {
            this.deleteContact(index)
          }}>X</button>
        </div>
        ))}
        <button onClick={this.addContact}>Add contact</button>
        <button onClick={this.sortByName}>Sort Name</button>
        <button onClick={this.sortByPopularity}>Sort Popularity</button>
      </div>
    );
  }
}

export default App;
