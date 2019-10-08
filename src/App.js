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
    // console.log('clickAddRandomContact',this.state.contacts)
    // console.log('[contacts[random], ...contacts]', [contacts[random], ...contacts])
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

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {/* <button onClick={this.clickAddRandomContact}>
          Add Random Contact
        </button> */}

        <Button myProp={this.clickAddRandomContact}>
          Add Random Contact
        </Button>

        <div className="wrapper">
          {this.state.contacts.map((card, index) =>{
            return (
              <ContactCard 
                key={`${card.name}-${index}`} 
                name={card.name} 
                pictureUrl={card.pictureUrl}
                popularity={card.popularity}
              />
            );
          })}
        </div>

        {/* <ContactCard>
          theContacts = {this.state.contacts}
        </ContactCard> */}
      </div>
    );
  }
}

export default App;
