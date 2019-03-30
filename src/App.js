import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json'
import ContactCard from './components/ContactCard';
import AddNewContact from './components/AddNewContact';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  } 

  handleAddContact = (contact) => {
      this.setState({
        contacts: [...this.state.contacts,contact],
        
      })
  }


  addrandomcontact = () => {
    
    const numerodecontacts = this.state.contacts.length;
    const numero=Math.floor(Math.random()*numerodecontacts);
    const  newcontact = this.state.contacts[numero];

    const newcontacts = [...this.state.contacts,newcontact]
    
    this.setState({
      contacts: newcontacts
    })
  }
  sortbyname = () => {
    const fivecontacts = this.state.contacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      contacts: fivecontacts
    })
  }

  sortbypopularity = () => {
    const fivecontacts = this.state.contacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      contacts: fivecontacts
    })
  }
  deleted = (index) => {
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: [...this.state.contacts]
    })
  }

  render() {

    const {contacts} = this.state

    return (
      
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick = {this.addrandomcontact}>New Contact</button>
        <button onClick = {this.sortbyname}>sort by name</button>
        <button onClick = {this.sortbypopularity}>sort by popularity</button>
        <div className ="card-class">
              <h3>Name</h3>
              <h3>Popularity</h3>
              <h3>Picture Contact</h3>
              </div>
          <ul>
            {contacts.map((contact, index) => {
              return <ContactCard 
                key = {index}
                index = {index}
                contact = {contact}
                deleted = {this.deleted}
              />
            })}     
          </ul>
        <AddNewContact onClick = {this.handleAddContact} />
        
      </div>
  
    );
  }
}

export default App;
