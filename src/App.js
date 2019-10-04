import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { randomContact } from './helpers';


import contacts from './data/contacts.json'

let selectedContacts = contacts.slice(0, 5);


class App extends Component {
  state = {
    contacts: selectedContacts,
  } 

  addContact = () => {
    const { contacts } = this.state;
    this.setState({
      contacts: [randomContact(), ...contacts]
    })
  }

  sortByName = () => {
    const { contacts } = this.state;
    const sorted = contacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
      contacts: sorted
    })
  }

  sortByPopularity = () => {
    const { contacts } = this.state;
    const sorted = contacts.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
    this.setState({
      contacts: sorted
    })
  }

  deleteContact = (contact) => {
    const contacts = this.state.contacts.filter(i => i.name !== contact.name)
    this.setState({contacts})
  }  


  render() {
    return (
      <div className="App">
        <Header /> 
        <section>
          <div className="buttons">
            <Button myProp={this.addContact}>Add Random Contact</Button>
            <Button myProp={this.sortByName}>Sort by name</Button>
            <Button myProp={this.sortByPopularity}>Sort by popularity</Button>
          </div>
          <table>
           <thead>
             <tr className="table-header">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
             </tr>             
           </thead>
           <tbody>
             {this.state.contacts.map((contact, index) => {
                return (                        
                  <tr key={`${contact}-${index}`}>
                      <td><img className="contact-img" src={contact.pictureUrl}></img></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                      <td><Button myProp={this.deleteContact.bind(this, contact)}>Delete</Button></td>
                  </tr>  
                )
              })}   
           </tbody>                      
          </table>           
         </section>
        
      </div>
    );
  }
}

export default App;
