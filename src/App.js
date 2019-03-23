import React, { Component } from 'react';
import contacts from './data/contacts.json';
import Contact from './Components/Contact.js';
import AddContact from './Components/AddContact.js';
import './App.css';


class App extends Component {
  
  state = {
    seenContacts: contacts.splice(0, 5),
  }
  
  handleNewContact = () => {
    const newContactNumber = Math.floor(Math.random() * contacts.length );
    
    this.setState({
      seenContacts: [...this.state.seenContacts, contacts[newContactNumber]]
    })
  }

  handleSortByName = () => {    
    const orderedContacts = this.state.seenContacts;
    
    function sortByName(a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }
    
    orderedContacts.sort(sortByName);

    this.setState({
      seenContacts: orderedContacts
    })
  }

  handleSortByPopularity = () => {    
    const orderedContacts = this.state.seenContacts;
    
    function sortByPopularity(a,b) {
      if (a.popularity < b.popularity)
        return 1;
      if (a.popularity > b.popularity)
        return -1;
      return 0;
    }
    
    orderedContacts.sort(sortByPopularity);

    this.setState({
      seenContacts: orderedContacts
    })
  }

  delete = (index) => {
    const removedList = this.state.seenContacts;
    removedList.splice(index, 1);

    this.setState({
      seenContacts: removedList
    })
  }

  handleTask = (contact) => {
    const newContactList = this.state.seenContacts;
    newContactList.push({
      name: contact,
      pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      popularity: 15.656534
    })

    this.setState({
      seenContacts: newContactList
    })
  }

  render() {
    const { seenContacts } = this.state;

    return (
      <div className="container">
        <h1>IronContacts</h1>
        <AddContact onClick={this.handleTask} />
        <br></br>
        <button onClick={this.handleNewContact}>Add Random Contact</button>
        <button onClick={this.handleSortByName}>Sort By Name</button>
        <button onClick={this.handleSortByPopularity}>Sort By Popularity</button>
        <ul>
          {seenContacts.map((contact, index) => { 
          return < Contact 
            contact = {contact}
            key = {index} 
            index = {index}
            deleteContact = { this.delete }
          />
          })}
        </ul>
     </div>
    );
  }
}

export default App;
