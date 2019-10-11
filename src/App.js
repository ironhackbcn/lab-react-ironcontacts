import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';
import contacts from './data/contacts.json';
import Button from './components/Button';

let firstFiveContacts = contacts.slice(0,5);
let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

class App extends Component {
  state = {
    contacts: firstFiveContacts,
  } 
  
  clickAddRandomContact = () => {
    const { contacts } = this.state;
    let random = Math.floor(Math.random() * (contacts.length));
    // console.log(`obtengo el random: ${random}`);
    this.setState({
      contacts: [contacts[random], ...contacts]
    })
  }

  addContact = () => {
    const { contacts } = this.state;
    this.setState({
      contacts: [randomContact, ...contacts]
    })
  }

  sortByNames = () => {
    const { contacts } = this.state;
    const sortedContacts = contacts.sort(
      (a,b) => {
      if(a.name < b.name){
        return -1;
      } else if(a.name > b.name){
        return 1;
      } else{
        return 0;
      }
    })
    
    this.setState({
      contacts: sortedContacts
    })
    };

  sortByPopularity = () => {
    const { contacts } = this.state;
    const sortedByPop = contacts.sort((a,b) => a.popularity - b.popularity );

    this.setState({
      contacts: sortedByPop
    })
  };
  
  removeContact = (contact) => {
    const {contacts} = this.state;

    // remove the contact 
    /* exemple with arrow functions
     let tasks = [
      {'name': 'write', 'duration': 60},
      {'name': 'workout', 'duration': 120},
      {'name': 'duolingo', 'duration': 170}
    ]; 
     let dificultad = tasks.filter((task) => task.duration >= 120);
    */

    const contactFiltered = contacts.filter((contactActtual) => contactActtual.name !== contact.name);
    console.log("contactos filtrados", contactFiltered);

    this.setState({
      contacts: contactFiltered
    })
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <Button myProp={this.clickAddRandomContact}>
          Add Random Contact
        </Button>

        <Button myProp={this.sortByNames}>
          Sort by name
        </Button>

        <Button myProp={this.sortByPopularity}>
          Sort by popularity
        </Button>

        <div className="wrapper">
          {this.state.contacts.map((card, index) =>{
            return (
              <ContactCard 
                key={`${card.name}-${index}`} 
                name={card.name} 
                pictureUrl={card.pictureUrl}
                popularity={card.popularity}
                remove={this.removeContact.bind(this.state, card)}
              />
            );
          })}
        </div>

      </div>
    );
  }
}

export default App;
