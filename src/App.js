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
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort( (a, b) => {
        return a.popularity - b.popularity;
      })
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
